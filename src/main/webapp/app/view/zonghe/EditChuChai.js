Ext.define('Demo.view.zonghe.EditChuChai', {
    extend: 'Ext.form.Panel',
    alias: 'widget.EditChuChai',
    requires: [
        'Ext.form.*'
    ],
    frame: true,
    title: '出差编辑',
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
    url: path+'/chuchai/update.htm',
    defaultType: 'textfield',
    initComponent: function () {
        var me = this;
        this.items = [
		{
			fieldLabel: 'UID',
		    name: 'userID',
		    allowBlank: false
		},
        {
        	fieldLabel: '姓名',
		    name: 'userName',
		    allowBlank: false
        },
        {
        	fieldLabel: '部门名称',
		    name: 'departName'
        },
        {
        	fieldLabel: '出差事由',
        	width: 450,
		    name: 'reason'
        },
        {
        	fieldLabel: '出差地点',
        	width: 450,
		    name: 'address'
        },
        {
        	xtype: 'datefield',
        	fieldLabel: '开始时间',
		    name: 'startTime',
		    format:'Y-m-d'
        },
        {
        	xtype: 'datefield',
        	fieldLabel: '结束时间',
		    name: 'endTime',
		    format:'Y-m-d'
        },
        {
        	xtype: 'numberfield',
        	fieldLabel: '出差费用',
		    name: 'cost'
		},
		{
			xtype: 'radiogroup',
            fieldLabel: '报销',
            columns: 3,
            defaults: {
                name: 'status'
            },
            items: [{
                inputValue: '0',
                boxLabel: '未报销'
            }, {
                inputValue: '1',
                boxLabel: '已报销'
            }],
            allowBlank: false
		},
		{
        	fieldLabel: '批准人',
		    name: 'pzr'
		},
		{
			xtype: 'hiddenfield',
		    name: 'id'
		}
        ];
        this.buttons = [{
            text: '保存',
            handler: function () {
                var form = this.up('form').getForm();
                form.submit({
                    success: function (form, action) {
                    	var grid=Ext.getCmp("chuchai");
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

