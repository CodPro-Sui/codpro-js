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

## 📖🖋️ Uses for Browsers

## CDN

```JavaScript
<script src="https://unpkg.com/codpro-js/dist/codpro-js.umd.js"></script>
```

---

## jsDelivr CDN

Latest version (auto update)

```JavaScript
<script src="https://cdn.jsdelivr.net/npm/codpro-js/dist/codpro-js.umd.js"></script>
```

Specific Version

```JavaScript
<script src="https://cdn.jsdelivr.net/npm/codpro-js@1.2.0/dist/codpro-js.umd.js"></script>
```

---

## Storage API

Storage.set(key, value)
=> Save a value to localStorage.

```JavaScript
CodPro.Storage.set("name", "CodPro");
CodPro.Storage.set("user", { id: 1, role: "admin" });
```

Storage.get(key)
=> Get a value from localStorage.

```JavaScript
const name = CodPro.Storage.get("name");
console.log(name);
```

=> Returns null if key does not exist.

Storage.has(key)
=> Check if a key exists.

```JavaScript
if (CodPro.Storage.has("name")) {
  console.log("Key exists");
}
```

Storage.update(key, value)
=> Update an existing key.

```JavaScript
CodPro.Storage.update("name", {name:"CodPro",id:101});
```

=> Throws error if key does not exist.

Storage.remove(key)
=> Remove a specific key.

```JavaScript
CodPro.Storage.remove("name");
```

Storage.copyStorage(oldKey, newKey)
=> Copy value from one key to another.

```JavaScript
CodPro.Storage.copyStorage("token", "token_backup");
```

Storage.rename(oldKey, newKey)
=> Rename a key.

```JavaScript
CodPro.Storage.rename("token_backup", "auth_token");
```

=> return error if oldKey not exists in storage

Storage.clear()
=> Clear all localStorage data.

```JavaScript
CodPro.Storage.clear();
```

---
---

# Version 1.3.5 new methods add

**isObject(key)**

Checks whether the value stored in localStorage under the given key is a plain object.

*Uses*

Syntax:
```JavaScript
isObject(key)
```
```JavaScript
localStorage.setItem("user", JSON.stringify({ name: "CodPro" }));

isObject("user"); // true
isObject("data"); // false
```

Notes
Returns false if key does not exist
Returns false if JSON parsing fails
Arrays are not treated as objects here

```isArray(key)```
Checks whether the stored value is an array.

Syntax:
```isArray(key)```

```
localStorage.setItem("numbers", JSON.stringify([1, 2, 3]));

isArray("numbers"); // true
```
Errors
Throws error if key is missing
Returns false if stored data is invalid JSON

---
Lightweight & avoid pollution prototype

traverse(array, callback)
A safe custom loop that skips empty array slots.
Syntax:

```traverse(array, callback)
```

```traverse([1, , 3], (value, index) => {
  console.log(value, index);
  });
  // Output:
  // 1 0
  // 3 2
  ```

  mapcs(array, callback)
  Custom implementation of Array.map.
  Syntax:
  ```mapcs(array, callback)```

  ```
  const result = mapcs([1, 2, 3], x => x * 2);
  console.log(result); // [2, 4, 6]
  ```

  filtercs(array, callback)
  Custom implementation of Array.filter.
  Syntax:
  ```
  filtercs(array, callback)
  ```
  ```
  const result = filtercs([1, 2, 3, 4], x => x % 2 === 0);
  console.log(result); // [2, 4]
  ```

  reducecs(array, callback, initialValue)
  Custom implementation of Array.reduce.
  Syntax:
  ```reducecs(array, callback, initialValue)```

  ```
  const sum = reducecs([1, 2, 3], (acc, val) => acc + val, 0);
  console.log(sum); // 6

  reducecs([1, 2, 3], (acc, val) => acc + val);
  // Result: 6
  ```

---

---

## Selector API

(: Simple DOM Select

Selector.$(selector)
=> Select a single element.

```JavaScript
const body = CodPro.Selector.$("body");
body.style.background = "#f5f5f5";
```

Selector.$$(selector)
=> Select multiple elements.

```JavaScript
const buttons = CodPro.Selector.$$("button");
buttons.forEach(btn => btn.style.color = "blue");
```

---

---

# React Uses

# Install package

NPM User

```bash
npm i codpro-js
```

YARN User

```bash
yarn add codpro-js
```

# Import in React component

=> codpro-js exports named exports:

```JavaScript
import { Storage, Selector } from "codpro-js";
```

Basic Storage usage in React
Example: App.jsx

```JavaScript
import { Storage } from "codpro-js";

function App() {

const saveData = () => {
Storage.set("username", "CodPro");
};

const readData = () => {
alert(Storage.get("username"));
};
return (
  <div>
   <h1>codpro-js in React</h1>
   <button onClick={saveData}>Save</button>
  <button onClick={readData}>Read</button>
  </div>
 );
 }

 export default App;
 ```
 Using Storage with useEffet
 ```JavaScript
 import { Storage } from "codpro-js";
 import { useEffect } from "react";

 function App() {

 useEffect(() => {
   if (!Storage.has("count")) {
    Storage.set("count", 0);
   }
 }, []);

const increment = () => {
const count = Storage.get("count");
Storage.update("count", count + 1);
}

return <button onClick={increment}>+</button>;
}

export default App;
```

```
import { Selector } from "codpro-js";

function App() {
const highlight = () => {
Selector.$("h1").style.color = "red"
}
return (
 <>
  <h1>Hello</h1>
  <button onClick={highlight}>Highlight</button>
 </>
 );
}
```

```
import { useRef } from "react";
import { Storage } from "codpro-js";

function App() {
const titleRef = useRef(null);

const save = () => {
Storage.set("msg", "Hello React");
titleRef.current.style.color = "green"
 };

return (
    <>
     <h1 ref={titleRef}>CodPro</h1>
     <button onClick={save}>Save</button>
   </>
 );
 export default App;
);
}
```

## 🚀 Author
CodPro Sui
GitHub: https://github.com/CodPro-Sui
npm: https://www.npmjs.com/package/codpro-js
