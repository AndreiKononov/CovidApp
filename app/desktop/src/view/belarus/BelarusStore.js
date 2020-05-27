Ext.define('Covid.store.BelarusStore', {
    extend: 'Ext.data.Store',
    alias: 'store.belarusstore',
    proxy: {
        type: 'ajax',
        url: 'https://api.covid19api.com/country/belarus/status/confirmed',
        reader: {
            type: 'json',
            rootProperty: '',
        }
    },
    autoLoad: true
})
