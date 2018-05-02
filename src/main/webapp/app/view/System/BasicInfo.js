Ext.define('Demo.view.System.BasicInfo', {
    extend: 'Ext.form.Panel',
    alias: 'widget.BasicInfo',
    requires: [
        'Ext.form.*'
    ],
    frame: true,
    title: '基本信息设置',
    width: 340,
    bodyPadding: 5,
    url: '/User/UpdateUser',

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
                name: 'Email',
                fieldLabel: '邮箱'
            }, {
                xtype: 'textfield',
                name: 'FamlyName',
                fieldLabel: '姓名'
            },
            {
                xtype: 'radiogroup',
                fieldLabel: '性别',
                columns: 2,
                defaults: {
                    name: 'Sex'
                },
                items: [{
                    inputValue: '男',
                    boxLabel: '男'
                }, {
                    inputValue: '女',
                    boxLabel: '女'
                }]
            },
            {
                xtype: 'textfield',
                name: 'Tel',
                fieldLabel: '联系电话'
            },
            {
                xtype: 'textfield',
                name: 'WT',
                fieldLabel: '请输入问题',
                allowBlank: false
            }, {
                xtype: 'textfield',
                name: 'DA',
                fieldLabel: '请输入答案',
                allowBlank: false
            }
            ]
        });
        this.listeners = {

    };
    this.buttons = [
        {
            text: 'load',
            handler: function () {
                var forms = this.up("form").getForm();
                Ext.Ajax.request({
                    url: '/User/getUser',
                    success: function (response) {
                        var text = response.responseText;
                        var values = Ext.JSON.decode(text);
                        forms.findField('Email').setValue(values.Email);
                        forms.findField('FamlyName').setValue(values.FamlyName);
                        forms.findField('Sex').setValue(values.Sex);
                        forms.findField('Tel').setValue(values.Tel);
                        if (values.HasSet == 1) {
                            forms.findField('WT').disable(true);
                            forms.findField('DA').disable(true);
                        }
                    }
                });
            }
        }
        , {
            text: 'Save',
            handler: function () {
                var forms = this.up("form").getForm();
                if (forms.isValid()) {
                    forms.submit({
                        success: function (form, action) {
                            Ext.Msg.alert('Success', action.result.msg);
                        },
                        failure: function (form, action) {
                            Ext.Msg.alert('Failed', action.result.msg);
                        }
                    });
                } else {
                    Ext.Msg.alert('Failed', "验证失败");
                }
            }
        }, {
            text: 'Cancel',
            handler: function () {
                this.up("form").getForm().reset();
            }
        }];
    me.callParent(arguments);
}
});

