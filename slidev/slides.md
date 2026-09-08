---
theme: seriph
title: "Fun with Flags: How OpenFeature Solves Your Feature Flag Headaches"
info: |
  Fun with Flags: How OpenFeature Solves Your Feature Flag Headaches.
  Simon Schrottner — OpenFeature maintainer & TSC member, CNCF & AAIF Ambassador.
author: Simon Schrottner
highlighter: shiki
lineNumbers: false
drawings:
  persist: false
transition: slide-left
mdc: true
fonts:
  sans: Inter
  mono: JetBrains Mono
addons:
  - slidev-addon-qrcode
layout: section
---

# Fun with Flags

## How OpenFeature Solves Your Feature Flag Headaches

<div class="pt-8 opacity-90 text-sm space-y-1">
  <div>Simon Schrottner · OpenFeature maintainer & TSC member · CNCF & AAIF Ambassador</div>
  <div><carbon:email class="inline"/> simon@schrottner.at &nbsp;·&nbsp;
       <carbon:link class="inline"/> <a href="https://schrottner.at" target="_blank">schrottner.at</a> &nbsp;·&nbsp;
       <carbon:logo-github class="inline"/> aepfli &nbsp;·&nbsp;
       <carbon:logo-linkedin class="inline"/> in/aepfli</div>
</div>

<div class="abs-br m-6 flex items-end gap-2">
  <a href="https://schrottner.at/openFeatureTalk/" target="_blank" class="text-xs opacity-60 hover:opacity-100 text-right leading-tight pb-1 !text-inherit">
    <div>Slides — grab them now</div>
    <div class="font-mono text-[10px] opacity-80 mt-0.5">schrottner.at/openFeatureTalk</div>
  </a>
  <div class="bg-white p-1 rounded dark:invert">
    <QRCode data="https://schrottner.at/openFeatureTalk/" :width="100" :height="100" :margin="2" />
  </div>
</div>

<!--
  Narrative rhythm (do not break):
    Hook (Knight Capital) → Who I am → What are FFs → OpenFeature intro
    → Loop 1: Problem (Lock-in)        → Concept (Providers)           → Recap
    → Loop 2: Problem (Dynamic eval)   → Concept (Evaluation Context)  → Recap
    → Loop 3: Problem (Obsolete flags) → Concept (Hooks)               → Recap
    → Take-aways (all concepts)
    → CTA (community + try it)
-->

---
src: ./parts/00-icebreaker.md
---

---
src: ./parts/01-feature-flags.md
---

---
src: ./parts/02-openfeature.md
---

---
src: ./parts/03-iceberg.md
---

---
src: ./parts/04-vendor-lock-in.md
---

---
src: ./parts/05-dynamic-evaluation.md
---

---
src: ./parts/06-obsolete-flags.md
---

---
src: ./parts/07-take-aways-and-cta.md
---

---
src: ./parts/08-bonus.md
---

