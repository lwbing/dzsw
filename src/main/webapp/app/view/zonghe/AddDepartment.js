Ext.define('Demo.view.zonghe.AddDepartment', {
    extend: 'Ext.form.Panel',
    alias: 'widget.AddDepartment',
    requires: [
        'Ext.form.*'
    ],
    frame: true,
    title: '部门添加',
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
    url: path+'/department/add.htm',
    defaultType: 'textfield',
    initComponent: function () {
        var me = this;
        this.items = [
        {
        	fieldLabel: '父部门',
		    name: 'pname',
		    readOnly:true,
		    allowBlank: false
        },
        {
        	fieldLabel: '部门名称',
		    name: 'departmentName',
		    allowBlank: false
        },
        {
        	fieldLabel: '部门主管',
		    name: 'officer'
        },
        {
        	fieldLabel: '部门电话',
		    name: 'tel'
        },
        {
        	xtype: 'numberfield',
        	fieldLabel: '部门人数',
		    name: 'total'
        },
        {
        	xtype: 'hiddenfield',
		    name: 'parentID',
		    allowBlank: false
		}
        ];
        this.buttons = [{
            text: '保存',
            handler: function () {
                var form = this.up('form').getForm();
                form.submit({
                    success: function (form, action) {
                    	var grid=Ext.getCmp("department");
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

