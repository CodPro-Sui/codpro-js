var CodPro = (function (exports) {
  'use strict';

  const Storage = {
    set(key, value) {
      if (!key) {
        throw new Error("key is required");
      }
      if (value === undefined) {
        throw new Error("value cannot be undefined");
      }
      try {
        localStorage.setItem(key, JSON.stringify(value));
        return true;
      } catch {
        return false;
      }
    },
    get(key) {
      if (!key) {
        throw new Error("key is required");
      }
      try {
        const data = localStorage.getItem(key);
        return data === null ? null : JSON.parse(data);
      } catch {
        return null;
      }
    },
    has(key) {
      if (!key) {
        throw new Error("key is required");
      }
      return localStorage.getItem(key) !== null;
    },
    update(key, value) {
      if (!key) {
        throw new Error("key is required");
      }
      if (value === undefined) {
        throw new Error("value cannot be undefined");
      }
      if (localStorage.getItem(key) === null) {
        throw new Error(`No Found ${key}`);
      }
      try {
        localStorage.setItem(key, JSON.stringify(value));
        return true;
      } catch {
        return false;
      }
    },
    remove(key) {
      if (!key) {
        throw new Error("key is required");
      }
      try {
        localStorage.removeItem(key);
        return true;
      } catch {
        return false;
      }
    },
    copyStorage(oldKey, newKey) {
      if (!oldKey || !newKey) {
        throw new Error(`keys are required`);
      }
      if (oldKey === newKey) {
        throw new Error(`cannot be same old key ${oldKey} and new key ${newKey}`);
      }
      if (!this.has(oldKey)) {
        throw new Error(`define "${oldKey}" not found in storage`);
      }
      try {
        localStorage.setItem(newKey, localStorage.getItem(oldKey));
        return true;
      } catch {
        return false;
      }
    },
    rename(oldKey, newKey) {
      if (!oldKey || !newKey)
        throw new Error("Both old key and new key are required.");
      if (oldKey === newKey)
        throw new Error("Old key and new key cannot be the same.");
      if (!this.has(oldKey))
        throw new Error(`"${oldKey}" does not exist in storage.`);
      try {
        const data = localStorage.getItem(oldKey);
        localStorage.setItem(newKey, data);
        localStorage.removeItem(oldKey);
        return true;
      } catch {
        return false;
      }
    },

    clear() {
      localStorage.clear();
      return true;
    },
    isObject(key) {
      if (!key) {
        throw new Error("key is required.");
      }
      if (localStorage.getItem(key) === null) {
        return false;
      } else {
        try {
          let data = JSON.parse(localStorage.getItem(key));
          return Object.prototype.toString.call(data) === "[object Object]";
        } catch {
          return false;
        }
      }
    },
    isArray(key) {
      if (!key) {
        throw new Error("key is required.");
      }
      if (localStorage.getItem(key) === null) {
        throw new Error(`${key} no found`);
      }
      try {
        let data = JSON.parse(localStorage.getItem(key));
        return Array.isArray(data);
      } catch {
        return false;
      }
    },
    traverse(array, callback) {
      if (!Array.isArray(array)) {
        throw new TypeError("first parameter must be an array");
      }
      if (typeof callback !== "function") {
        throw new TypeError("callback must be a function.");
      }
      for (let i = 0; i < array.length; i++) {
        //skip undefined index from loop
        if (i in array) {
          callback(array[i], i, array);
        }
      }
    },
    mapcs(array, callback) {
      let result = [];
      traverse(array, (value, i, array) => {
        result.push(callback(value, i, array));
      });
      return result;
    },
    filtercs(array, callback) {
      let result = [];
      traverse(array, (value, index, array) => {
        if (callback(value, index, array)) {
          result.push(value);
        }
      });
      return result;
    },
    reducecs(array, callback, initialValue) {
      let accumelator = initialValue;
      let index = 0;
      if (accumelator === undefined) {
        for (let i = 0; i < array.length; i++) {
          accumelator = array[i];
          index = i + 1;
          break;
        }
      }

      for (let i = index; i < array.length; i++) {
        accumelator = callback(accumelator, array[i], i, array);
      }
      return accumelator;
    }
  };

  const Selector = {
    $(selector) {
      if (!selector) {
        throw new Error("selector name is required");
      }
      return document.querySelector(selector);
    },
    $$(selector) {
      if (!selector) {
        throw new Error("selector name is required");
      }
      return [...document.querySelectorAll(selector)];
    },
  };

  exports.Selector = Selector;
  exports.Storage = Storage;
  exports.default = Storage;

  Object.defineProperty(exports, '__esModule', { value: true });

  return exports;

})({});
