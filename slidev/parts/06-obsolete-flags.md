---
layout: section
---

# Problem 3

## Obsolete Feature Flags

Flags that never change value — or never get evaluated at all.

---


# What happens in real orgs

- Thousands of flags accumulate
- Hundreds never evaluated in months
- The oldest go back **years**
- Dead code · technical debt · hidden complexity

<div class="text-sm opacity-60 italic mt-6">
  (my personal record: a "temporary" flag from 2018, still alive today.)
</div>

<div class="mt-6 p-4 rounded border border-gray-200 text-sm flex items-start gap-3">
  <carbon:play-outline class="text-xl opacity-70 shrink-0 mt-0.5"/>
  <div>
    For concrete numbers from a real organization, see my previous talk:
    <a href="https://www.youtube.com/watch?v=pvjmPTTyCfc" target="_blank">youtube.com/watch?v=pvjmPTTyCfc</a>
  </div>
</div>

---
layout: statement
---

# When is it safe to remove a flag?

<div class="text-xl opacity-70 mt-8">
  We have to <b>observe</b> flag evaluations.
</div>

---
layout: default
---

# Flag Evaluation Life-Cycle

<img src="/img/evallifecycle.svg" class="mx-auto mt-6" style="max-height: 520px; max-width: 92%; width: auto; height: auto; object-fit: contain;"/>

<div class="abs-br m-6 flex items-end gap-2">
  <a href="https://openfeature.dev/specification/sections/hooks#overview" target="_blank" class="text-xs opacity-60 hover:opacity-100 text-right leading-tight pb-1 !text-inherit">
    <div>Hooks — OpenFeature spec</div>
    <div class="font-mono text-[10px] opacity-80 mt-0.5">openfeature.dev/specification/sections/hooks</div>
  </a>
  <div class="bg-white p-1 rounded dark:invert">
    <QRCode data="https://openfeature.dev/specification/sections/hooks#overview" :width="90" :height="90" :margin="2" />
  </div>
</div>

---


# Concept: Hooks

Inject behavior at well-defined points in the evaluation life-cycle — at any level you need.

```java {1-5|7-8|10-11}
// per-invocation
client.getBooleanValue("key", false, ctx,
    FlagEvaluationOptions.builder()
        .hook(new ExampleInvocationHook())
        .build());

// per-client
client.addHooks(new ExampleClientHook());

// global
OpenFeatureAPI.getInstance().addHooks(new ExampleGlobalHook());
```

---


# Hooks + OpenTelemetry = observability for free

<div class="absolute top-8 right-8 opacity-80">
  <logos:opentelemetry class="h-8"/>
</div>

<div class="text-sm opacity-70 -mt-2 mb-6">
  Drop the SDK-contrib OpenTelemetry hook in — every evaluation emits signals that follow the OTel semantic convention.
</div>

<div class="grid grid-cols-2 gap-6">

<div class="p-5 rounded-lg border border-gray-200 flex flex-col gap-2">

<div class="flex items-center gap-2 font-bold"><carbon:view class="opacity-70"/> Traces</div>

- Span event per evaluation, attached to the current span
- Flag key, provider, and chosen variant
- Error details on failure

</div>

<div class="p-5 rounded-lg border border-gray-200 flex flex-col gap-2">

<div class="flex items-center gap-2 font-bold"><carbon:chart-line-data class="opacity-70"/> Metrics</div>

- Total evaluation calls
- Success / error counts
- Active evaluations counter

</div>

</div>

<div class="text-sm opacity-70 mt-8">
  Ready-to-drop-in hooks for Java, Node.js, Go, Python, .NET, … — maintained by the community in <code>open-feature/&lt;lang&gt;-sdk-contrib</code>.
</div>

