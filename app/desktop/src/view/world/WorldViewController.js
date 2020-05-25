Ext.define('CovidApp.view.world.WorldViewController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.worldviewcontroller',

    onEditCancelled: function (editor, value, startValue, eOpts) {
        var user = Ext._find(value.record.store.config.data.items, { name: value.record.data.name });
        Ext.Msg.confirm('Confirm', value.record.data.name + ': ' + user.phone + ' is phone number', 'onConfirm', this);
    }
});
