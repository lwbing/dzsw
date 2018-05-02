Ext.define('Demo.view.Content.AddKao', {
    extend: 'Ext.form.Panel',
    alias: 'widget.AddKao',
    requires: [
        'Ext.form.*'
    ],
    frame: true,
    title: '考勤记录编辑',
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
    url: path+'/kaoqin/update.htm',
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
				 fieldLabel: '编号',
				 name: 'userID',
				 allowBlank: false
			 },
			 {
				 xtype: 'datefield',
				 fieldLabel: '月份',
				 name: 'kqMonth',
				 format:'Ym',
				 allowBlank: false
			 },
			 {
			     fieldLabel: '部门',
			     name: 'departName',
			     allowBlank: false
			 },
			 {
				 xtype: 'numberfield',
			     fieldLabel: '出勤天数',
			     name: 'sumMoney'
			 },
			 {
				 xtype: 'numberfield',
				 value: 0.0,
			     fieldLabel: '迟到次数',
			     name: 'cdsum',
			     allowBlank: false
			 },
			 {
				 xtype: 'numberfield',
				 value: 0.0,
			     fieldLabel: '请假天数',
			     name: 'qjsum'
			 },        
			 {
				 xtype: 'numberfield',
				 value: 0.0,
			     fieldLabel: '旷工天数',
			     name: 'kgsum'
			 },
			 {
				 xtype: 'numberfield',
				 value: 0.0,
			     fieldLabel: '加班天数',
			     name: 'jbsum'
			 },
			 {
				 xtype: 'numberfield',
				 value: 0.0,
			     fieldLabel: '自定义天数',
			     name: 'customsum1'
			 },
			 {
				 fieldLabel: '备注',
				 name: 'remark',
				 allowBlank: false
			 },
			 {
					xtype:'hiddenfield',
				    name: 'id',
				    allowBlank: false
			 }
        ];
        var field =new Ext.form.field.Text();
        this.dockedItems = [{
            xtype: 'toolbar',
            dock: 'top',
            items: [
                "->", "输入姓名：", field, {
                    text: "搜索",
                    handler: function () {
                        store.load({ params: { keyword: filed.getValue()} });
                    }
                }
            ]
        }];
        this.buttons = [{
            text: '保存',
            handler: function () {
                var form = this.up('form').getForm();
                form.submit({
                    success: function (form, action) {
                    	var grid=Ext.getCmp("kaoqin");
                    	grid.store.reload();
                        Ext.MessageBox.alert("提示", action.result.msg);
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

