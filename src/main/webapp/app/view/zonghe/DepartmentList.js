/*
作者：罗文兵
描述：部门管理view
*/
Ext.define('Demo.view.zonghe.DepartmentList', {
    extend: 'Ext.grid.Panel',
    alias: 'widget.DepartmentList',
    bodyPadding: 5,
    id:'department',
    requires: [
        'Ext.selection.CheckboxModel',
        'Ext.ux.CheckColumn',
        'Ext.toolbar.Paging',
        'Ext.selection.CellModel'
    ],
    initComponent: function () {
        var me = this;
        var departStore = Ext.create('Demo.store.DepartmentStore');
        this.store = departStore;
        this.selModel = Ext.create('Ext.selection.CheckboxModel');
        this.columns = [
                {
                    text: '序号',
                    width: 50,
                    sortable: false,
                    dataIndex: 'id'
                },
                {
                    text: '部门名称',
                    width: 140,
                    dataIndex: 'departmentName'
                },
                {
                    text: '部门管理人',
                    width: 150,
                    dataIndex: 'officer'
                },
                {
                    text: '部门联系电话',
                    width: 150,
                    dataIndex: 'tel'
                },
                {
                    text: '上级部门',
                    width: 110,
                    dataIndex: 'parentID',
                    renderer:function(value, cellmeta, record, rowIndex, columnIndex, store){
                    	var index = store.find('id',value);
                    	var val=store.getAt(index).get('departmentName');
                    	return val;
                    }
                },
                { 	
                    text: '部门人数',
                    width: 110,
                    dataIndex: 'total'
                }
            ];
        this.bbar = Ext.create('Ext.PagingToolbar', {
            store: departStore,
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
                	 id: 'addPei',
                	 text: '添加部门',
                	 iconCls: 'add',
                	 handler: function (){
                		 var records = me.getSelectionModel().getSelection();
                		 if(records.length ==1){
                			 var edit = Ext.create('Demo.view.zonghe.AddDepartment');
                			 edit.getForm().findField("pname").setValue(records[0].get("departmentName"));
                			 edit.getForm().findField("parentID").setValue(records[0].get("id"));
                    		 Ext.create('Ext.window.Window', {
                                 title: '窗口',
                                 width: 644,
                                 layout: 'fit',
                                 modal: true,
                                 items: [edit]
                             }).show();
                		 }else{
                			 Ext.MessageBox.show({ title: "提示", msg: "请选择所属父节点!" });
                		 }	 
                	 }
                },'-',
                {
                    xtype: 'button',
                    id: 'deletePei',
                    action: 'add',
                    text: '删除部门',
                    handler: function () {
                        var records = me.getSelectionModel().getSelection();
                        if (records.length == 1) {
                            var ids = records[0].get("id");
                            var unity=Ext.create('Demo.util.AjaxUtil');
                            var url=path+"/department/delete.htm";
                            var param={departID:ids};
                            unity.deleteObject(url,param);
                            departStore.reload();
                        } else {
                            Ext.MessageBox.show({ title: "提示", msg: "请先选择您要删除的行!" });
                            return;
                        }
                    }
                }
                ]
            }
        ];
        this.listeners = {
            itemdblclick: function (grid, record, item, rowIndex, e) {
                var edit = Ext.create('Demo.view.zonghe.EditDepartment');
               
                var records = me.getSelectionModel().getSelection();
                var index = departStore.find('id',records[0].get("parentID"));
            	var val=departStore.getAt(index).get('departmentName');
   			 	edit.getForm().findField("pname").setValue(val);
   			 	
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

