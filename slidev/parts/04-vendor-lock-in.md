---
layout: section
---

# Problem 1

## Vendor Lock-in

Homegrown solutions and vendor-specific SDKs trap you.

---
layout: default
---

# Homegrown

<div class="text-sm opacity-70">You're your own vendor — with extra pain.</div>

<div class="grid grid-cols-3 gap-6 mt-8 items-stretch">

  <div class="rounded-lg border border-gray-200 shadow-sm p-6 text-center flex flex-col items-center gap-3 h-full">
    <carbon:rocket class="text-5xl opacity-70" />
    <div class="font-bold text-lg">Early — quick win</div>
    <div class="text-sm opacity-70">
      <code>if (featureEnabled) { ... }</code> — ten lines of code, shipping next week.
    </div>
  </div>

  <div class="rounded-lg border border-gray-200 shadow-sm p-6 text-center flex flex-col items-center gap-3 h-full">
    <carbon:chart-line-data class="text-5xl opacity-70" />
    <div class="font-bold text-lg">Later — complexity creeps in</div>
    <div class="text-sm opacity-70">
      Each service rolls its own. No central UI. No targeting. Flags duplicate, drift, rot.
    </div>
  </div>

  <div class="rounded-lg border border-gray-200 shadow-sm p-6 text-center flex flex-col items-center gap-3 h-full">
    <carbon:building class="text-5xl opacity-70" />
    <div class="font-bold text-lg">Eventually — you built a platform</div>
    <div class="text-sm opacity-70">
      API, UI, targeting, observability. Congratulations, you're a vendor.
    </div>
  </div>

</div>

---
layout: default
---

# Vendors

<div class="text-sm opacity-70">They solve your homegrown pain — and create their own.</div>

<div class="grid grid-cols-3 gap-6 mt-8 items-stretch">

  <div class="rounded-lg border border-gray-200 shadow-sm p-6 text-center flex flex-col items-center gap-3 h-full">
    <carbon:checkmark-outline class="text-5xl opacity-70" />
    <div class="font-bold text-lg">Relief</div>
    <div class="text-sm opacity-70">
      UI, targeting, observability — out of the box. Someone else maintains the platform.
    </div>
  </div>

  <div class="rounded-lg border border-gray-200 shadow-sm p-6 text-center flex flex-col items-center gap-3 h-full">
    <carbon:plug class="text-5xl opacity-70" />
    <div class="font-bold text-lg">Bespoke SDK</div>
    <div class="text-sm opacity-70">
      Each vendor ships their own client library. Integration is specific to them.
    </div>
  </div>

  <div class="rounded-lg border border-gray-200 shadow-sm p-6 text-center flex flex-col items-center gap-3 h-full">
    <carbon:warning class="text-5xl opacity-70" />
    <div class="font-bold text-lg">Migration = pain</div>
    <div class="text-sm opacity-70">
      Changing vendors rewrites every call site. Different API, different semantics. Same lock-in, new colour.
    </div>
  </div>

</div>

---
layout: center
---

# Concept: Providers

<img src="/img/architecture.png" class="mx-auto max-h-[60vh]"/>

<div class="abs-br m-6 flex items-end gap-2">
  <a href="https://openfeature.dev/docs/reference/intro#what-is-openfeature" target="_blank" class="text-xs opacity-60 hover:opacity-100 text-right leading-tight pb-1 !text-inherit">
    <div>OpenFeature provider architecture</div>
    <div class="font-mono text-[10px] opacity-80 mt-0.5">openfeature.dev/docs/reference/intro#what-is-openfeature</div>
  </a>
  <div class="bg-white p-1 rounded dark:invert">
    <QRCode data="https://openfeature.dev/docs/reference/intro#what-is-openfeature" :width="90" :height="90" :margin="2" />
  </div>
</div>

---
layout: default
transition: fade
---

# Swap providers

<div class="text-sm mb-4">
  This happens <b>once, at startup</b>. Your call sites never change.
</div>

```java {2}
var api = OpenFeatureAPI.getInstance();
api.setProviderAndWait(new InMemoryProvider(myFlags));

var client = api.getClient();
boolean on = client.getBooleanValue("v2_enabled", false);
```

