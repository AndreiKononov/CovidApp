Ext.define('Covid.store.CovidApiStore', {
    extend: 'Ext.data.Store',
    alias: 'store.covidapistore',
    // groupField: 'CountryCode[0]',
    proxy: {
        type: 'ajax',
        url: 'https://api.covid19api.com/summary',
        reader: {
            type: 'json',
            rootProperty: 'Countries',
        }
    },
    autoLoad: true
})
