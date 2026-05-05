---
layout: section
---

# Take-aways

## Three problems · Four concepts · One standard.

---


# What we covered

<div class="grid grid-cols-2 gap-5 mt-6">

<div class="p-5 rounded border-l-4 border-gray-400">
  <div class="text-xs uppercase tracking-wider opacity-60">Umbrella</div>
  <div class="text-lg font-bold">📖 Evaluation API</div>
  <div class="text-sm opacity-70 mt-1">One shape, many languages — defaults mandatory, so your code never breaks.</div>
</div>

<div class="p-5 rounded border-l-4 border-blue-500">
  <div class="text-xs uppercase tracking-wider opacity-60">Problem</div>
  <div class="text-lg font-bold">Vendor lock-in</div>
  <div class="mt-2 text-xs uppercase tracking-wider opacity-60">Concept</div>
  <div class="text-base">🔌 Providers</div>
</div>

<div class="p-5 rounded border-l-4 border-purple-500">
  <div class="text-xs uppercase tracking-wider opacity-60">Problem</div>
  <div class="text-lg font-bold">Dynamic evaluation</div>
  <div class="mt-2 text-xs uppercase tracking-wider opacity-60">Concept</div>
  <div class="text-base">🎯 Evaluation Context</div>
</div>

<div class="p-5 rounded border-l-4 border-green-500">
  <div class="text-xs uppercase tracking-wider opacity-60">Problem</div>
  <div class="text-lg font-bold">Obsolete flags</div>
  <div class="mt-2 text-xs uppercase tracking-wider opacity-60">Concept</div>
  <div class="text-base">🪝 Hooks + OpenTelemetry</div>
</div>

</div>

---
layout: default
---

# What we didn't cover

<div class="text-sm opacity-70 -mt-2 mb-6">OpenFeature has more surface than three loops can fit. Two worth naming:</div>

<div class="grid grid-cols-2 gap-6">

<div class="p-5 rounded-lg border border-gray-200 shadow-sm flex flex-col gap-3">
  <div class="flex items-center gap-3">
    <carbon:chart-line-smooth class="text-4xl opacity-70"/>
    <div class="font-bold text-lg">Tracking</div>
  </div>
  <div class="text-sm opacity-80">
    Associate flag evaluations with downstream business events — clicks, conversions, revenue — to close the loop on experiments and impact analysis.
  </div>
  <div class="text-xs opacity-60 italic">
    <code>client.track("checkout_completed", ctx, details)</code>
  </div>
</div>

<div class="p-5 rounded-lg border border-gray-200 shadow-sm flex flex-col gap-3">
  <div class="flex items-center gap-3">
    <carbon:notification class="text-4xl opacity-70"/>
    <div class="font-bold text-lg">Events</div>
  </div>
  <div class="text-sm opacity-80">
    React to provider state changes — ready, stale, error, configuration updated — so non-request-driven code (UI, long-running jobs) can re-render or reload on the fly.
  </div>
  <div class="text-xs opacity-60 italic">
    <code>client.onProviderConfigurationChanged(...)</code>
  </div>
</div>

</div>

<div class="text-sm opacity-70 text-center mt-6">
  Both part of the OpenFeature spec — covered in full at <a href="https://openfeature.dev/specification/" target="_blank">openfeature.dev/specification</a>.
</div>

---
layout: statement
---

<img src="/img/openfeature-horizontal-black.svg" class="mx-auto h-20 mb-8 dark:invert"/>

<v-click>

Brings confidence to *everyone* in the Software Delivery Life-Cycle.

</v-click>

---
layout: image
image: /img/breaks/summit-vista.jpg
---

---
layout: default
---

# Join us

<div class="text-sm opacity-70 -mt-2 mb-8">OpenFeature grows with your problems — share your experience.</div>

<div class="grid grid-cols-2 gap-5">

