## Vue Hotkey

> Simple Vue Hotkey wrapper

We're using [hotkey](https://github.com/jaywcjlove/hotkeys) under the hood for now.


### Install

```
npm install @estrategiahq/vue-hotkey
```

### Setup

```js
import Vue from 'vue'
import VueHotkey from '@estrategiahq/vue-hotkey'

Vue.use(VueHotkey, {
  prevent: ['input', 'textarea'] // default configs
})
```

### Using

```js

// Register a binding
this.$VueHotkey.register('ctrl+a', (event) => {
  // handle event
})

// Unregister a binding
this.$VueHotkey.unregister('ctrl+a')
```
