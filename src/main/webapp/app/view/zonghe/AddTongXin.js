Ext.define('Demo.view.zonghe.AddTongXin', {
    extend: 'Ext.form.Panel',
    alias: 'widget.AddTongXin',
    requires: [
        'Ext.form.*'
    ],
    frame: true,
    title: '通信录添加',
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
    url: path+'/tongxin/add.htm',
    defaultType: 'textfield',
    initComponent: function () {
        var me = this;
        this.items = [
        {
        	fieldLabel: '姓名',
		    name: 'userName',
		    allowBlank: false
        },
        {
        	fieldLabel: '部门名称',
		    name: 'depart'
        },
        {
        	fieldLabel: '联系电话',
		    name: 'tel'
        },
        {
        	fieldLabel: '座机电话',
		    name: 'mobile'
        },
        {
        	fieldLabel: 'QQ',
		    name: 'qq'
        },
        {
        	fieldLabel: '电子邮箱',
		    name: 'email'
		},
		{
        	fieldLabel: '岗位',
		    name: 'job'
		}
        ];
        this.buttons = [{
            text: '保存',
            handler: function () {
                var form = this.up('form').getForm();
                form.submit({
                    success: function (form, action) {
                    	var grid=Ext.getCmp("tongxin");
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

