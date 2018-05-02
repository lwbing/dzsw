Ext.define('Demo.view.salary.EidtSalaryTotal', {
	extend: 'Ext.form.Panel',
	alias: 'widget.EidtSalaryTotal',
	requires: [
	           'Ext.form.*'
	           ],
	           frame: true,
	           title: '编辑员工工资',
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
	           url: path+'/salarytotal/update.htm',
	           defaultType: 'textfield',
	           initComponent: function () {
	        	   var me = this;       	   
	        	   this.items = [
	        	                 {
	        	                	 fieldLabel: '编号',
	        	                	 id: 'userID',
	        	                	 name:'userID',
	        	                	 readOnly:true,
	        	                	 allowBlank: false
	        	                 },
	        	                 {
	        	                	 fieldLabel: '姓名',
	        	                	 id: 'userName',
	        	                	 name: 'userName',
	        	                	 readOnly:true
	        	                 },
	        	                 {
	        	                	 fieldLabel: '部门',
	        	                	 id: 'depart',
	        	                	 name: 'departName',
	        	                	 readOnly:true
	        	                 },
	        	                 {
	        	                	 xtype: 'numberfield',
	        	                	 fieldLabel: '基本工资',
	        	                	 name:'jbgz',
	        	                	 allowBlank: false
	        	                 },
	        	                 {
	        	                	 xtype: 'numberfield',
	        	                	 fieldLabel: '计时工资',
	        	                	 name:'jsgz',
	        	                	 allowBlank: false
	        	                 },
	        	                 {
	        	                	 xtype: 'numberfield',
	        	                	 fieldLabel: '岗位津贴',
	        	                	 name:'gwjt',
	        	                	 allowBlank: false
	        	                 },
	        	                 {
	        	                	 xtype: 'numberfield',
	        	                	 fieldLabel: '福利及补贴',
	        	                	 name:'flbt',
	        	                	 allowBlank: false
	        	                 },
	        	                 {
	        	                	 xtype: 'numberfield',
	        	                	 fieldLabel: '绩效奖金',
	        	                	 name:'jxjj',
	        	                	 allowBlank: false
	        	                 },
	        	                 {
	        	                	 xtype: 'numberfield',
	        	                	 fieldLabel: '提成或奖金',
	        	                	 name:'tcjj',
	        	                	 allowBlank: false
	        	                 },
	        	                 {
	        	                	 xtype: 'numberfield',
	        	                	 fieldLabel: '相关扣款',
	        	                	 name:'xgkk',
	        	                	 allowBlank: false
	        	                 },
	        	                 {
	        	                	 xtype: 'datefield',
	        	                	 fieldLabel: '工资月份',
	        	                	 name:'month',
	        	                	 value:new Date(),
        	    	        		 format:'Ym',
	        	                	 allowBlank: false
	        	                 },
	        	                 {
	        	                	 xtype: 'hiddenfield',
	        	                	 name:'id',
	        	                	 allowBlank: false
	        	                 }
	        	                 ];
	        	   var userStore=Ext.create('Demo.store.UserDepartStore');
	        	   this.dockedItems = [{
	                   xtype: 'toolbar',
	                   dock: 'top',
	                   items: ["输入姓名：", {
	                       	 xtype: 'combo',
	                       	 displayField: 'userName',
	                            typeAhead: false,
	                            hideLabel: true,
	                            hideTrigger:true,
	                            anchor: '100%',
	                            width:400,
	                            store:userStore,
	                            minChars : 2,  //这个是设置至少多少个字符才会触发查询，默认是4个字符才会查询
	                            pageSize:10,
	                            listeners :{
	                           	 'select':function(combo,records,eOpts){
	                           		 var record =records[0];
	                           		 var uid = record.get("userID"); 
	                           		 var name = record.get("userName"); 
	                           		 var depart = record.get("departName"); 
	                           		 var form = this.up('form').getForm();
	                           		 form.findField('userID').setValue(uid);
	                           		 form.findField('userName').setValue(name);
	                           		 form.findField('depart').setValue(depart);
	                           	 }
	                            },
	                            listConfig: {
	                                   loadingText: 'Searching...',
	                                   emptyText: '没有查找到匹配的项...',
	                                   getInnerTpl: function() {
	                                       return '<table width="100%">' +
	                                           	'<tr><td style="width:100px;height:35px;">{userID}</td><td style="width=100px;">{userName}</td><td style="width=100px;">{departName}</td></tr>' +
	                                       '</table>';
	                                   }
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
	        					   var grid=Ext.getCmp("salaryTotalList");
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