<a href="https://cloud-native.slack.com/archives/C0344AANLA1" target="_blank" class="p-5 rounded-lg border border-gray-200 shadow-sm flex items-start gap-4 hover:border-gray-400 !text-inherit !no-underline">
  <carbon:logo-slack class="text-4xl opacity-70 shrink-0 mt-1"/>
  <div>
    <div class="font-bold">#openfeature on CNCF Slack</div>
    <div class="text-sm opacity-70 mt-1">Daily chat with maintainers and users. Best place to ask a question.</div>
    <div class="font-mono text-[10px] opacity-60 mt-1">cloud-native.slack.com · #openfeature</div>
  </div>
</a>

<a href="https://github.com/open-feature" target="_blank" class="p-5 rounded-lg border border-gray-200 shadow-sm flex items-start gap-4 hover:border-gray-400 !text-inherit !no-underline">
  <carbon:logo-github class="text-4xl opacity-70 shrink-0 mt-1"/>
  <div>
    <div class="font-bold">github.com/open-feature</div>
    <div class="text-sm opacity-70 mt-1">SDKs, providers, spec, CLI, playground — everything lives here. Issues and PRs welcome.</div>
    <div class="font-mono text-[10px] opacity-60 mt-1">github.com/open-feature</div>
  </div>
</a>

<a href="https://openfeature.dev/community" target="_blank" class="p-5 rounded-lg border border-gray-200 shadow-sm flex items-start gap-4 hover:border-gray-400 !text-inherit !no-underline">
  <carbon:user-multiple class="text-4xl opacity-70 shrink-0 mt-1"/>
  <div>
    <div class="font-bold">Community page</div>
    <div class="text-sm opacity-70 mt-1">Contributing guide, working groups, governance, code of conduct.</div>
    <div class="font-mono text-[10px] opacity-60 mt-1">openfeature.dev/community</div>
  </div>
</a>

<a href="https://openfeature.dev/community/meeting-notes" target="_blank" class="p-5 rounded-lg border border-gray-200 shadow-sm flex items-start gap-4 hover:border-gray-400 !text-inherit !no-underline">
  <carbon:calendar class="text-4xl opacity-70 shrink-0 mt-1"/>
  <div>
    <div class="font-bold">Community meetings</div>
    <div class="text-sm opacity-70 mt-1">Public weekly calls — bring a question, watch a recording, submit a topic.</div>
    <div class="font-mono text-[10px] opacity-60 mt-1">openfeature.dev/community/meeting-notes</div>
  </div>
</a>

</div>

<div class="text-sm opacity-70 text-center mt-6 italic">
  First-time contributors very welcome — the maintainers label good-first-issues on GitHub.
</div>

---
layout: default
---

# You're in good company

<div class="text-sm opacity-70 -mt-2 mb-6">A sample of public adopters:</div>

