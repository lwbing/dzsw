Ext.define('Demo.view.zonghe.EditNotePad', {
    extend: 'Ext.form.Panel',
    alias: 'widget.EditNotePad',
    requires: [
        'Ext.form.*'
    ],
    frame: true,
    title: '记事本添加',
    layout: 'column',
    defaults: {
        anchor: '100%',
        margin: "10" 
    },
    bodyPadding: 5,
    fieldDefaults: {
        msgTarget: 'side',
        labelWidth: 75,
        width: 250
    },
    url: path+'/notepad/update.htm',
    defaultType: 'textfield',
    initComponent: function () {
        var me = this;
        this.items = [
        {
        	fieldLabel: '主题',
		    name: 'title',
		    allowBlank: false
        },
        {
        	xtype:'datefield',
        	fieldLabel: '记事日期',
        	format:'Y-m-d H:i:s',
		    name: 'sysTime'
        },
        {
        	xtype:'textareafield',
        	fieldLabel: '内容',
		    name: 'contents'
        },
        {
        	xtype:'textareafield',
        	fieldLabel: '备注',
		    name: 'bz'
        },
        {
        	xtype: 'hiddenfield',
		    name: 'id',
		    allowBlank: false
        }
        ];
        this.buttons = [{
            text: '保存',
            handler: function () {
                var form = this.up('form').getForm();
                form.submit({
                    success: function (form, action) {
                    	var grid=Ext.getCmp("notepad");
                    	grid.store.reload();
                        Ext.MessageBox.alert("提示", action.result.msg);
                        form.reset();
                    },
                    failure: function (form, action) {
                        Ext.Msg.alert('提示', action.result.msg);
                    }
                });

            }
        }, {
            text: '清空',
            handler: function () {
                this.up('form').getForm().reset();
            }
        }];
        me.callParent(arguments);
    }
});

