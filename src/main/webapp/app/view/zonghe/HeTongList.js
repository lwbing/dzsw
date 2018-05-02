/*
作者：罗文兵
描述：企业合同管理view
*/
Ext.define('Demo.view.zonghe.HeTongList', {
    extend: 'Ext.grid.Panel',
    alias: 'widget.HeTongList',
    bodyPadding: 5,
    id:'hetong',
    requires: [
        'Ext.selection.CheckboxModel',
        'Ext.ux.CheckColumn',
        'Ext.toolbar.Paging',
        'Ext.selection.CellModel'
    ],
    initComponent: function () {
        var me = this;
        var tongxinStore = Ext.create('Demo.store.HeTongStore');
        this.store = tongxinStore;
        this.selModel = Ext.create('Ext.selection.CheckboxModel');
        this.columns = [
                {
                    text: '序号',
                    width: 50,
                    sortable: false,
                    dataIndex: 'id'
                },
                {
                    text: '合同编号',
                    width: 110,
                    dataIndex: 'hno'
                },
                {
                    text: '姓名',
                    width: 90,
                    dataIndex: 'userName'
                },
                {
                    text: '部门',
                    width: 100,
                    dataIndex: 'departName'
                },
                {
                    text: '试用时间',
                    width: 110,
                    dataIndex: 'syStartTime'
                },
                { 	
                    text: '试用结束时间',
                    width: 110,
                    dataIndex: 'syEndTime'
                },
                {
                    text: '试用期工资',
                    width: 80,
                    dataIndex: 'syCost'
                },
                {
                    text: '转正日期',
                    width: 100,
                    dataIndex: 'sqStartTime'
                },
                {
                    text: '结束日期',
                    width: 100,
                    dataIndex: 'sqEndTime'
                },
                {
                    text: '转正工资',
                    width: 80,
                    dataIndex: 'cost'
                },
                {
                    text: '签订年限',
                    width: 80,
                    dataIndex: 'age'
                },
                {
                    text: '附件',
                    width: 80,
                    dataIndex: 'htPath'
                },
                {
                    text: '备注',
                    width: 130,
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
                	 id: 'addHe',
                	 text: '新增合同记录',
                	 iconCls: 'add',
                	 handler: function (){
                		 var edit = Ext.create('Demo.view.zonghe.AddHeTong');
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
                    text: '删除合同记录',
                    handler: function () {
                        var records = me.getSelectionModel().getSelection();
                        if (records.length > 0) {
                            var ids = "";
                            for (var i = 0; i < records.length; i++) {
                                ids += records[i].get("Id");
                                if (i < records.length - 1) { ids = ids + ","; }
                            }
                            var unity=Ext.create('Demo.util.AjaxUtil');
                            var url=path+"/hetong/delete.htm";
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
                var edit = Ext.create('Demo.view.zonghe.EditHeTong');
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