<div class="grid grid-cols-5 gap-3">
  <div class="p-3 rounded border border-gray-200 flex items-center justify-center gap-2 h-20 dark:bg-white">
    <img src="/img/logos/dynatrace.svg" class="h-7 object-contain"/>
    <span class="font-semibold text-gray-800 text-sm">Dynatrace</span>
  </div>
  <div class="p-3 rounded border border-gray-200 flex items-center justify-center h-20">
    <span class="font-bold text-xl">Otto</span>
  </div>
  <div class="p-3 rounded border border-gray-200 flex items-center justify-center gap-2 h-20 dark:bg-white">
    <img src="/img/logos/ebay-color.svg" class="h-6 object-contain"/>
  </div>
  <div class="p-3 rounded border border-gray-200 flex items-center justify-center gap-2 h-20 dark:bg-white">
    <img src="/img/logos/ford-color.svg" class="h-10 object-contain"/>
  </div>
  <div class="p-3 rounded border border-gray-200 flex items-center justify-center gap-2 h-20 dark:bg-white">
    <img src="/img/logos/spotify-color.svg" class="h-6 object-contain"/>
    <span class="font-semibold text-gray-800 text-sm">Spotify</span>
  </div>
  <div class="p-3 rounded border border-gray-200 flex items-center justify-center gap-2 h-20 dark:bg-white">
    <img src="/img/logos/google-color.svg" class="h-6 object-contain"/>
  </div>
  <div class="p-3 rounded border border-gray-200 flex items-center justify-center gap-2 h-20 dark:bg-white">
    <img src="/img/logos/datadog-color.svg" class="h-7 object-contain"/>
    <span class="font-semibold text-gray-800 text-sm">Datadog</span>
  </div>
  <div class="p-3 rounded border border-gray-200 flex items-center justify-center gap-2 h-20 dark:bg-white">
    <img src="/img/logos/octopusdeploy.svg" class="h-7 object-contain"/>
    <span class="font-semibold text-gray-800 text-sm">Octopus</span>
  </div>
  <div class="p-3 rounded border border-gray-200 flex items-center justify-center gap-2 h-20 dark:bg-white">
    <img src="/img/logos/bookingdotcom.svg" class="h-7 object-contain"/>
    <span class="font-semibold text-gray-800 text-sm">Booking</span>
  </div>
  <div class="p-3 rounded border border-gray-200 flex items-center justify-center gap-2 h-20 dark:bg-white">
    <img src="/img/logos/miro.svg" class="h-6 object-contain"/>
    <span class="font-semibold text-gray-800 text-sm">Miro</span>
  </div>
</div>

<div class="text-sm opacity-60 italic text-center mt-6">… and more — maybe you?</div>

---
layout: default
---

# Try it out

<div class="text-sm opacity-70 -mt-2 mb-8">Four places to start, in order of "how deep do I want to go?"</div>

<div class="grid grid-cols-2 gap-5">

<a href="https://openfeature.dev" target="_blank" class="p-5 rounded-lg border border-gray-200 shadow-sm flex items-start gap-4 hover:border-gray-400 !text-inherit !no-underline">
  <carbon:book class="text-4xl opacity-70 shrink-0 mt-1"/>
  <div>
    <div class="font-bold">openfeature.dev</div>
    <div class="text-sm opacity-70 mt-1">Start here — docs, SDK quick-starts, provider catalogue.</div>
    <div class="font-mono text-[10px] opacity-60 mt-1">openfeature.dev</div>
  </div>
</a>

<a href="https://flagd.dev/playground" target="_blank" class="p-5 rounded-lg border border-gray-200 shadow-sm flex items-start gap-4 hover:border-gray-400 !text-inherit !no-underline">
  <carbon:play class="text-4xl opacity-70 shrink-0 mt-1"/>
  <div>
    <div class="font-bold">flagd playground</div>
    <div class="text-sm opacity-70 mt-1">Targeting rules in the browser — no install, paste JSON, see evaluation results live.</div>
    <div class="font-mono text-[10px] opacity-60 mt-1">flagd.dev/playground</div>
  </div>
</a>

<a href="https://flagd.dev" target="_blank" class="p-5 rounded-lg border border-gray-200 shadow-sm flex items-start gap-4 hover:border-gray-400 !text-inherit !no-underline">
  <carbon:cloud class="text-4xl opacity-70 shrink-0 mt-1"/>
  <div>
    <div class="font-bold">flagd</div>
    <div class="text-sm opacity-70 mt-1">Cloud-native reference provider — YAML/JSON flags, OFREP-compatible.</div>
    <div class="font-mono text-[10px] opacity-60 mt-1">flagd.dev</div>
  </div>
</a>

<a href="https://github.com/aepfli/Fun-With-Flags-Demo" target="_blank" class="p-5 rounded-lg border border-gray-200 shadow-sm flex items-start gap-4 hover:border-gray-400 !text-inherit !no-underline">
  <carbon:rocket class="text-4xl opacity-70 shrink-0 mt-1"/>
  <div>
    <div class="font-bold">Fun With Flags — demo</div>
    <div class="text-sm opacity-70 mt-1">Clone, run, poke — working references across multiple languages and frameworks, using flagd, hooks, and OpenTelemetry.</div>
    <div class="font-mono text-[10px] opacity-60 mt-1">github.com/aepfli/Fun-With-Flags-Demo</div>
  </div>
