# vue-localstore
Vue plugin for [localForage](https://github.com/localForage/localForage). Binds localForage to Vue instances as `$localstore`.

## Installation
Install `vue-localstore` with `npm` (or alternatively `yarn`):

```bash
npm --save install vue-localstore
```

Then add it to Vue in your main.js:

```javascript
const VueLocalStore = require('vue-localstore');
Vue.use(VueLocalStore);
```

## Usage
Since `localForage` is exposed directly to `this.$localstore`, you can use both the callback-based and Promsie-based API.

```javascript
this.$localstore.setItem('key', 'value').then(function () {
    return this.$localstore.getItem('key');
}).then(function (value) {
    // we got our value
}).catch(function (err) {
    // we got an error
});
```

## Configuration
When adding `vue-localstore` to Vue, you can pass a configuration object. This causes `$localstore` to point to a configured `localForage` instance (see localForage documentation sections [Configuration](https://github.com/localForage/localForage#configuration) and [Multiple instances](https://github.com/localForage/localForage#multiple-instances)):

```javascript
const VueLocalStore = require('vue-localstore');

Vue.use(VueLocalStore, {
    driver      : localforage.WEBSQL, // Force WebSQL; same as using setDriver()
    name        : 'myApp',
    version     : 1.0,
    size        : 4980736, // Size of database, in bytes. WebSQL-only for now.
    storeName   : 'keyvaluepairs', // Should be alphanumeric, with underscores.
    description : 'some description'
});
```
