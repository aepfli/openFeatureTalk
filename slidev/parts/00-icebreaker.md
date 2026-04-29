---
layout: section
---

# How *not* to do Feature Flags

A cautionary tale: Knight Capital Group, August 2012.

---
layout: image
image: /img/knight_capital.webp
---

---
layout: default
---

# What happened

<v-clicks>

- Lost **half a billion USD**
- ... in **one hour**
- ... due to a **feature flag**
- ... they **repurposed**

</v-clicks>

<div class="abs-br m-6 flex items-end gap-2">
  <a href="https://blog.statsig.com/how-to-lose-half-a-billion-dollars-with-bad-feature-flags-ccebb26adeec" target="_blank" class="text-xs opacity-60 hover:opacity-100 text-right leading-tight pb-1 !text-inherit">
    <div>statsig.com — how to lose half a billion dollars</div>
    <div class="font-mono text-[10px] opacity-80 mt-0.5">blog.statsig.com</div>
  </a>
  <div class="bg-white p-1 rounded dark:invert">
    <QRCode data="https://blog.statsig.com/how-to-lose-half-a-billion-dollars-with-bad-feature-flags-ccebb26adeec" :width="90" :height="90" :margin="2" />
  </div>
</div>

---
layout: intro
---

# Fun with Flags

## How OpenFeature Solves Your Feature Flag Headaches

<div class="pt-8 opacity-90 text-sm space-y-1">
  <div>Simon Schrottner · OpenFeature maintainer · CNCF Ambassador</div>
  <div><carbon:email class="inline"/> simon.schrottner@gmail.com &nbsp;·&nbsp;
       <carbon:logo-github class="inline"/> aepfli &nbsp;·&nbsp;
       <carbon:logo-linkedin class="inline"/> in/aepfli</div>
</div>

---
layout: image-right
image: /img/simon.jpg
---

# Who am I?

**Simon Schrottner**

<div class="grid grid-cols-2 gap-4 mt-6">
  <div class="rounded border border-gray-200 p-4 text-center flex flex-col items-center justify-between">
    <img src="/img/openfeature-horizontal-black.svg" class="h-14 object-contain dark:invert" />
    <div class="text-sm mt-3">OpenFeature Maintainer</div>
  </div>
  <div class="rounded border border-gray-200 p-4 text-center flex flex-col items-center justify-between">
    <div class="dark:bg-white dark:p-2 dark:rounded">
      <img src="/img/cncf-ambassador-color.svg" class="h-14 object-contain" />
    </div>
    <div class="text-sm mt-3">CNCF Ambassador</div>
  </div>
</div>

<div class="pt-4 text-sm opacity-70">Open Source enthusiast</div>

<div class="pt-6 text-xs opacity-70 space-y-1">
  <div><carbon:email class="inline"/> simon.schrottner@gmail.com</div>
  <div><carbon:logo-github class="inline"/> aepfli &nbsp; <carbon:logo-linkedin class="inline"/> in/aepfli</div>
  <div>🦋 @aepfli.bsky.social</div>
</div>

---
layout: default
---

# Agenda

<div class="grid grid-cols-3 gap-8 mt-8 items-stretch">

<v-clicks>

<div class="rounded-lg border border-gray-200 overflow-hidden shadow-sm flex flex-col h-full">
  <div class="bg-gray-50 p-4 flex items-center justify-center h-40">
    <img src="/img/fowler-ff-types.png" class="max-h-full max-w-full object-contain" />
  </div>
  <div class="p-4 flex flex-col gap-1">
    <div class="text-3xl opacity-40 leading-none">1</div>
    <div class="text-lg font-semibold">Feature Flags</div>
    <div class="text-sm opacity-70">What they are, why we use them.</div>
  </div>
</div>

<div class="rounded-lg border border-gray-200 overflow-hidden shadow-sm flex flex-col h-full">
  <div class="bg-gray-50 p-4 flex items-center justify-center h-40">
    <img src="/img/openfeature-horizontal-black.svg" class="max-h-full max-w-full object-contain dark:invert" />
  </div>
  <div class="p-4 flex flex-col gap-1">
    <div class="text-3xl opacity-40 leading-none">2</div>
    <div class="text-lg font-semibold">OpenFeature</div>
    <div class="text-sm opacity-70">A vendor-agnostic standard.</div>
  </div>
</div>

<div class="rounded-lg border border-gray-200 overflow-hidden shadow-sm flex flex-col h-full">
  <div class="bg-gray-50 p-4 flex items-center justify-center h-40">
    <img src="/img/feature-flagging-iceberg.png" class="max-h-full max-w-full object-contain" />
  </div>
  <div class="p-4 flex flex-col gap-1">
    <div class="text-3xl opacity-40 leading-none">3</div>
    <div class="text-lg font-semibold">Pitfalls & Fixes</div>
    <div class="text-sm opacity-70">Three problems. Three concepts. One rhythm.</div>
  </div>
</div>

</v-clicks>

</div>

