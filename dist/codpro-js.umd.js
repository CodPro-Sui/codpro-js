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
        return data ? JSON.parse(data) : null;
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
        throw new Error(`define "${oldKe}" not found in storage`);
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
