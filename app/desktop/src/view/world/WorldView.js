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
    // columnLines: true,
    shadow: true,
    columns: [
        {
            xtype:'rownumberer',
            align: 'center',
        },
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
        },
        {
            text: 'Date',
            type: 'date',
            dataIndex: 'Date',
            editable: true,
            width: 170,
            sortable: true,
            renderer: Ext.util.Format.dateRenderer('m/d/Y (h:m)')
        }
    ],
    listeners: {
        select: 'selectCountry',
    },
    selectable: {
        mode: 'single'
    },
});
