Ext.define('Demo.view.System.Securety', {
    extend: 'Ext.form.Panel',
    alias: 'widget.Securety',
    requires: [
        'Ext.form.*'
    ],
    frame: true,
    title: '安全问题设置',
    width: 340,
    bodyPadding: 5,

    initComponent: function () {
        var me = this;
        Ext.applyIf(me, {
            fieldDefaults: {
                labelAlign: 'left',
                labelWidth: 120,
                anchor: '100%'
            },
            items: [{
                xtype: 'textfield',
                name: 'WT',
                fieldLabel: '请输入问题'
            }, {
                xtype: 'textfield',
                name: 'DA',
                fieldLabel: '请输入答案'
            }
            ]
        });
        this.dockedItems = [{
            xtype: 'toolbar',
            dock: 'bottom',
            ui: 'footer',
            defaults: { minWidth: 90 },
            items: [
                { xtype: 'component', flex: 1 },
                { xtype: 'button', text: '保存' }
            ]
        }];
        me.callParent(arguments);
    }
});

