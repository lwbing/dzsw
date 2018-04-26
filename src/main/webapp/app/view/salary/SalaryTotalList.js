/*
作者：罗文兵
描述：共总表汇总view
 */
Ext.define('Demo.view.salary.SalaryTotalList', {
	extend: 'Ext.grid.Panel',
	alias: 'widget.SalaryTotalList',
	bodyPadding: 5,
	id:'salaryTotalList',
	requires: [
	           'Ext.selection.CheckboxModel',
	           'Ext.ux.CheckColumn',
	           'Ext.toolbar.Paging',
	           'Ext.selection.CellModel'
	           ],
	           initComponent: function () {
	        	   var me = this;
	        	   var tongxinStore = Ext.create('Demo.store.SalaryTotalStore');
	        	   this.store = tongxinStore;
	        	   this.selModel = Ext.create('Ext.selection.CheckboxModel');

	        	   this.columns = [
	        	                   {
	        	                	   text: '序号',
	        	                	   width: 60,
	        	                	   dataIndex: 'id'
	        	                   },
	        	                   {
	        	                	   text: '姓名',
	        	                	   width: 70,
	        	                	   dataIndex: 'userName'
	        	                   },
	        	                   {
	        	                	   text: '部门',
	        	                	   width: 80,
	        	                	   dataIndex: 'departName'
	        	                   },
	        	                   {
	        	                	   text: '基本工资',
	        	                	   width: 80,
	        	                	   dataIndex: 'jbgz'
	        	                   }, 
	        	                   {
	        	                	   text: '计时工资',
	        	                	   width: 80,
	        	                	   dataIndex: 'jsgz'
	        	                   },
	        	                   {
	        	                	   text: '岗位津贴',
	        	                	   width: 80,
	        	                	   dataIndex: 'gwjt'
	        	                   },
	        	                   {
	        	                	   text: '福利及补贴',
	        	                	   width: 80,
	        	                	   dataIndex: 'flbt'
	        	                   },
	        	                   {
	        	                	   text: '绩效奖金',
	        	                	   width: 80,
	        	                	   dataIndex: 'jxjj'
	        	                   },
	        	                   {
	        	                	   text: '提成或奖金',
	        	                	   width: 80,
	        	                	   dataIndex: 'tcjj'
	        	                   },
	        	                   {
	        	                	   text: '相关扣款',
	        	                	   width: 80,
	        	                	   dataIndex: 'xgkk'
	        	                   },
	        	                   {
	        	                	   text: '实发工资',
	        	                	   width: 80,
	        	                	   dataIndex: 'sfgz'
	        	                   },
	        	                   {
	        	                	   text: '所得税',
	        	                	   width: 80,
	        	                	   dataIndex: 'incomeTax'
	        	                   },
	        	                   {
	        	                	   text: '应发工资',
	        	                	   width: 80,
	        	                	   dataIndex: 'yfgz'
	        	                   }
	        	                   ];
	        	   this.bbar = Ext.create('Ext.PagingToolbar', {
	        		   store: tongxinStore,
	        		   displayInfo: true,
	        		   displayMsg: 'Displaying topics {0} - {1} of {2}',
	        		   emptyMsg: "No topics to display"
	        	   });
	        	   this.dockedItems = [
	        	                       {
	        	                    	   xtype: 'toolbar',
	        	                    	   dock: 'top',
	        	                    	   items: [
	        	                    	           {
	        	                    	        	   xtype: 'button',
	        	                    	        	   id: 'addAll',
	        	                    	        	   text: '新建',
	        	                    	        	   handler: function (){
	        	                    	        		   Ext.create('Ext.window.Window', {
	        	                    	        			   title: '新建月份工资',
	        	                    	        			   width: 350,
	        	                    	        			   height:160,
	        	                    	        			   layout: 'fit',
	        	                    	        			   id:'newWindow',
	        	                    	        			   modal: true,
	        	                    	        			   items: [
	        	                    	        			           {
	        	                    	        			        	   xtype: 'form',
	        	                    	        			        	   items:[
	        	                    	        			        	          {
	        	                    	        			        	        	  xtype: 'fieldset',
	        	                    	        			        	        	  layout: 'anchor',
	        	                    	        			        	        	  defaults: {
	        	                    	        			        	        		  anchor: '100%'
	        	                    	        			        	        	  },
	        	                    	        			        	        	  items:[
	        	                    	        			        	        	         {
	        	                    	        			        	        	        	 xtype: 'datefield',
	        	                    	        			        	        	        	 fieldLabel: '工资月份',
	        	                    	        			        	        	        	 id:'date1',
	        	                    	        			        	    	        		 name: 'month',
	        	                    	        			        	    	        		 value:new Date(),
	        	                    	        			        	    	        		 format:'Y-m'
	        	                    	        			        	        	         }
	        	                    	        			        	        	        ] 
	        	                    	        			        	          }
	        	                    	        			        	          ] 
	        	                    	        			           }],
	        	                    	        			           dockedItems: [{
	        	                    	        			        	    xtype: 'toolbar',
	        	                    	        			        	    dock: 'bottom',
	        	                    	        			        	    ui: 'footer',
	        	                    	        			        	    items: [
	        	                    	        			        	        { 
	        	                    	        			        	        	xtype: 'button',
	        	                    	        			        	        	text:'新建',
	        	                    	        			        	        	width:80,
	        	                    	        			        	        	handler: function (){
	        	                    	        			        	        	   var form1 = this.up('window').down('form').getForm();
	        	                    	        			        	        	   var val=form1.findField('date1').getValue();
	        	                    	        			        	        	   var unity=Ext.create('Demo.util.AjaxUtil');
	        	         	        	                    	        			   var url=path+"/salarytotal/addAll.htm";
	        	         	        	                    	        			   var param={month:val};
	        	         	        	                    	        			   unity.deleteObject(url,param);
	        	         	        	                    	        			   var grid=Ext.getCmp("salaryTotalList");
	        	         	        	                    	                    	grid.store.reload({month:dateMonth.getValue()});
	        	                    	        			        	        	}
	        	                    	        			        	        },
	        	                    	        			        	        { 
	        	                    	        			        	        	xtype: 'button', 
	        	                    	        			        	        	text: '取消',
	        	                    	        			        	        	width:80,
	        	                    	        			        	        	handler: function(){
	        	                    	        			        	        		var win = this.up('window');
	        	                    	        			        	        		win.hide();
	        	                    	        			        	        	}
	        	                    	        			        	        },
	        	                    	        			        	        { 
	        	                    	        			        	        	xtype: 'button', 
	        	                    	        			        	        	text: '帮助',
	        	                    	        			        	        	width:80,
	        	                    	        			        	        	handler: function(){
	        	                    	        			        	        		Ext.MessageBox.alert("提示", "新建该月正式员工的工资记录，");
	        	                    	        			        	        	}
	        	                    	        			        	        }
	        	                    	        			        	    ]
	        	                    	        			        	}]
	        	                    	        		   }).show();
	        	                    	        	   }
	        	                    	           },
	        	                    	           {
	        	                    	        	   xtype: 'button',
	        	                    	        	   id: 'addOne',
	        	                    	        	   text: '追加',
	        	                    	        	   handler: function (){
	        	                    	        		   var edit = Ext.create('Demo.view.salary.AddSalaryTotal');
	        	                    	        		   Ext.create('Ext.window.Window', {
	        	                    	        			   title: '窗口',
	        	                    	        			   width: 644,
	        	                    	        			   layout: 'fit',
	        	                    	        			   modal: true,
	        	                    	        			   items: [edit]
	        	                    	        		   }).show();
	        	                    	        	   }
	        	                    	           },
	        	                    	           {
	        	                    	        	   xtype: 'button',
	        	                    	        	   text: '删除',
	        	                    	        	   handler: function () {
	        	                    	        		   var records = me.getSelectionModel().getSelection();
	        	                    	        		   var ids = "";
	        	                    	        		   if (records.length > 0) {
	        	                    	        			   for (var i = 0; i < records.length; i++) {
	        	                                                   ids += records[i].get("id");
	        	                                                   if (i < records.length - 1) { ids = ids + ","; }
	        	                                               }      
	        	                    	        			   var unity=Ext.create('Demo.util.AjaxUtil');
	        	                    	        			   var url=path+"/salarytotal/deleteByItems.htm";
	        	                    	        			   var param={idList:ids};
	        	                    	        			   unity.deleteObject(url,param);
	        	                    	        			   var grid=Ext.getCmp("salaryTotalList");
	        	                    	                    	grid.store.reload();
	        	                    	        		   } else {
	        	                    	        			   Ext.MessageBox.show({ title: "提示", msg: "一次只能选择一条或还没有选择要删除的行!" });
	        	                    	        			   return;
	        	                    	        		   }
	        	                    	        	   }
	        	                    	           },
	        	                    	           {
	        	                    	        	   xtype: 'button',
	        	                    	        	   id: 'deleteAll',
	        	                    	        	   text: '清除',
	        	                    	        	   handler: function () {
	        	                    	        		   Ext.create('Ext.window.Window', {
	        	                    	        			   title: '提示',
	        	                    	        			   width: 350,
	        	                    	        			   height:160,
	        	                    	        			   layout: 'fit',
	        	                    	        			   modal: true,
	        	                    	        			   items: [
	        	                    	        			           {
	        	                    	        			        	   xtype: 'form',
	        	                    	        			        	   items:[
	        	                    	        			        	          {
	        	                    	        			        	        	  xtype: 'fieldset',
	        	                    	        			        	        	  layout: 'anchor',
	        	                    	        			        	        	  defaults: {
	        	                    	        			        	        		  anchor: '100%'
	        	                    	        			        	        	  },
	        	                    	        			        	        	  items:[{
     	                    	        			        	        	        	 xtype: 'datefield',
    	                    	        			        	        	        	 fieldLabel: '工资月份',
    	                    	        			        	        	        	 id:'date2',
    	                    	        			        	    	        		 name: 'month',
    	                    	        			        	    	        		 value:new Date(),
    	                    	        			        	    	        		 format:'Y-m'
    	                    	        			        	        	         }] 
	        	                    	        			        	          }
	        	                    	        			        	          ] 
	        	                    	        			           }],
	        	                    	        			           dockedItems: [{
	        	                    	        			        	    xtype: 'toolbar',
	        	                    	        			        	    dock: 'bottom',
	        	                    	        			        	    ui: 'footer',
	        	                    	        			        	    items: [
	        	                    	        			        	        { 
	        	                    	        			        	        	xtype: 'button',
	        	                    	        			        	        	text:'确定',
	        	                    	        			        	        	width:80,
	        	                    	        			        	        	handler: function (){
	        	                    	        			        	        	   var form2 = this.up('window').down('form').getForm();
		        	                    	        			        	           var val=form2.findField('date2').getValue();
	        	                    	        			        	        	   //var val=dateMonth.getValue();
	        	                    	        			        	        	   var unity=Ext.create('Demo.util.AjaxUtil');
	        	         	        	                    	        			   var url=path+"/salarytotal/deleteByMonth.htm";
	        	         	        	                    	        			   var param={month:val};
	        	         	        	                    	        			   unity.deleteObject(url,param);
	        	         	        	                    	        			   var grid=Ext.getCmp("salaryTotalList");
	        	      	        	                    	                    	   grid.store.reload({month:dateMonth.getValue()});
	        	                    	        			        	        	}
	        	                    	        			        	        },
	        	                    	        			        	        { 
	        	                    	        			        	        	xtype: 'button', 
	        	                    	        			        	        	text: '取消',
	        	                    	        			        	        	width:80,
	        	                    	        			        	        	handler: function(){
	        	                    	        			        	        		var win = this.up('window');
	        	                    	        			        	        		win.hide();
	        	                    	        			        	        	}
	        	                    	        			        	        }
	        	                    	        			        	    ]
	        	                    	        			        	}]
	        	                    	        		   }).show();
	        	                    	        	   }
	        	                    	           },
	        	                    	           {
	        	                    	        	   xtype: 'button',
	        	                    	        	   text: '月末处理',
	        	                    	        	   handler: function (){
	        	                    	        		   Ext.create('Ext.window.Window', {
	        	                    	        			   width: 350,
	        	                    	        			   height:160,
	        	                    	        			   layout: 'fit',
	        	                    	        			   modal: true,
	        	                    	        			   items: [
	        	                    	        			           {
	        	                    	        			        	   xtype: 'form',
	        	                    	        			        	   items:[
	        	                    	        			        	          {
	        	                    	        			        	        	  xtype: 'displayfield',
	        	                    	        			        	              name: 'displayfield1',
	        	                    	        			        	              fieldLabel: '结账',
	        	                    	        			        	              value: '<span style="color:green;">该月工资不可修改。</span>'
	        	                    	        			        	          },
	        	                    	        			        	          {
	        	                    	        			        	        	  xtype: 'displayfield',
	        	                    	        			        	              name: 'displayfield1',
	        	                    	        			        	              fieldLabel: '反结账',
	        	                    	        			        	              value: '<span style="color:green;">该月工资恢复修改状态。</span>'
	        	                    	        			        	          },
	        	                    	        			        	          {
	        	                    	        			        	        	  xtype: 'datefield',
 	                    	        			        	        	        	 fieldLabel: '工资月份',
 	                    	        			        	        	        	 id:'date3',
 	                    	        			        	    	        		 name: 'month',
 	                    	        			        	    	        		 value:new Date(),
 	                    	        			        	    	        		 format:'Y-m' 
	        	                    	        			        	          }
	        	                    	        			        	          ] 
	        	                    	        			           }],
	        	                    	        			           dockedItems: [{
	        	                    	        			        	    xtype: 'toolbar',
	        	                    	        			        	    dock: 'bottom',
	        	                    	        			        	    ui: 'footer',
	        	                    	        			        	    items: [
	        	                    	        			        	        { 
	        	                    	        			        	        	xtype: 'button',
	        	                    	        			        	        	text:'结账',
	        	                    	        			        	        	width:80,
	        	                    	        			        	        	handler: function (){
	        	                    	        			        	        	   var form3 = this.up('window').down('form').getForm();
			        	                    	        			        	       var val=form3.findField('date3').getValue();
	        	                    	        			        	        	   var unity=Ext.create('Demo.util.AjaxUtil');
	        	         	        	                    	        			   var url=path+"/salarytotal/updateJiezhang.htm";
	        	         	        	                    	        			   var param={month:val,Status:1};
	        	         	        	                    	        			   unity.deleteObject(url,param);
	        	                    	        			        	        	}
	        	                    	        			        	        },
	        	                    	        			        	        { 
	        	                    	        			        	        	xtype: 'button', 
	        	                    	        			        	        	text: '反结账',
	        	                    	        			        	        	width:80,
	        	                    	        			        	        	handler: function(){
	        	                    	        			        	        		 var form3 = this.up('window').down('form').getForm();
			        	                    	        			        	           var val=form3.findField('date3').getValue();
	        	                    	        			        	        		   //var val=dateMonth.getValue();
		        	                    	        			        	        	   var unity=Ext.create('Demo.util.AjaxUtil');
		        	         	        	                    	        			   var url=path+"/salarytotal/updateJiezhang.htm";
		        	         	        	                    	        			   var param={month:val,Status:0};
		        	         	        	                    	        			   unity.deleteObject(url,param);
	        	                    	        			        	        	}
	        	                    	        			        	        }
	        	                    	        			        	    ]
	        	                    	        			        	}]
	        	                    	        		   }).show();
	        	                    	        	   }
	        	                    	           }
	        	                    	           ]
	        	                       }
	        	                       ];
	        	   this.listeners = {
	        			   itemdblclick: function (grid, record, item, rowIndex, e) {
	        				   var edit = Ext.create('Demo.view.salary.EidtSalaryTotal');
	        				   edit.loadRecord(record);
	        				   Ext.create('Ext.window.Window', {
	        					   title: '窗口',
	        					   width: 644,
	        					   layout: 'fit',
	        					   modal: true,
	        					   items: [edit]
	        				   }).show();
	        			   }
	        	   };
	        	   this.callParent(arguments);
	           }
});

