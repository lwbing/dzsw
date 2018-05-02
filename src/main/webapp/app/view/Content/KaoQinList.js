/*
作者：罗文兵
描述：考勤管理
*/
Ext.define('Demo.view.Content.KaoQinList', {
    extend: 'Ext.grid.Panel',
    alias: 'widget.KaoQinList',
    bodyPadding: 5,
    id:'kaoqin',
    requires: [
        'Ext.selection.CheckboxModel',
        'Ext.ux.CheckColumn',
        'Ext.toolbar.Paging',
        'Ext.selection.CellModel'
    ],
    initComponent: function () {
        var me = this;
        var kaoqinStore = Ext.create('Demo.store.KaoQinStore');
        this.store = kaoqinStore;
        this.selModel = Ext.create('Ext.selection.CheckboxModel');
        this.columns = [
                {
                    text: '序号',
                    width: 50,
                    sortable: false,
                    dataIndex: 'id'
                },
                {
                    text: 'uid',
                    width: 80,
                    dataIndex: 'userID'
                },
                {
                    text: '月份',
                    width: 100,
                    dataIndex: 'kqMonth'
                },
                {
                    text: '姓名',
                    width: 100,
                    dataIndex: 'userName'
                },
                {
                    text: '部门',
                    width: 110,
                    dataIndex: 'departName'
                },
                { 	
                    text: '迟到次数',
                    width: 110,
                    dataIndex: 'cdsum'
                },
                {
                    text: '请假次数',
                    width: 110,
                    dataIndex: 'qjsum'
                },
                {
                    text: '旷工次数',
                    width: 120,
                    dataIndex: 'kgsum'
                },
                {
                    text: '加班次数',
                    width: 80,
                    dataIndex: 'jbsum'
                },
                {
                    text: '自定义1',
                    width: 90,
                    dataIndex: 'customsum1'
                },
                {
                    text: '备注',
                    width: 120,
                    dataIndex: 'remark'
                }
            ];
        this.bbar = Ext.create('Ext.PagingToolbar', {
            store: kaoqinStore,
            displayInfo: true,
            displayMsg: 'Displaying topics {0} - {1} of {2}',
            emptyMsg: "No topics to display"
        });
        var field = Ext.create("Ext.form.field.Date", {
            format:'Y-m'
            });
        this.dockedItems = [
            {
                xtype: 'toolbar',
                dock: 'top',
                items: [
                {
                	 xtype: 'button',
                	 id: 'addKao',
                	 text: '批量添加考勤记录',
                	 iconCls: 'add',
                	 handler: function (){
                		 var edit = Ext.create('Demo.view.Content.UserDepartList');
                		 Ext.create('Ext.window.Window', {
                             title: '考勤记录人员表',
                             width: 644,
                             layout: 'fit',
                             modal: true,
                             items: [edit]
                         }).show();
                	 }
                },
                {
                    xtype: 'button',
                    id: 'deleteKao',
                    action: 'add',
                    text: '删除考勤记录',
                    handler: function () {
                        var records = me.getSelectionModel().getSelection();
                        if (records.length > 0) {
                            var ids = "";
                            for (var i = 0; i < records.length; i++) {
                                ids += records[i].get("id");
                                if (i < records.length - 1) { ids = ids + ","; }
                            }
                            var unity=Ext.create('Demo.util.AjaxUtil');
                            var url=path+"/kaoqin/delete.htm";
                            var param={idList:ids};
                            unity.deleteObject(url,param);
                        } else {
                            Ext.MessageBox.show({ title: "提示", msg: "请先选择您要删除的行!" });
                            return;
                        }
                    }
                },"->", "关键字：", field, {
                    text: "查询",
                    handler: function () {
                    	kaoqinStore.load({ params: { month: field.getValue()} });
                    }
                }
                ]
            }
        ];
        this.listeners = {
            itemdblclick: function (grid, record, item, rowIndex, e) {
                var edit = Ext.create('Demo.view.Content.AddKao');
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

