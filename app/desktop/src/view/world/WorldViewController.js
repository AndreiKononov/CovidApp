Ext.define('CovidApp.view.world.WorldViewController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.worldviewcontroller',
    requires: ['Ext.Toast', 'Ext.layout.Fit'],

    selectCountry: function (grid, record) {

        const country = record.data.Country;
        // const country = grid.getStore().data.Country;
        const newConfirmed = record.data.NewConfirmed;
        const totalConfirmed = record.data.TotalConfirmed;
        const newDeaths = record.data.NewDeaths;
        const totalDeaths = record.data.TotalDeaths;
        const newRecovered = record.data.NewRecovered;
        const totalRecovered = record.data.TotalRecovered;
        const borderStyle = 'border: 1px solid #26A69A;';

        const date = new Date(record.data.Date).toLocaleDateString();

        Ext.toast(`You selected ${record.data.Country} (Total cases - ${record.data.TotalConfirmed}) `);

        if(!Ext.ClassManager.isCreated('Country')){
            Ext.define('Country', {
                extend: 'Ext.data.Model',
                fields: [
                    { newConfirmed: 'newConfirmed', type: 'int' },
                    { totalConfirmed: 'totalConfirmed', type: 'int' },
                    { newDeaths: 'newDeaths', type: 'int' },
                    { totalDeaths: 'totalDeaths', type: 'int' },
                    { newRecovered: 'newRecovered', type: 'int' },
                    { totalRecovered: 'totalRecovered', type: 'int' },
                ]
            });
        }

        const store = Ext.create('Ext.data.Store', {
            model: 'Country',
            storeId: 'countryStore',
            data : [
                {
                    newConfirmed: newConfirmed,
                    totalConfirmed: totalConfirmed,
                    newDeaths: newDeaths,
                    totalDeaths: totalDeaths,
                    newRecovered: newRecovered,
                    totalRecovered: totalRecovered,
                },
            ]
        });

        Ext.create('Ext.window.Window', {
            title: `Situation in ${country} on ${date}`,
            height: 170,
            width: 760,
            style: borderStyle,
            closable: true,
            resizable: true,
            layout: 'fit',
            columnLines: true,
            items: {
                xtype: 'grid',
                border: false,
                columnLines: true,
                columns: [
                    {
                        text: 'New Confirmed',
                        dataIndex: 'newConfirmed',
                        width: 125,
                    },
                    {
                        text: 'Total Confirmed',
                        dataIndex: 'totalConfirmed',
                        width: 120,
                    },
                    {
                        text: 'New Deaths',
                        dataIndex: `newDeaths`,
                        width: 120,
                    },
                    {
                        text: 'Total Deaths',
                        dataIndex: `totalDeaths`,
                        width: 120,
                    },
                    {
                        text: 'New Recovered',
                        dataIndex: `newRecovered`,
                        width: 120,
                    },
                    {
                        text: 'Total Recovered',
                        dataIndex: 'totalRecovered',
                        width: 120,
                    }],
                store: 'countryStore',
            }
        }).show();
    },
});
