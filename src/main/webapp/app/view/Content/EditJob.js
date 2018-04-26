Ext.define('Demo.view.Content.EditJob', {
    extend: 'Ext.form.Panel',
    alias: 'widget.EditJob',
    requires: [
        'Ext.form.*'
    ],
    title: '企业岗位修改',
    bodyPadding: 5,
    fieldDefaults: {
        msgTarget: 'side',
        labelWidth: 75,
        width: 350
    },
    url: path+'/job/update.htm',
    defaultType: 'textfield',
    initComponent: function () {
        var me = this;
        this.items = [
		{
			xtype: 'hiddenfield',
		    name: 'id',
		    allowBlank: false
		},             
        {
            fieldLabel: '岗位名称',
            name: 'jobName',
            allowBlank: false
        }];
        this.buttons = [{
            text: '保存',
            handler: function () {
                var form = this.up('form').getForm();
                form.submit({
                    success: function (form, action) {
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

