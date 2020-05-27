Ext.define('CovidApp.view.world.WorldViewController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.worldviewcontroller',
    requires: ['Ext.Toast'],

    selectCountry: function (grid, record) {

        const country = record.data.Country;
        const newConfirmed = record.data.NewConfirmed;
        const borderStyle = 'border: 1px solid blue;';
        // console.log(record.data.NewConfirmed);
        // console.log(grid.store.getSelectedRows());
        const date = new Date(record.data.Date).toLocaleDateString();

        Ext.toast(`You selected ${record.data.Country}!`);

        Ext.create('Ext.window.Window', {
            title: `Situation in ${country} on ${date}`,
            height: 250,
            width: 755,
            closable: true,
            resizable: true,
            layout: 'fit',
            columnLines: true,
            items: {
                xtype: 'grid',
                border: false,
                columnLines: true,
                multiSelect: true,
                columns: [
                    {
                        text: 'NewConfirmed',
                        // dataIndex: 'NewConfirmed',
                        dataIndex: record.data.Country,
                        width: 120,
                        style: borderStyle,
                        // renderer: Ext.createRow().dataIndex
                    },
                    {
                        text: 'Total Confirmed',
                        dataIndex: 'TotalConfirmed',
                        width: 120,
                        style: borderStyle,
                    },
                    {
                        text: 'New Deaths',
                        dataIndex: `NewDeaths`,
                        width: 120,
                        style: borderStyle,
                    },
                    {
                        text: 'Total Deaths',
                        dataIndex: `TotalDeaths`,
                        width: 120,
                        style: borderStyle,
                    },
                    {
                        text: 'New Recovered',
                        dataIndex: `NewRecovered`,
                        width: 120,
                        style: borderStyle,
                    },
                    {
                        text: 'Total Recovered',
                        dataIndex: 'TotalRecovered',
                        width: 120,
                        style: borderStyle,
                    }],
                // store: {type: 'covidapistore'},
                store: Ext.create('Ext.data.ArrayStore', {}),
            }
        }).show();
    },
});
