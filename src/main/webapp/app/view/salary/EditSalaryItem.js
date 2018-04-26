Ext.define('Demo.view.salary.EditSalaryItem', {
	extend: 'Ext.form.Panel',
	alias: 'widget.EditSalaryItem',
	requires: [
	           'Ext.form.*'
	           ],
	           frame: true,
	           title: '工资项编辑',
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
	           url: path+'/salaryitem/update.htm',
	           defaultType: 'textfield',
	           initComponent: function () {
	        	   var me = this;
	        	   //var itemType = Ext.create('Demo.store.ItemStore');
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
	        	                	 fieldLabel: '项目类型',
	        	                	 queryMode: 'local',
	        	                	 displayField: 'name',
	        	                	 valueField: 'id',
	        	                	 store: itemType,
	        	                	 id: 'itemTypes',
	        	                	 emptyText: '请选择',
	        	                	 blankText: '请选择',
	        	                	 allowBlank: false,
	        	                	 listeners:{
	        	                		 select:function(combo,records,eOpts){
	        	                			 var form = this.up('form').getForm();
	        	                			 var val=combo.getValue();
	        	                			 form.findField('itemType').setValue(val);
	        	                		 },
	        	                		 afterRender: function (combo){
	        	                			 var form = this.up('form').getForm();
	        	                			 var val=form.findField('itemType').getValue();
	        	                			 var record = itemType.getAt(val-1);
	        	                			 var show = record.get('name');
	        	                			 combo.setValue(show);
	        	                		 }
	        	                	 }
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
	        	                 },
	        	                 {
	        	                	 xtype:'hiddenfield',
	        	                	 name: 'id'
	        	                 },
	        	                 {
	        	                	 xtype:'hiddenfield',
	        	                	 name: 'itemType'
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
	        	   }];
	        	   me.callParent(arguments);
	           }
});

