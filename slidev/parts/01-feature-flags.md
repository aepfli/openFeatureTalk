---
layout: section
---

# Feature Flags

## What are they — and why bother?

---
layout: statement
---

Feature flags <span v-mark.highlight.yellow="1">enable, disable, or change behavior</span> of features in a product or service <span v-mark.highlight.yellow="2">at runtime</span> — <span v-mark.highlight.yellow="3">without modifying the source code</span>.

---
layout: default
---

# Coordinate & Target

<div class="grid grid-cols-3 gap-6 mt-8 items-stretch">
  <div class="rounded-lg border border-gray-200 shadow-sm p-6 text-center flex flex-col items-center gap-3 h-full">
    <carbon:time class="text-5xl opacity-70"/>
    <div class="font-bold text-lg">Synchronized rollouts</div>
    <div class="text-sm opacity-70">ship a new feature to every service at the same moment, without coordinating deploys</div>
  </div>
  <div class="rounded-lg border border-gray-200 shadow-sm p-6 text-center flex flex-col items-center gap-3 h-full">
    <carbon:chart-multi-line class="text-5xl opacity-70"/>
    <div class="font-bold text-lg">A/B experiments</div>
    <div class="text-sm opacity-70">serve two variants, measure which wins, close the loop with data</div>
  </div>
  <div class="rounded-lg border border-gray-200 shadow-sm p-6 text-center flex flex-col items-center gap-3 h-full">
    <carbon:user-multiple class="text-5xl opacity-70"/>
    <div class="font-bold text-lg">Targeted release</div>
    <div class="text-sm opacity-70">beta testers, enterprise tier, a single region — each sees a different flag value</div>
  </div>
</div>

---
layout: default
---

# Reduce Risk

<div class="grid grid-cols-3 gap-6 mt-8 items-stretch">
  <div class="rounded-lg border border-gray-200 shadow-sm p-6 text-center flex flex-col items-center gap-3 h-full">
    <carbon:launch class="text-5xl opacity-70"/>
    <div class="font-bold text-lg">Deploy ≠ release</div>
    <div class="text-sm opacity-70">ship code dark; turn it on later without redeploying</div>
  </div>
  <div class="rounded-lg border border-gray-200 shadow-sm p-6 text-center flex flex-col items-center gap-3 h-full">
    <carbon:stop-outline class="text-5xl opacity-70"/>
    <div class="font-bold text-lg">Kill switch</div>
    <div class="text-sm opacity-70">disable a bad feature in seconds, no revert, no rebuild</div>
  </div>
  <div class="rounded-lg border border-gray-200 shadow-sm p-6 text-center flex flex-col items-center gap-3 h-full">
    <carbon:chart-line class="text-5xl opacity-70"/>
    <div class="font-bold text-lg">Progressive rollout</div>
    <div class="text-sm opacity-70">1% → 10% → 100%, monitoring errors as you ramp</div>
  </div>
</div>

---
layout: default
---

# Categories of Feature Flags

Those use-cases aren't all the same kind of flag — they differ in **longevity** and **dynamism**.

<div class="flex justify-center mt-2">
  <img src="/img/fowler-ff-types.png" class="mx-auto" style="max-height: 340px; max-width: 90%; width: auto; height: auto; object-fit: contain;"/>
</div>

<div class="abs-br m-6 flex items-end gap-2">
  <a href="https://martinfowler.com/articles/feature-toggles.html" target="_blank" class="text-xs opacity-60 hover:opacity-100 text-right leading-tight pb-1 !text-inherit">
    <div>Pete Hodgson — Feature Flag Types</div>
    <div class="font-mono text-[10px] opacity-80 mt-0.5">martinfowler.com/articles/feature-toggles.html</div>
  </a>
  <div class="bg-white p-1 rounded dark:invert">
    <QRCode data="https://martinfowler.com/articles/feature-toggles.html" :width="90" :height="90" :margin="2" />
  </div>
</div>

---
layout: two-cols
---

# Feature Flagging Maturity

<div class="text-sm opacity-70 mt-1">Different organisations sit at different stages of adoption.</div>

<div class="bg-white dark:bg-transparent rounded-lg shadow-sm dark:shadow-none p-3 flex items-center justify-center mt-3" style="height: 400px;">
  <img v-if="$clicks === 1" src="/img/maturity-step-1.svg" style="height: 370px; max-width: 100%; width: auto; object-fit: contain;"/>
  <img v-else-if="$clicks === 2" src="/img/maturity-step-2.svg" style="height: 370px; max-width: 100%; width: auto; object-fit: contain;"/>
  <img v-else-if="$clicks === 3" src="/img/maturity-step-3.svg" style="height: 370px; max-width: 100%; width: auto; object-fit: contain;"/>
  <img v-else-if="$clicks === 4" src="/img/maturity-step-4.svg" style="height: 370px; max-width: 100%; width: auto; object-fit: contain;"/>
  <img v-else src="/img/maturity-model-cropped.svg" style="height: 370px; max-width: 100%; width: auto; object-fit: contain;"/>
</div>

::right::

<v-switch unmount at="1" class="mt-16">
  <template #1>
    <div class="space-y-3">
      <div class="text-xs uppercase tracking-wider opacity-60">Level 1 — The ENV_VAR swamp</div>
      <p class="text-lg opacity-85">Hand-rolled booleans, env vars, and config files scattered across services. No central control. Changes require a redeploy.</p>
    </div>
  </template>
  <template #2>
    <div class="space-y-3">
      <div class="text-xs uppercase tracking-wider opacity-60">Level 2 — Dynamic configuration</div>
      <p class="text-lg opacity-85">A single place to flip flags without redeploying. Operations-friendly — you can disable a bad feature in seconds.</p>
    </div>
  </template>
  <template #3>
    <div class="space-y-3">
      <div class="text-xs uppercase tracking-wider opacity-60">Level 3 — Dynamic evaluation</div>
      <p class="text-lg opacity-85">Per-user, per-segment, per-tenant targeting. Experimentation. Personalisation. Progressive rollouts.</p>
    </div>
  </template>
  <template #4>
    <div class="space-y-3">
      <div class="text-xs uppercase tracking-wider opacity-60">Level 4 — Operationalized Feature-Flags</div>
      <p class="text-lg opacity-85">Flags treated like any other part of the SDLC — ownership, cleanup policies, audit trails, observability wired in by default.</p>
    </div>
  </template>
</v-switch>

---
layout: image
image: /img/breaks/spring-blossoms.jpg
---

---
layout: center
---

<span class="sr-only">OpenFeature</span>

<div class="flex flex-col items-center gap-6 mt-4">
  <img src="/img/openfeature-horizontal-black.svg" class="h-24 dark:invert"/>
  <div class="text-xl opacity-80 text-center max-w-2xl">A vendor-agnostic, community-driven standard for feature flagging</div>
  <div class="flex flex-col items-center gap-1 mt-4">
    <img src="/img/cncf-incubating-color.svg" class="h-20 dark:hidden"/>
    <img src="/img/cncf-incubating-white.svg" class="h-20 hidden dark:block"/>
    <div class="text-xs opacity-60">CNCF Incubating project</div>
  </div>
</div>

