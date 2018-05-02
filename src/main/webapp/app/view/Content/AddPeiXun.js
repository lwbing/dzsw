Ext.define('Demo.view.Content.AddPeiXun', {
    extend: 'Ext.form.Panel',
    alias: 'widget.AddPeiXun',
    requires: [
        'Ext.form.*'
    ],
    frame: true,
    title: '培训记录添加',
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
    url: path+'/peiXun/add.htm',
    defaultType: 'textfield',
    initComponent: function () {
        var me = this;
        
        this.items = [			
			{
				fieldLabel: '培训编号',
			    name: 'pno',
			    allowBlank: false
			 },
			 {
				 fieldLabel: '培训名称',
				 name: 'pname',
				 allowBlank: false
			 },
			 {
				 fieldLabel: '培训内容',
				 name: 'pcontent',
				 allowBlank: false
			 },
			 {
			     fieldLabel: '培训讲师',
			     name: 'person'
			 },
			 {
			     fieldLabel: '培训单位',
			     name: 'company'
			 },
			 {
			     fieldLabel: '培训地点',
			     name: 'address'
			 },
			 {
				 xtype:'datefield',
			     fieldLabel: '开始日期',
			     name: 'startDate',
			     allowBlank: false
			 },        
			 {
				 xtype:'datefield',
			     fieldLabel: '结束日期',
			     name: 'endDate',
			     allowBlank: false
			 },
			 {
				 xtype: 'numberfield',
				 value: 0.0,
			     fieldLabel: '花费',
			     name: 'cost'
			 },
			 {
				 fieldLabel: '备注',
				 name: 'bz'
			 }
        ];
        this.buttons = [{
            text: '保存',
            handler: function () {
                var form = this.up('form').getForm();
                form.submit({
                    success: function (form, action) {
                    	var grid=Ext.getCmp("peixun");
                    	grid.store.reload();
                        Ext.MessageBox.alert("提示", action.result.msg);
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

