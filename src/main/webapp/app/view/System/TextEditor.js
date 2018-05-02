Ext.define('Demo.view.System.TextEditor', {
    extend: 'Ext.form.Panel',
    alias: 'widget.TextEditor',
    requires: [
        'Ext.form.*',
         'Ext.ux.MyEditor'
    ],
    frame: true,
    title: '登录密码设置',
    width: 740,
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
                name: 'OldPass',
                inputType: 'password',
                fieldLabel: '请输入旧密码'
            }, {
                xtype: 'textfield',
                name: 'NewPass',
                inputType: 'password',
                fieldLabel: '输入新密码'
            }, {
                xtype: 'textfield',
                name: 'ReNewPass',
                inputType: 'password',
                fieldLabel: '再次输入新密码'
            }, {
                xtype: 'myeditor',
                fieldLabel: '文章内容',
                labelAlign: 'left',
                height: 500,
                anchor: '99%',
                name: 'content',
                allowBlank: true,
                url: '/upload/'//图片上传路径在这里设置
            }]
        }),
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

