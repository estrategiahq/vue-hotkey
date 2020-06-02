import hotkeys from 'hotkeys-js'

function defineReadonlyProperty (object, property, value) {
  Object.defineProperty(object, property, {
    get () {
      return value
    },
    set () {
      throw new Error(`You can't set ${property}`)
    }
  })
}

function install (Vue, opts) {
  const defaultOptions = {
    prevent: ['input', 'textarea']
  }
  const options = { ...defaultOptions, ...opts }
  const lock = new Map()

  const vueHotKey = {
    register (key, fn, hotkeysOpts) {
      if ([undefined, null].includes(key)) {
        throw new Error('You need to pass a key')
      }
      if (!fn && typeof fn !== 'function') {
        throw new Error('You need to pass a callback')
      }

      const keybindingConfigs = {
        keyup: true,
        keydown: false,
        keypress: false
      }

      hotkeys(key, { ...keybindingConfigs, ...hotkeysOpts }, (event, handler) => {
        const element = event.target || event.srcElement
        if (options.prevent.includes(element)) {
          return
        }

        if (lock.get(key)) {
          return
        }

        lock.set(key, true)

        fn(event, handler)
        setTimeout(() => lock.set(key, false), 500)
      })
    },
    unregister (key) {
      hotkeys.unbind(key)
    }
  }

  defineReadonlyProperty(Vue.prototype, '$VueHotkey', vueHotKey)
}

export default {
  install
}
