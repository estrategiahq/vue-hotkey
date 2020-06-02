## Vue Hotkey Estrategico

> Estratégia na hora de registrar um evento do teclado

_A motivação desse wrapper é pra ter um padrão no uso do front-end e para caso precise de mais flexbilidade não precisar trocar todos os front-ends. [hotkey](https://github.com/jaywcjlove/hotkeys) por baixo_

### Instalar

```
npm install git+ssh//git@github.com:estrategiahq/vue-hotkey-estrategico.git
```

### Setup

```js
import Vue from 'vue'
import VueHotkeyEstrategico from 'vue-hotkey-estrategico'

Vue.use(VueHotkeyEstrategico, {
  prevent: ['input', 'textarea'] // default configs
})
```

### Uso

```js

// Register a binding
this.$VueHotkey.register('ctrl+a', (event) => {
  // handle event
})

// Unregister a binding
this.$VueHotkey.unregister('ctrl+a')
```
