## Vue Hotkey Estrategico

> Simple Vue Hotkey wrapper

We're using [hotkey](https://github.com/jaywcjlove/hotkeys) under the hood for now.


### Install

```
npm install @estrategiahq/vue-hotkey-estrategico
```

### Setup

```js
import Vue from 'vue'
import VueHotkeyEstrategico from 'vue-hotkey-estrategico'

Vue.use(VueHotkeyEstrategico, {
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