<div class="abs-br m-6 flex gap-6 items-end">
  <a href="https://opentelemetry.io/docs/specs/semconv/feature-flags/" target="_blank" class="text-xs opacity-60 hover:opacity-100 text-right leading-tight pb-1 !text-inherit">
    <div>OTel semantic convention — feature flags</div>
    <div class="font-mono text-[10px] opacity-80 mt-0.5">opentelemetry.io/docs/specs/semconv/feature-flags</div>
  </a>
  <div class="bg-white p-1 rounded dark:invert">
    <QRCode data="https://opentelemetry.io/docs/specs/semconv/feature-flags/" :width="84" :height="84" :margin="2" />
  </div>
  <a href="https://github.com/open-feature/java-sdk-contrib/tree/main/hooks/open-telemetry" target="_blank" class="text-xs opacity-60 hover:opacity-100 text-right leading-tight pb-1 !text-inherit">
    <div>Java SDK-contrib — open-telemetry hook</div>
    <div class="font-mono text-[10px] opacity-80 mt-0.5">github.com/open-feature/java-sdk-contrib</div>
  </a>
  <div class="bg-white p-1 rounded dark:invert">
    <QRCode data="https://github.com/open-feature/java-sdk-contrib/tree/main/hooks/open-telemetry" :width="84" :height="84" :margin="2" />
  </div>
</div>

---


# Other hook use-cases

<div class="text-sm opacity-70 -mt-2 mb-8">Observability is the obvious one — but the same extension point solves a surprising amount.</div>

<div class="grid grid-cols-3 gap-5">

<div class="p-5 rounded-lg border border-gray-200 shadow-sm flex flex-col gap-3 h-full">
  <div class="flex items-center gap-3">
    <carbon:document class="text-4xl opacity-70"/>
    <div class="font-bold text-lg">Logging</div>
  </div>
  <div class="text-sm opacity-80">
    Capture every evaluation — flag key, returned value, variant, reason — into your log stream.
  </div>
  <div class="text-xs opacity-60 italic">
    Useful for: audit trails, debugging "why did this user see X?", SRE post-mortems.
  </div>
</div>

<div class="p-5 rounded-lg border border-gray-200 shadow-sm flex flex-col gap-3 h-full">
  <div class="flex items-center gap-3">
    <carbon:warning-alt class="text-4xl opacity-70"/>
    <div class="font-bold text-lg">Alerting</div>
  </div>
  <div class="text-sm opacity-80">
    React to specific resolved values — page on-call when a kill-switch flips on, warn when a flag has been returning its default for too long.
  </div>
  <div class="text-xs opacity-60 italic">
    Useful for: turning the flag system into an operational safety net, not just a switch.
  </div>
</div>

<div class="p-5 rounded-lg border border-gray-200 shadow-sm flex flex-col gap-3 h-full">
  <div class="flex items-center gap-3">
    <carbon:add-alt class="text-4xl opacity-70"/>
    <div class="font-bold text-lg">Context enrichment</div>
  </div>
  <div class="text-sm opacity-80">
    Attach runtime info before evaluation — user's entitlement tier, request id, cloud region — without touching every call site.
  </div>
  <div class="text-xs opacity-60 italic">
    Useful for: making evaluation context rich without polluting business logic.
  </div>
</div>

</div>

<div class="text-sm opacity-70 text-center mt-8">
  Hooks are cross-cutting behaviour for flag evaluation — anywhere you'd reach for middleware in HTTP, reach for a hook here.
</div>

---
layout: fact
---

# Hooks

Observe, enhance, extend — without forking a provider.

<blockquote class="text-sm opacity-70 italic mt-8 max-w-3xl mx-auto border-l-4 border-gray-300 pl-4 text-left">
  Hooks are a mechanism that allow for the <b>addition of arbitrary behavior at well-defined points of the flag evaluation life-cycle</b>.
</blockquote>

<div class="text-xs opacity-60 mt-6">
  <a href="https://openfeature.dev/docs/reference/concepts/hooks" target="_blank">openfeature.dev — hooks</a>
</div>

---
layout: image
image: /img/breaks/hiking-forest.jpg
---

