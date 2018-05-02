/*
作者：罗文兵
描述：出差管理view
*/
Ext.define('Demo.view.zonghe.ChuChaiList', {
    extend: 'Ext.grid.Panel',
    alias: 'widget.ChuChaiList',
    bodyPadding: 5,
    id:'chuchai',
    requires: [
        'Ext.selection.CheckboxModel',
        'Ext.ux.CheckColumn',
        'Ext.toolbar.Paging',
        'Ext.selection.CellModel'
    ],
    initComponent: function () {
        var me = this;
        
        var tongxinStore = Ext.create('Demo.store.ChuChaiStore');
        this.store = tongxinStore;
        this.selModel = Ext.create('Ext.selection.CheckboxModel');
        this.columns = [
                {
                    text: '序号',
                    width: 50,
                    dataIndex: 'id'
                },
                {
                    text: '姓名',
                    width: 90,
                    dataIndex: 'userName'
                },
                {
                    text: 'UID',
                    width: 60,
                    dataIndex: 'userID'
                },
                {
                    text: '部门名称',
                    width: 90,
                    dataIndex: 'departName'
                },
                {
                    text: '出差事由',
                    width: 170,
                    dataIndex: 'reason'
                },
                {
                    text: '出差地点',
                    width: 90,
                    dataIndex: 'address'
                },
                { 	
                    text: '开始日期',
                    width: 120,
                    dataIndex: 'startTime'
                },
                {
                    text: '结束日期',
                    width: 120,
                    dataIndex: 'endTime'
                },
                {
                    text: '出差费用',
                    width: 80,
                    dataIndex: 'cost'
                },
                {
                    text: '报销情况',
                    width: 80,
                    dataIndex: 'status',
                    renderer: function (value) {
                        if (value ==0) {
                            return "未报销";
                        }else{
                        	return "已报销";
                        }
                    }
                },
                {
                    text: '批准人',
                    width: 90,
                    dataIndex: 'pzr'
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
                	 id: 'addChuChai',
                	 text: '添加出差',
                	 iconCls: 'add',
                	 handler: function (){
                		 var edit = Ext.create('Demo.view.zonghe.AddChuChai');
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
                    text: '删除通信记录',
                    handler: function () {
                        var records = me.getSelectionModel().getSelection();
                        if (records.length > 0) {
                            var ids = "";
                            for (var i = 0; i < records.length; i++) {
                                ids += records[i].get("Id");
                                if (i < records.length - 1) { ids = ids + ","; }
                            }
                            var unity=Ext.create('Demo.util.AjaxUtil');
                            var url=path+"/chuchai/delete.htm";
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
                var form = Ext.create('Demo.view.zonghe.EditChuChai');
                var val=record.get("status");       
                //form.getForm().findField("status").setValue(val);
                form.loadRecord(record);
                form.getForm().findField("status").setValue(val);
                //var com= form.getForm().findField("status");
                //com.setValue(val);
                Ext.create('Ext.window.Window', {
                    title: '窗口',
                    width: 644,
                    layout: 'fit',
                    modal: true,
                    items: [form]
                }).show();
            }
        };
        this.callParent(arguments);
    }
});

