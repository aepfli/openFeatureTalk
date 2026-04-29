// Split slides.md into parts/ using Slidev's own parser to identify slide boundaries.
import { parse } from '@slidev/parser'
import { readFile, writeFile, mkdir, rm } from 'node:fs/promises'
import { existsSync } from 'node:fs'
import { resolve } from 'node:path'

const ROOT = resolve(import.meta.dirname, '..')
const SRC = resolve(ROOT, 'slides.md')
const PARTS = resolve(ROOT, 'parts')

const raw = await readFile(SRC, 'utf8')
const parsed = await parse(raw, SRC)
const lines = raw.split('\n')

console.log(`Parsed ${parsed.slides.length} slides`)

// Each parsed slide has { start, end } as line indices in the original file.
// `start` is the FIRST line of the slide (which is a `---` line if the slide has frontmatter,
// or the first content line if the slide has no frontmatter).
// `end` is the line AFTER the last line of the slide content (exclusive).

// To extract a slide's raw text we use lines[start..end-1].

// Build list of slides with their H1 (if any).
const slides = parsed.slides.map((s, idx) => {
  const text = lines.slice(s.start, s.end).join('\n')
  const m = text.match(/^# (.+)$/m)
  return {
    idx,
    start: s.start,
    end: s.end,
    h1: m ? m[1].trim() : null,
    text,
  }
})

// Chapter definitions: ordered list of H1s that belong to each chapter.
const chapters = [
  ['00-icebreaker.md',         ['How *not* to do Feature Flags', 'What happened', 'Fun with Flags', 'Who am I?', 'Agenda']],
  ['01-feature-flags.md',      ['Feature Flags', 'Coordinate & Target', 'Reduce Risk', 'Categories of Feature Flags', 'Feature Flagging Maturity']],
  ['02-openfeature.md',        ['A short history', 'Why did it need to exist?', 'Flow', 'Basic usage', 'Supported Types', 'The default is mandatory', 'Evaluation API']],
  ['03-iceberg.md',            ['Feature Flagging is an Iceberg', 'The Feature-Flagging Iceberg', 'At the start, you see…']],
  ['04-vendor-lock-in.md',     ['Problem 1', 'Homegrown', 'Vendors', 'Concept: Providers', 'Swap providers', 'Providers']],
  ['05-dynamic-evaluation.md', ['Problem 2', 'Why dynamic evaluation?', 'A flagd config with targeting', 'Concept: Evaluation Context',
                                'What *else* could we target on?', 'Operational context', 'Reduce the bug radius',
                                'Context on every call is tedious', 'Context at every level', 'Merge Order',
                                'Percentage rollouts', 'The determinism problem', 'Targeting Key', 'Evaluation Context']],
  ['06-obsolete-flags.md',     ['Problem 3', 'What happens in real orgs', 'When is it safe to remove a flag?',
                                'Flag Evaluation Life-Cycle', 'Concept: Hooks', 'Hooks + OpenTelemetry = observability for free',
                                'Other hook use-cases', 'Hooks']],
  ['07-take-aways-and-cta.md', ['Take-aways', 'What we covered', "What we didn't cover", 'Join us', "You're in good company",
                                'Try it out', 'Thanks — Q&A']],
  ['08-bonus.md',              ['Bonus', 'One more thing…', 'The API is brittle by design',
                                'Describe your flags in a manifest', 'Generate type-safe accessors',
                                'OFREP', 'Why a remote protocol?', 'What OFREP looks like']],
]

// Map H1 -> chapter index
const h1ToChapter = new Map()
chapters.forEach(([_, h1s], ci) => h1s.forEach(h => h1ToChapter.set(h, ci)))

// Walk slides; first slide (cover) has no chapter and stays in slides.md.
// Each subsequent slide inherits the current chapter (the chapter of the most recent H1-bearing slide).
let current = null
const slideChapter = []
for (const s of slides) {
  if (s.idx === 0) { slideChapter.push(null); continue }
  if (s.h1 && h1ToChapter.has(s.h1)) current = h1ToChapter.get(s.h1)
  slideChapter.push(current)
}

// Sanity: every non-cover slide should belong to a chapter.
const orphans = slides.filter((_, i) => i !== 0 && slideChapter[i] === null)
if (orphans.length) {
  console.warn(`WARNING: ${orphans.length} slides not assigned to a chapter`)
  for (const o of orphans) console.warn(`  slide ${o.idx} (lines ${o.start}-${o.end}) h1="${o.h1}"`)
}

// Reset parts dir
if (existsSync(PARTS)) await rm(PARTS, { recursive: true })
await mkdir(PARTS, { recursive: true })

// For each chapter, gather its slides in order and write them to the part file.
// Slides are joined by their original raw text. Between two slides we don't add anything —
// each slide's text already includes its leading `---\nfm\n---` if it had frontmatter.
// Slidev's parser wants either fm-open `---` at the start of each slide OR a `---` separator
// between slides without fm. Since our extracted slide text starts AT the slide's first line
// (`---` for fm slides, or content for fm-less slides), we need to join with `\n---\n` only
// when transitioning to a slide WITHOUT leading `---`.

function startsWithFmOpen(text) {
  return /^---\r?\n/.test(text)
}

const written = new Set()
const newMain = []
// Cover (slide 0) stays as-is.
newMain.push(slides[0].text)

for (let i = 0; i < chapters.length; i++) {
  const [fname] = chapters[i]
  const chapterSlides = slides.filter((_, idx) => slideChapter[idx] === i)
  if (chapterSlides.length === 0) {
    console.warn(`Chapter ${fname} has 0 slides`)
    continue
  }
  const out = []
  for (let j = 0; j < chapterSlides.length; j++) {
    const s = chapterSlides[j]
    if (j === 0) {
      out.push(s.text)
    } else {
      // Need a separator between slides. If the next slide already starts with fm-open `---`,
      // that itself acts as separator — we just need a newline gap. Otherwise insert `\n---\n`.
      if (startsWithFmOpen(s.text)) out.push('\n' + s.text)
      else out.push('\n---\n\n' + s.text)
    }
  }
  await writeFile(resolve(PARTS, fname), out.join('') + '\n')
  console.log(`Wrote parts/${fname} (${chapterSlides.length} slides)`)

  // src reference in main slides.md
  newMain.push('\n---\nsrc: ./parts/' + fname + '\n---\n')
}

await writeFile(SRC, newMain.join('') + '\n')
console.log(`\nslides.md now has ${(newMain.join('').match(/^/gm) || []).length} top-level lines`)