</a>

</div>

<div class="abs-br m-6 flex items-end gap-2">
  <a href="https://openfeature.dev" target="_blank" class="text-xs opacity-60 hover:opacity-100 text-right leading-tight pb-1 !text-inherit">
    <div>Start here</div>
    <div class="font-mono text-[10px] opacity-80 mt-0.5">openfeature.dev</div>
  </a>
  <div class="bg-white p-1 rounded dark:invert">
    <QRCode data="https://openfeature.dev" :width="90" :height="90" :margin="2" />
  </div>
</div>

---
layout: end
---

# Thanks — Q&A

<div class="grid grid-cols-3 gap-6 mt-8 max-w-4xl mx-auto">
  <div class="text-center">
    <div class="text-xs uppercase tracking-wider opacity-60">Problem</div>
    <div class="text-lg font-bold mt-1">Vendor lock-in</div>
    <div class="text-xs opacity-60 mt-3">→</div>
    <div class="text-xs uppercase tracking-wider opacity-60 mt-2">Concept</div>
    <div class="text-base">Providers</div>
  </div>
  <div class="text-center">
    <div class="text-xs uppercase tracking-wider opacity-60">Problem</div>
    <div class="text-lg font-bold mt-1">Dynamic evaluation</div>
    <div class="text-xs opacity-60 mt-3">→</div>
    <div class="text-xs uppercase tracking-wider opacity-60 mt-2">Concept</div>
    <div class="text-base">Evaluation Context</div>
  </div>
  <div class="text-center">
    <div class="text-xs uppercase tracking-wider opacity-60">Problem</div>
    <div class="text-lg font-bold mt-1">Obsolete flags</div>
    <div class="text-xs opacity-60 mt-3">→</div>
    <div class="text-xs uppercase tracking-wider opacity-60 mt-2">Concept</div>
    <div class="text-base">Hooks</div>
  </div>
</div>

<div class="mt-10 text-sm opacity-80">
  <carbon:email class="inline"/> simon@schrottner.at &nbsp;·&nbsp;
  <carbon:link class="inline"/> <a href="https://schrottner.at" target="_blank">schrottner.at</a> &nbsp;·&nbsp;
  <carbon:logo-github class="inline"/> aepfli &nbsp;·&nbsp;
  <carbon:logo-linkedin class="inline"/> in/aepfli
</div>

<div class="mt-2 text-xs opacity-60 font-mono">
  <carbon:logo-github class="inline align-middle"/> github.com/aepfli/openFeatureTalk
</div>

<div class="abs-bl m-6 flex items-end gap-2">
  <div class="bg-white p-1 rounded dark:invert">
    <QRCode data="https://community.open-ecosystem.com/invites/uG1vNeughb" :width="90" :height="90" :margin="2" />
  </div>
  <a href="https://community.open-ecosystem.com/invites/uG1vNeughb" target="_blank" class="text-xs opacity-60 hover:opacity-100 text-left leading-tight pb-1 !text-inherit">
    <div><carbon:game-console class="inline"/> Try the community challenge</div>
    <div class="font-mono text-[10px] opacity-80 mt-0.5">community.open-ecosystem.com</div>
  </a>
</div>

<div class="abs-br m-6 flex items-end gap-2">
  <a href="https://schrottner.at/openFeatureTalk/" target="_blank" class="text-xs opacity-60 hover:opacity-100 text-right leading-tight pb-1 !text-inherit">
    <div>Slides — grab them now</div>
    <div class="font-mono text-[10px] opacity-80 mt-0.5">schrottner.at/openFeatureTalk</div>
  </a>
  <div class="bg-white p-1 rounded dark:invert">
    <QRCode data="https://schrottner.at/openFeatureTalk/" :width="90" :height="90" :margin="2" />
  </div>
</div>

