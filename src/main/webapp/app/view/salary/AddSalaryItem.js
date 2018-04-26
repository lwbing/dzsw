Ext.define('Demo.view.salary.AddSalaryItem', {
	extend: 'Ext.form.Panel',
	alias: 'widget.AddSalaryItem',
	requires: [
	           'Ext.form.*'
	           ],
	           frame: true,
	           title: '新建工资项',
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
	           url: path+'/salaryitem/add.htm',
	           defaultType: 'textfield',
	           initComponent: function () {
	        	   var me = this;
	        	   var status = Ext.create('Ext.data.Store', {
	        		   fields: ['id', 'name'],
	        		   data : [
	        		           {"id":"1", "name":"正式员工"},
	        		           {"id":"0", "name":"临时员工"}
	        		           ]
	        	   });
	        	   var itemType = Ext.create('Ext.data.Store', {
	        		   fields: ['id', 'name'],
	        		   data : [
	        		           {"id":"1", "name":"输入项"},
	        		           {"id":"2", "name":"计算项"},
	        		           {"id":"3", "name":"所得税"},
	        		           {"id":"4", "name":"扣款项"}
	        		           ]
	        	   });
	        	   this.items = [
	        	                 {
	        	                	 fieldLabel: '工资项目',
	        	                	 name: 'itemName',
	        	                	 allowBlank: false
	        	                 },
	        	                 {
	        	                	 xtype:'numberfield',
	        	                	 fieldLabel: '初始值',
	        	                	 name: 'initSum'
	        	                 },
	        	                 {
	        	                	 fieldLabel: '代码',
	        	                	 name: 'spoken'
	        	                 },
	        	                 {
	        	                	 xtype: 'combobox',
	        	                	 fieldLabel: '员工类型',
	        	                	 queryMode: 'local',
	        	                	 displayField: 'name',
	        	                	 valueField: 'id',
	        	                	 store: status,
	        	                	 name: 'typeUser',
	        	                	 emptyText: '请选择',
	        	                	 blankText: '请选择',
	        	                	 allowBlank: false
	        	                 },
	        	                 {
	        	                	 xtype: 'combobox',
	        	                	 fieldLabel: '项目类型',
	        	                	 queryMode: 'local',
	        	                	 displayField: 'name',
	        	                	 valueField: 'id',
	        	                	 store: itemType,
	        	                	 name: 'itemType',
	        	                	 emptyText: '请选择',
	        	                	 blankText: '请选择',
	        	                	 allowBlank: false
	        	                 },
	        	                 {
	        	                	 xtype:'textareafield',
	        	                	 fieldLabel: '描述',
	        	                	 name: 'description'
	        	                 },
	        	                 {
	        	                	 xtype: 'radiogroup',
	        	                	 fieldLabel: '是否显示',
	        	                	 columns: 2,
	        	                	 defaults: {
	        	                		 name: 'isShow'
	        	                	 },
	        	                	 items: [{
	        	                		 inputValue: '0',
	        	                		 boxLabel: '否'
	        	                	 }, {
	        	                		 inputValue: '1',
	        	                		 boxLabel: '是',
	        	                		 checked: true
	        	                	 }],
	        	                	 allowBlank: false
	        	                 }
	        	                 ];
	        	   this.buttons = [{
	        		   text: '保存',
	        		   handler: function () {
	        			   var form = this.up('form').getForm();
	        			   form.submit({
	        				   success: function (form, action) {
	        					   var grid=Ext.getCmp("salaryList");
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

