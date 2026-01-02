# 📦 `@codpro-js`
### Lightweight, Secure & Developer-Friendly LocalStorage + DOM Selector Utility

**@codpro-js** is a modern helper library that makes working with  
**localStorage** and **DOM selectors** faster, safer, and frustration-free —  
with automatic validation, error handling and optional global access.

---

## 🚀 Features

- 🔐 Smart LocalStorage wrapper with strict validation
- 🧠 Prevents duplicate keys and undefined values
- 💥 Throws descriptive errors on incorrect usage
- 🌍 Global browser support (`Storage`, `$`, `$$`)
- 🎯 Selector shortcuts like jQuery
- 📦 Zero dependencies — extremely lightweight
- ⚡ Ready for JS, React, HTML, and frameworks

---

## 📥 Installation

```bash
npm install @codpro-js
```
## Uses:

```JavaScript
import Storage, { Selector } from "@codpro-js";

// Save data
Storage.set("user", { name: "CodPro", level: "Pro" });

// Get data
console.log(Storage.get("user")); // { name: "CodPro", level: "Pro" }

// Update
Storage.update("user", { level: "Master" });

// Check existence
console.log(Storage.has("user")); // true

// Remove
Storage.remove("user");
```

## Selector

```JavaScript
<script src="node_modules/@codpro-js/index.js"></script>
<script>
  Storage.set("theme", "dark");
  console.log(Storage.get("theme")); // "dark"

  const first = $(".container");
  const all = $$(".item");
</script>
```


## Methods
```
{
  Storage: [
    "set",
    "get",
    "has",
    "update",
    "remove",
    "copyStorage",
    "clear",
    "remame"
  ],
  Selector: [
    "$",
    "$$"
  ]
}
```
