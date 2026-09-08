---
layout: section
---

# Bonus
## Anything we didn't get to

<div class="text-sm opacity-70 mt-4">If there's time — a quick peek at what we skipped.</div>

---
layout: default
---

---
layout: statement
---

# One more thing…

## The OpenFeature CLI

<div class="text-sm opacity-70 mt-4">Fighting the last class of common pitfalls.</div>

---


# The API is brittle by design

<div class="text-sm opacity-70 -mt-2 mb-4">Three flavours of "compiles fine, breaks subtly":</div>

```java {1|3-4|6-7|9-10}
client.getBooleanValue("v2_enabled", false);

// 1. typo in the key — silently returns the default
client.getBooleanValue("v2_enbld", false);

// 2. inconsistent fallbacks across call sites
client.getBooleanValue("v2_enabled", true);

// 3. wrong type — string asked for a boolean flag
client.getStringValue("v2_enabled", "off");
```

<div class="mt-6 text-sm opacity-70">
  Abstractions and constants help — but wouldn't it be nicer if the SDK <em>knew</em> your flags?
</div>

---


# Describe your flags in a manifest

<div class="text-sm opacity-70 -mt-2 mb-4">A single source of truth — checked into the repo, owned by the team.</div>

```json
{
  "$schema": "https://raw.githubusercontent.com/open-feature/cli/refs/heads/main/schema/v0/flag-manifest.json",
  "flags": {
    "v2_enabled": {
      "flagType": "boolean",
      "defaultValue": false,
      "description": "Enables the v2 checkout flow"
    },
    "checkout_variant": {
      "flagType": "string",
      "defaultValue": "control",
      "description": "Which checkout experience to render"
    }
  }
}
```

---


# Generate type-safe accessors

<div class="text-sm opacity-70 -mt-2 mb-4">One command turns the manifest into idiomatic, typed code in your language.</div>

```shell
openfeature generate <language>
```

```java
// generated: keys, types, defaults — all baked in
boolean v2 = OpenFeatureFlags.v2Enabled(client);
String variant = OpenFeatureFlags.checkoutVariant(client);
```

<div class="mt-6 grid grid-cols-3 gap-4 text-sm">
  <div class="p-3 rounded border border-gray-200">
    <div class="font-bold">No typos</div>
    <div class="opacity-70 text-xs">keys are method names</div>
  </div>
  <div class="p-3 rounded border border-gray-200">
    <div class="font-bold">No type mismatch</div>
    <div class="opacity-70 text-xs">return type fixed by manifest</div>
  </div>
  <div class="p-3 rounded border border-gray-200">
    <div class="font-bold">One default</div>
    <div class="opacity-70 text-xs">declared once, in the manifest</div>
  </div>
</div>

<div class="text-xs opacity-60 mt-6">Still experimental — feedback and contributions welcome.</div>

<div class="abs-br m-6 flex items-end gap-2">
  <a href="https://github.com/open-feature/cli" target="_blank" class="text-xs opacity-60 hover:opacity-100 text-right leading-tight pb-1 !text-inherit">
    <div>OpenFeature CLI</div>
    <div class="font-mono text-[10px] opacity-80 mt-0.5">github.com/open-feature/cli</div>
  </a>
  <div class="bg-white p-1 rounded dark:invert">
    <QRCode data="https://github.com/open-feature/cli" :width="90" :height="90" :margin="2" />
  </div>
</div>

---
layout: section
---

# OFREP

## OpenFeature Remote Evaluation Protocol

<div class="text-sm opacity-70 mt-4">Evaluate flags over HTTP — without shipping your targeting rules to every client.</div>

---


# Why a remote protocol?

<div class="grid grid-cols-2 gap-5 mt-6 items-stretch">
  <div class="rounded-lg border border-gray-200 shadow-sm p-5 flex flex-col gap-3 h-full">
    <div class="flex items-center gap-3">
      <carbon:locked class="text-4xl opacity-70"/>
      <div class="font-bold text-lg">Keep rules off the client</div>
    </div>
    <div class="text-sm opacity-80">
      Targeting rules can encode pricing tiers, regional licensing, churn-recovery offers, internal-only experiments. You don't want any of it in the JS bundle.
    </div>
  </div>

  <div class="rounded-lg border border-gray-200 shadow-sm p-5 flex flex-col gap-3 h-full">
    <div class="flex items-center gap-3">
      <carbon:user-data class="text-4xl opacity-70"/>
      <div class="font-bold text-lg">Keep context off the wire</div>
    </div>
    <div class="text-sm opacity-80">
      Sensitive evaluation context — entitlements, account flags, private user attributes — stays on your server, never leaves your trust boundary.
    </div>
  </div>

  <div class="rounded-lg border border-gray-200 shadow-sm p-5 flex flex-col gap-3 h-full">
    <div class="flex items-center gap-3">
      <carbon:catalog class="text-4xl opacity-70"/>
      <div class="font-bold text-lg">Don't expose the variant catalog</div>
    </div>
    <div class="text-sm opacity-80">
      The list of variants for a flag is its own leak — codenames for upcoming features, names of pricing tiers, experiment bucket labels. OFREP returns only the chosen variant, never the catalog.
    </div>
  </div>

  <div class="rounded-lg border border-gray-200 shadow-sm p-5 flex flex-col gap-3 h-full">
    <div class="flex items-center gap-3">
      <carbon:api class="text-4xl opacity-70"/>
      <div class="font-bold text-lg">One protocol, many clients</div>
    </div>
    <div class="text-sm opacity-80">
      A standard HTTP shape any OF-compatible backend can serve. Your web, mobile, and edge clients speak the same evaluation API regardless of which provider you picked.
    </div>
  </div>
</div>

---


# What OFREP looks like

```http
POST /ofrep/v1/evaluate/flags/v2_enabled
Content-Type: application/json

{
  "context": {
    "targetingKey": "user-1234",
    "tenant": "acme",
    "region": "eu"
  }
}
```

```json
{
  "key": "v2_enabled",
  "value": true,
  "variant": "on",
  "reason": "TARGETING_MATCH"
}
```

<div class="mt-6 text-sm opacity-70">
  A standardised request/response shape — every OFREP-compatible backend speaks it, every OF SDK can consume it. Your client never sees the rules, just the answer.
</div>

<div class="abs-br m-6 flex items-end gap-2">
  <a href="https://openfeature.dev/specification/protocol/" target="_blank" class="text-xs opacity-60 hover:opacity-100 text-right leading-tight pb-1 !text-inherit">
    <div>OFREP — OpenFeature spec</div>
    <div class="font-mono text-[10px] opacity-80 mt-0.5">openfeature.dev/specification/protocol</div>
  </a>
  <div class="bg-white p-1 rounded dark:invert">
    <QRCode data="https://openfeature.dev/specification/protocol/" :width="90" :height="90" :margin="2" />
  </div>
</div>

