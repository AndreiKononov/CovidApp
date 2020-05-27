Ext.define('Covid.store.CovidApiStore', {
    extend: 'Ext.data.Store',
    alias: 'store.covidapistore',
    proxy: {
        type: 'ajax',
        url: 'https://api.covid19api.com/summary',
        reader: {
            type: 'json',
            rootProperty: 'Countries',
            totalProperty: 'Global',
        }
    },
    autoLoad: true
})