<div class="text-xs opacity-60 mt-2">InMemoryProvider — local/dev</div>
<div class="text-xs opacity-60 mt-2">
  <carbon:document class="inline-block align-middle" /> built-in; useful for tests and local dev —
  <a href="https://openfeature.dev/specification/appendix-a/#in-memory-provider" target="_blank">spec: in-memory provider</a>
</div>

---
layout: default
transition: fade
---

# Swap providers

<div class="text-sm mb-4">
  This happens <b>once, at startup</b>. Your call sites never change.
</div>

```java {2}
var api = OpenFeatureAPI.getInstance();
api.setProviderAndWait(new FlagdProvider(config));

var client = api.getClient();
boolean on = client.getBooleanValue("v2_enabled", false);
```

<div class="text-xs opacity-60 mt-2">FlagdProvider — cloud-native reference</div>
<div class="text-xs opacity-60 mt-2">
  <carbon:document class="inline-block align-middle" /> cloud-native reference; YAML/JSON flags, OFREP-compatible —
  <a href="https://flagd.dev" target="_blank">flagd.dev</a>
</div>

---
layout: default
transition: fade
---

# Swap providers

<div class="text-sm mb-4">
  This happens <b>once, at startup</b>. Your call sites never change.
</div>

```java {2}
var api = OpenFeatureAPI.getInstance();
api.setProviderAndWait(new LaunchDarklyProvider(ldClient));

var client = api.getClient();
boolean on = client.getBooleanValue("v2_enabled", false);
```

<div class="text-xs opacity-60 mt-2">LaunchDarklyProvider — commercial vendor</div>
<div class="text-xs opacity-60 mt-2">
  <carbon:document class="inline-block align-middle" /> ~130 providers in the ecosystem —
  <a href="https://openfeature.dev/ecosystem" target="_blank">openfeature.dev/ecosystem</a>
</div>

---
layout: default
transition: fade
---

# Swap providers

<div class="text-sm mb-4">
  This happens <b>once, at startup</b>. Your call sites never change.
</div>

```java {2}
var api = OpenFeatureAPI.getInstance();
api.setProviderAndWait(new SplitProvider(splitClient));

var client = api.getClient();
boolean on = client.getBooleanValue("v2_enabled", false);
```

<div class="text-xs opacity-60 mt-2">SplitProvider — commercial vendor</div>
<div class="text-xs opacity-60 mt-2">
  <carbon:document class="inline-block align-middle" /> pick the vendor that fits your stack —
  <a href="https://openfeature.dev/ecosystem" target="_blank">openfeature.dev/ecosystem</a>
</div>

---
layout: default
transition: fade
---

# Swap providers

<div class="text-sm mb-4">
  This happens <b>once, at startup</b>. Your call sites never change.
</div>

```java {2}
var api = OpenFeatureAPI.getInstance();
api.setProviderAndWait(new MultiProvider(providers));

var client = api.getClient();
boolean on = client.getBooleanValue("v2_enabled", false);
```

<div class="text-xs opacity-60 mt-2">MultiProvider — combine multiple sources</div>
<div class="text-xs opacity-60 mt-2">
  <carbon:document class="inline-block align-middle" /> combine sources: one for experiments, one for kill switches —
  <a href="https://openfeature.dev/specification/appendix-a/#multi-provider" target="_blank">spec: multi-provider</a>
</div>

---
layout: fact
---

# Providers

Vendor-agnostic · Swap without rewriting · Mix sources when needed.

<blockquote class="text-sm opacity-70 italic mt-8 max-w-3xl mx-auto border-l-4 border-gray-300 pl-4 text-left">
  Providers are responsible for performing flag evaluations. They provide an <b>abstraction between the underlying flag management system and the OpenFeature SDK</b>.
</blockquote>

<div class="abs-br m-6 flex items-end gap-2">
  <a href="https://openfeature.dev/docs/reference/concepts/provider" target="_blank" class="text-xs opacity-60 hover:opacity-100 text-right leading-tight pb-1 !text-inherit">
    <div>Providers — concept docs</div>
    <div class="font-mono text-[10px] opacity-80 mt-0.5">openfeature.dev/docs/reference/concepts/provider</div>
  </a>
  <div class="bg-white p-1 rounded dark:invert">
    <QRCode data="https://openfeature.dev/docs/reference/concepts/provider" :width="90" :height="90" :margin="2" />
  </div>
</div>

---
layout: image
image: /img/breaks/ruin-archway.jpg
---

