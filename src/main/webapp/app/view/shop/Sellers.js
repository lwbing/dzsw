/*
作者：罗文兵
描述：工资组成项view
 */
Ext.define('Demo.view.shop.Sellers', {
	extend: 'Ext.grid.Panel',
	alias: 'widget.sellers',
	bodyPadding: 5,
	id:'sellers',
	requires: [
	           'Ext.selection.CheckboxModel',
	           'Ext.ux.CheckColumn',
	           'Ext.toolbar.Paging',
	           'Ext.selection.CellModel'
	           ],
	           features: [{
	        	   id: 'group',
	        	   ftype: 'groupingsummary',
	        	   groupHeaderTpl: '{name}',
	        	   hideGroupedHeader: true,
	        	   enableGroupingMenu: false
	           }],
	           initComponent: function () {
	        	   var me = this;
	        	   var tongxinStore = Ext.create('Demo.store.SellerStore');
	        	   var itemType = Ext.create('Ext.data.Store', {
	        		   fields: ['id', 'name'],
	        		   data : [
	        		           {"id":"1", "name":"输入项"},
	        		           {"id":"2", "name":"计算项"},
	        		           {"id":"3", "name":"所得税"},
	        		           {"id":"4", "name":"扣款项"}
	        		           ]
	        	   });
	        	   this.store = tongxinStore;
	        	   this.selModel = Ext.create('Ext.selection.CheckboxModel');
	        	   this.columns = [
	        	                   {
	        	                	   text: '序号',
	        	                	   width: 60,
	        	                	   dataIndex: 'id'
	        	                   },
	        	                   {
	        	                	   text: '头像',
	        	                	   width: 180,
	        	                	   dataIndex: 'headImg'
	        	                   },
	        	                   {
	        	                	   text: '登录名',
	        	                	   width: 130,
	        	                	   dataIndex: 'loginName'
	        	                   },
	        	                   {
	        	                	   text: '电话',
	        	                	   width: 120,
	        	                	   dataIndex: 'tel'
	        	                   }, 
	        	                   {
	        	                	   text: '邮箱',
	        	                	   width: 130,
	        	                	   dataIndex: 'email'
	        	                   },
	        	                   {
	        	                	   text: '状态',
	        	                	   width: 80,
	        	                	   dataIndex: 'status',
	        	                	   renderer:function(value){
	        	                		   if(value==1){
	        	                			   return "正常";
	        	                		   }
	        	                		   return "禁用"
	        	                	   }
	        	                   },
	        	                   {
	        	                	   text: '是否显示',
	        	                	   width: 80,
	        	                	   dataIndex: 'enable'
	        	                   },
	        	                   {
	        	                	   text: '创建时间',
	        	                	   width: 150,
	        	                	   dataIndex: 'createTime'
	        	                   }];
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
	        	                    	        	   id: 'addTong',
	        	                    	        	   text: '新建商家',
	        	                    	        	   iconCls: 'add',
	        	                    	        	   handler: function (){
	        	                    	        		   var edit = Ext.create('Demo.view.salary.AddSalaryItem');
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
	        	                    	        	   id: 'deleteSalaryItem',
	        	                    	        	   action: 'add',
	        	                    	        	   text: '删除商家',
	        	                    	        	   handler: function () {
	        	                    	        		   var records = me.getSelectionModel().getSelection();
	        	                    	        		   if (records.length == 1) {
	        	                    	        			   var ids = records[0].get("id");      
	        	                    	        			   var unity=Ext.create('Demo.util.AjaxUtil');
	        	                    	        			   var url="/salaryitem/delete.htm";
	        	                    	        			   var param={id:ids};
	        	                    	        			   unity.deleteObject(url,param);
	        	                    	        			   tongxinStore.reload();
	        	                    	        		   } else {
	        	                    	        			   Ext.MessageBox.show({ title: "提示", msg: "一次只能选择一条或还没有选择要删除的行!" });
	        	                    	        			   return;
	        	                    	        		   }
	        	                    	        	   }
	        	                    	           }
	        	                    	           ]
	        	                       }
	        	                       ];
//	        	   this.listeners = {
//	        			   itemdblclick: function (grid, record, item, rowIndex, e) {
//	        				   var edit = Ext.create('Demo.view.salary.EditSalaryItem');
//	        				   edit.loadRecord(record);
//	        				   Ext.create('Ext.window.Window', {
//	        					   title: '窗口',
//	        					   width: 644,
//	        					   layout: 'fit',
//	        					   modal: true,
//	        					   items: [edit]
//	        				   }).show();
//	        			   }
//	        	   };
	        	   this.callParent(arguments);
	           }
});

