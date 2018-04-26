/*
作者：罗文兵
描述：培训管理view
*/
Ext.define('Demo.view.Content.PeiXunList', {
    extend: 'Ext.grid.Panel',
    alias: 'widget.PeiXunList',
    bodyPadding: 5,
    id:'peixun',
    requires: [
        'Ext.selection.CheckboxModel',
        'Ext.ux.CheckColumn',
        'Ext.toolbar.Paging',
        'Ext.selection.CellModel'
    ],
    initComponent: function () {
        var me = this;
        var peixunStore = Ext.create('Demo.store.PeiXunStore');
        this.store = peixunStore;
        this.selModel = Ext.create('Ext.selection.CheckboxModel');
        this.columns = [
                {
                    text: '序号',
                    width: 50,
                    sortable: false,
                    dataIndex: 'id'
                },
                {
                    text: '培训名称',
                    width: 140,
                    dataIndex: 'pname'
                },
                {
                    text: '培训内容',
                    width: 150,
                    dataIndex: 'pcontent'
                },
                {
                    text: '培训讲师',
                    width: 100,
                    dataIndex: 'person'
                },
                {
                    text: '培训单位',
                    width: 110,
                    dataIndex: 'company'
                },
                { 	
                    text: '培训地点',
                    width: 110,
                    dataIndex: 'address'
                },
                {
                    text: '开始时间',
                    width: 110,
                    dataIndex: 'startDate'
                },
                {
                    text: '结束时间',
                    width: 120,
                    dataIndex: 'endDate'
                },
                {
                    text: '培训费用',
                    width: 80,
                    dataIndex: 'cost'
                },
                {
                    text: '备注',
                    width: 120,
                    dataIndex: 'bz'
                }
            ];
        this.bbar = Ext.create('Ext.PagingToolbar', {
            store: peixunStore,
            displayInfo: true,
            displayMsg: 'Displaying topics {0} - {1} of {2}',
            emptyMsg: "No topics to display"
        });
        var date_ = new Date();
        var year = date_.getFullYear();
        var month = date_.getMonth() + 1;
        var firstdate = year + '/' + month + '/01';

        var day = new Date(year, month, 0);
        var lastdate = year + '/' + month + '/' + day.getDate();
        var start = Ext.create("Ext.form.field.Date", {
            format:'Y-m-d',
            value:new Date(firstdate)
            });
        var end = Ext.create("Ext.form.field.Date", {
            format:'Y-m-d',
            value:new Date(lastdate)
            });
        this.dockedItems = [
            {
                xtype: 'toolbar',
                dock: 'top',
                items: [
                {
                	 xtype: 'button',
                	 id: 'addPei',
                	 text: '添加培训记录',
                	 iconCls: 'add',
                	 handler: function (){
                		 var edit = Ext.create('Demo.view.Content.AddPeiXun');
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
                    text: '删除培训记录',
                    handler: function () {
                        var records = me.getSelectionModel().getSelection();
                        if (records.length > 0) {
                            var ids = "";
                            for (var i = 0; i < records.length; i++) {
                                ids += records[i].get("Id");
                                if (i < records.length - 1) { ids = ids + ","; }
                            }
                            var unity=Ext.create('Demo.util.AjaxUtil');
                            var url=path+"/peixun/delete.htm";
                            var param={idList:ids};
                            unity.deleteObject(url,param);
                            this.store.reload();
                        } else {
                            Ext.MessageBox.show({ title: "提示", msg: "请先选择您要删除的行!" });
                            return;
                        }
                    }
                },"->", "关键字：", start,end, {
                    text: "查询",
                    handler: function () {
                    	peixunStore.load({ params: { startTime: start.getValue(),endTime:end.getValue()} });
                    }
                }
                ]
            }
        ];
        this.listeners = {
            itemdblclick: function (grid, record, item, rowIndex, e) {
                var edit = Ext.create('Demo.view.Content.EditPeiXun');
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

