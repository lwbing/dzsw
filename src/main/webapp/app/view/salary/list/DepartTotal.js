/*
作者：罗文兵
描述：按部门汇总view
*/
Ext.define('Demo.view.salary.list.DepartTotal', {
    extend: 'Ext.grid.Panel',
    alias: 'widget.DepartTotal',
    bodyPadding: 5,
    id:'DepartTotal',
    requires: [
        'Ext.selection.CheckboxModel',
        'Ext.ux.CheckColumn',
        'Ext.toolbar.Paging',
        'Ext.selection.CellModel'
    ],
    initComponent: function () {
        var me = this;
        var tongxinStore = Ext.create('Demo.store.NotePadStore');
        this.store = tongxinStore;
        this.selModel = Ext.create('Ext.selection.CheckboxModel');
        this.columns = [
                {
                    text: '序号',
                    width: 50,
                    dataIndex: 'id'
                },
                {
                    text: '记事名称',
                    width: 140,
                    dataIndex: 'title'
                },
                {
                    text: '记事日期',
                    width: 150,
                    dataIndex: 'sysTime'
                },
                {
                    text: '内容',
                    width: 250,
                    dataIndex: 'contents'
                },   
                {
                    text: '备注',
                    width: 150,
                    dataIndex: 'bz'
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
                	 id: 'addTong',
                	 text: '添加记事',
                	 iconCls: 'add',
                	 handler: function (){
                		 var edit = Ext.create('Demo.view.zonghe.AddNotePad');
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
                    id: 'deletePei',
                    action: 'add',
                    text: '删除记事',
                    handler: function () {
                        var records = me.getSelectionModel().getSelection();
                        if (records.length > 0) {
                            var ids = "";
                            for (var i = 0; i < records.length; i++) {
                                ids += records[i].get("Id");
                                if (i < records.length - 1) { ids = ids + ","; }
                            }
                            var unity=Ext.create('Demo.util.AjaxUtil');
                            var url=path+"/tongxin/delete.htm";
                            var param={idList:ids};
                            unity.deleteObject(url,param);
                            tongxinStore.reload();
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
                var edit = Ext.create('Demo.view.zonghe.EditNotePad');
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

