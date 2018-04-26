Ext.define('Demo.view.zonghe.EditHeTong', {
    extend: 'Ext.form.Panel',
    alias: 'widget.EditHeTong',
    requires: [
        'Ext.form.*'
    ],
    frame: true,
    title: '合同编辑',
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
    url: path+'/hetong/update.htm',
    defaultType: 'textfield',
    initComponent: function () {
        var me = this;
        this.items = [
		{
			fieldLabel: 'UID',
		    name: 'userID',
		    id:'userID',
		    readOnly : true,
		    allowBlank: false
		},
        {
        	fieldLabel: '姓名',
		    name: 'userName',
		    id:'userName',
		    readOnly : true,
		    allowBlank: false
        },
        {
        	fieldLabel: '部门名称',
        	id:'depart',
        	readOnly : true,
		    name: 'depart'
        },
        {
        	fieldLabel: '合同编号',
		    name: 'hno'
        },
        {
        	xtype: 'datefield',
        	fieldLabel: '试用日期自',
		    name: 'syStartTime',
		    format:'Y-m-d'
        },
        {
        	xtype: 'datefield',
        	fieldLabel: '试用日期至',
		    name: 'syEndTime',
		    format:'Y-m-d'
        },
        {
        	xtype: 'numberfield',
        	fieldLabel: '试用期工资',
		    name: 'syCost'
		},
		 {
        	xtype: 'datefield',
        	fieldLabel: '转正日期自',
		    name: 'sqStartTime',
		    format:'Y-m-d'
        },
        {
        	xtype: 'datefield',
        	fieldLabel: '到期时间至',
		    name: 'sqEndTime',
		    format:'Y-m-d'
        },
        {
        	xtype: 'numberfield',
        	fieldLabel: '转正工资',
		    name: 'cost'
		},
		{
        	xtype: 'numberfield',
        	fieldLabel: '签订年限',
		    name: 'age'
		},
		{
        	xtype: 'filefield',
        	fieldLabel: '附件',
		    name: 'htPath',
		    width:380
		},
		{
			xtype: 'textareafield',
        	fieldLabel: '备注',
		    name: 'bz'
		},
		{
        	xtype: 'radiogroup',
            fieldLabel: '状态',
            columns: 3,
            defaults: {
                name: 'status'
            },
            items: [{
                inputValue: '1',
                boxLabel: '生效'
            }, {
                inputValue: '0',
                boxLabel: '终止'
            }],
            allowBlank: false
        },
        {
        	 xtype: 'hiddenfield',
        	 name:'id',
        	 allowBlank: false
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
        }];
        me.callParent(arguments);
    }
});

