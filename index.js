const localForage = require('localForage');

//Plugin to expose localForage to Vue instances as $localstore.
var VueLocalStore = {

    //Installs the plugin
    install: function (Vue, options) {

        var localstore = localForage;

        //Optional configuration
        if (options) {
            localstore = localForage.createInstance(options);
        }

        //Expose localGorage to $localstore
        Vue.prototype.$localstore = localstore;

    }

}

export default VueLocalStore;
