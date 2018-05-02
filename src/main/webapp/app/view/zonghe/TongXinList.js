/*
作者：罗文兵
描述：企业通信录管理view
*/
Ext.define('Demo.view.zonghe.TongXinList', {
    extend: 'Ext.grid.Panel',
    alias: 'widget.TongXinList',
    bodyPadding: 5,
    id:'tongxin',
    requires: [
        'Ext.selection.CheckboxModel',
        'Ext.ux.CheckColumn',
        'Ext.toolbar.Paging',
        'Ext.selection.CellModel'
    ],
    initComponent: function () {
        var me = this;
        var tongxinStore = Ext.create('Demo.store.TongXinStore');
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
                    text: '姓名',
                    width: 140,
                    dataIndex: 'userName'
                },
                {
                    text: '部门名称',
                    width: 150,
                    dataIndex: 'depart'
                },
                {
                    text: '手机号码',
                    width: 150,
                    dataIndex: 'tel'
                },
                {
                    text: '座机号码',
                    width: 150,
                    dataIndex: 'mobile'
                },
                { 	
                    text: 'QQ',
                    width: 110,
                    dataIndex: 'qq'
                },
                {
                    text: '电子邮箱',
                    width: 150,
                    dataIndex: 'email'
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
                	 text: '添加通信记录',
                	 iconCls: 'add',
                	 handler: function (){
                		 var edit = Ext.create('Demo.view.zonghe.AddTongXin');
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
                var edit = Ext.create('Demo.view.zonghe.EditTongXin');
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

