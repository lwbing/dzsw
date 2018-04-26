/*
作者：罗文兵
描述：企业人员管理信息操作
*/
Ext.define('Demo.view.Content.UserInfoList', {
    extend: 'Ext.grid.Panel',
    alias: 'widget.UserInfoList',
    bodyPadding: 5,
    requires: [
        'Ext.selection.CheckboxModel',
        'Ext.ux.CheckColumn',
        'Ext.toolbar.Paging',
        'Ext.selection.CellModel',
        'Ext.ux.ProgressBarPager'
    ],
    initComponent: function () {
        var me = this;
        var status = Ext.create('Ext.data.Store', {
            fields: ['id', 'name'],
            data : [
                {"id":"1", "name":"在职人员"},
                {"id":"0", "name":"离职人员"}
            ]
        });
        var userStore = Ext.create('Demo.store.UserStore');
        this.store = userStore;
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
                    width: 110,
                    dataIndex: 'name'
                },
                {
                    text: '性别',
                    width: 40,
                    dataIndex: 'sex'
                },
                {
                    text: '文化程度',
                    width: 110,
                    dataIndex: 'education'
                },
                { 	
                    text: '出生日期',
                    width: 110,
                    dataIndex: 'birthday'
                },
                {
                    text: '工作时间',
                    width: 110,
                    dataIndex: 'workdate'
                },
                {
                    text: '籍贯',
                    width: 110,
                    dataIndex: 'birthplace'
                },
                {
                    text: '政治面貌',
                    width: 120,
                    dataIndex: 'politicsStatus'
                },
                {
                    text: '民族',
                    width: 80,
                    dataIndex: 'nationality'
                },
                {
                    text: '工作岗位',
                    width: 90,
                    dataIndex: 'jobID'
                },
                {
                    text: '照片',
                    width: 120,
                    dataIndex: 'photo',
                    tdCls: 'x-grid-cell-topic',
                    renderer: function (value) {
                        if (value == "" || value == null) {
                            return "";
                        }
                        return Ext.String.format('<a href="/Content/Image/{0}" target="_blank">查看图片</a>', value);
                    }
                }
            ];
        this.bbar = Ext.create('Ext.PagingToolbar', {
            store: userStore,
            displayInfo: true,
            displayMsg: 'Displaying topics {0} - {1} of {2}',
            emptyMsg: "No topics to display",
            plugins: Ext.create('Ext.ux.ProgressBarPager', {})
        });
        this.dockedItems = [
            {
                xtype: 'toolbar',
                dock: 'top',
                items: [
                {
                	 xtype: 'button',
                	 id: 'addUser',
                	 text: '添加企业人员',
                	 iconCls: 'add',
                	 handler: function (){
                		 var edit = Ext.create('Demo.view.Content.AddUser');
                		 Ext.create('Ext.window.Window', {
                             title: '企业人员添加表',
                             width: 644,
                             layout: 'fit',
                             modal: true,
                             items: [edit]
                         }).show();
                	 }
                },
                {
                    xtype: 'button',
                    id: 'deleteUser',
                    action: 'add',
                    text: '删除数据',
                    handler: function () {
                        var records = me.getSelectionModel().getSelection();
                        if (records.length == 1) {
                            var ids = records[0].get("id"); 
                            var unity=Ext.create('Demo.util.AjaxUtil');
                            var url=path+"/userinfo/delete";
                            var param={id:ids};
                            unity.deleteObject(url,param);
                        } else {
                            Ext.MessageBox.show({ title: "提示", msg: "你一次只能选择一条删除或还没有选择!" });
                            return;
                        }
                    }
                },
                {
                    xtype: 'combobox',
                    queryMode: 'local',
                    displayField: 'name',
                    valueField: 'id',
                    store: status,
                    emptyText: '请选择类型',
                    listeners: {
                        select: function (combo, record, index) {
                            userStore.load({ params: { status: combo.getValue()} });
                        }
                    }
                }
                ]
            }
        ];
        this.listeners = {
            itemdblclick: function (grid, record, item, rowIndex, e) {
                var edit = Ext.create('Demo.view.Content.EditUser');
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

