---
layout: section
---

# Feature Flagging is an Iceberg

## What you see is not what you get.

---
layout: center
---

# The Feature-Flagging Iceberg

<img src="/img/feature-flagging-iceberg.png" class="mx-auto" style="max-height: 420px; max-width: 60%; width: auto; height: auto; object-fit: contain;"/>

<div class="abs-br m-6 flex items-end gap-2">
  <a href="https://openfeature.dev/blog/openfeature-a-standard-for-feature-flagging/#the-feature-flagging-iceberg" target="_blank" class="text-xs opacity-60 hover:opacity-100 text-right leading-tight pb-1 !text-inherit">
    <div>The Feature-Flagging Iceberg — openfeature.dev</div>
    <div class="font-mono text-[10px] opacity-80 mt-0.5">openfeature.dev/blog/openfeature-a-standard-for-feature-flagging</div>
  </a>
  <div class="bg-white p-1 rounded dark:invert">
    <QRCode data="https://openfeature.dev/blog/openfeature-a-standard-for-feature-flagging/#the-feature-flagging-iceberg" :width="90" :height="90" :margin="2" />
  </div>
</div>

---
layout: two-cols
---

# At the start, you see…

<div class="text-sm opacity-70 italic -mt-2 mb-4">a glorified conditional</div>

- A boolean toggle
- `if (flag) { newThing() }`
- "How hard can it be?"

::right::

<v-click>

# Later you discover…

- Vendor lock-in
- Dynamic targeting / experiments
- Stale & obsolete flags
- Observability gaps
- Brittle string keys
- Lifecycle & governance

<div class="text-sm opacity-70 pt-4">
  We'll focus on <b>three</b> of these in depth.
</div>

</v-click>

