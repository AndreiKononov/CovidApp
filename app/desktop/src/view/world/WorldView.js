Ext.define('CovidApp.view.world.WorldView',{
    extend: 'Ext.grid.Grid',
    xtype: 'worldview',
    cls: 'worldview',
    requires: ['Ext.grid.rowedit.Plugin'],
    controller: {type: 'worldviewcontroller'},
    viewModel: {type: 'worldviewmodel'},
    store: {type: 'covidapistore'},
    grouped: true,
    groupFooter: {
        xtype: 'gridsummaryrow'
    },
    plugins: {
        rowedit: {
            autoConfirm: false
        }
    },
    columns: [
        {
            text: 'Country',
            dataIndex: 'Country',
            editable: true,
            width: 150,
            cell: {userCls: 'bold'}
        },
        {
            text: 'New Confirmed',
            dataIndex: 'NewConfirmed',
            editable: true,
            width: 150,
        },
        {
            text: 'Total Confirmed',
            dataIndex: 'TotalConfirmed',
            editable: true,
            width: 150
        },
        {
            text: 'New Deaths',
            dataIndex: 'NewDeaths',
            editable: true,
            width: 150
        },
        {
            text: 'Total Deaths',
            dataIndex: 'TotalDeaths',
            editable: true,
            width: 150
        },
        {
            text: 'New Recovered',
            dataIndex: 'NewRecovered',
            editable: true,
            width: 150
        },
        {
            text: 'Total Recovered',
            dataIndex: 'TotalRecovered',
            editable: true,
            width: 150
        }
    ],
    listeners: {
        canceledit: 'onEditCancelled'
    }
});
