/*
作者：罗文兵
描述：企业岗位管理信息操作
*/
Ext.define('Demo.view.Content.JobList', {
    extend: 'Ext.grid.Panel',
    alias: 'widget.JobList',
    title: '企业人员管理',
    bodyPadding: 5,
    requires: [
        'Ext.selection.CheckboxModel',
        'Ext.ux.CheckColumn',
        'Ext.toolbar.Paging',
        'Ext.selection.CellModel'
    ],
    initComponent: function () {
        var me = this;
        var userStore =Ext.create('Demo.store.JobStroe');
        this.store = userStore;
        this.selModel = Ext.create('Ext.selection.CheckboxModel');
        this.columns = [
                {
                    text: '序号',
                    width: 70,
                    sortable: false,
                    dataIndex: 'id'
                },
                {
                    text: '岗位名称',
                    width: 160,
                    dataIndex: 'jobName'
                }
            ];
        this.bbar = Ext.create('Ext.PagingToolbar', {
            store: userStore,
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
                	 id: 'addJob',
                	 text: '添加企业岗位',
                	 iconCls: 'add',
                	 handler: function (){
                		 var edit = Ext.create('Demo.view.Content.AddJob');
                		 Ext.create('Ext.window.Window', {
                             title: '企业岗位添加表',
                             width: 644,
                             layout: 'fit',
                             modal: true,
                             items: [edit]
                         }).show();
                	 }
                },
                {
                    xtype: 'button',
                    id: 'deleteJob',
                    action: 'add',
                    text: '删除企业岗位',
                    handler: function () {
                        var records = me.getSelectionModel().getSelection();
                        if (records.length ==1) {
                            var ids = "";
                            ids = records[0].get("id");
                            var unity=Ext.create('Demo.util.AjaxUtil');
                            var url=path+"/job/delete.htm";
                            //alert(ids);
                            var para={id:ids};
                            unity.deleteObject(url,para);
                        } else {
                            Ext.MessageBox.show({ title: "提示", msg: "您还没选择要删除的行或者已经多选几行!" });
                            return;
                        }
                    }
                }
                ]
            }
        ];
        this.listeners = {
            itemdblclick: function (grid, record, item, rowIndex, e) {
                var edit = Ext.create('Demo.view.Content.EditJob');
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

