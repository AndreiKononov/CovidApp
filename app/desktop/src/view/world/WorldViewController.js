Ext.define('CovidApp.view.world.WorldViewController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.worldviewcontroller',
    requires: ['Ext.Toast'],

    selectCountry: function (grid, record) {

        const country = record.data.Country;
        const newConfirmed = record.data.NewConfirmed;
        // console.log(record.data.NewConfirmed);
        const date = new Date(record.data.Date).toLocaleDateString();

        Ext.toast(`You selected ${record.data.Country}!`);

        Ext.create('Ext.window.Window', {
            title: `Situation in ${country} on ${date}`,
            height: 200,
            width: 755,
            modal: true,
            closable: true,
            layout: 'fit',
            items: {
                xtype: 'grid',
                border: true,
                columns: [
                    {
                        text: 'NewConfirmed',
                        dataIndex: 'newConfirmed',
                        width: 120
                    },
                    {
                        text: 'Total Confirmed',
                        // dataIndex: record.data.NewConfirmed,
                        width: 120,

                    },
                    {
                        text: 'New Deaths',
                        dataIndex: `NewDeaths`,
                        width: 120,
                        style: 'border: 1px solid blue;'
                    },
                    {
                        text: 'Total Deaths',
                        dataIndex: `${record.data.NewDeaths}`,
                        width: 120,
                    },
                    {
                        text: 'New Recovered',
                        dataIndex: `${record.data.NewDeaths}`,
                        width: 120,
                    },
                    {
                        text: 'Total Recovered',
                        dataIndex: `${record.data.NewDeaths}`,
                        width: 120,
                    }],
            }
        }).show();
    },
});
