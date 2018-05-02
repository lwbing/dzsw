/*
作者：罗文兵
描述：企业人员集合
*/
Ext.define('Demo.view.Content.UserDepartList', {
    extend: 'Ext.grid.Panel',
    alias: 'widget.UserDepartList',
    title: '企业人员列表',
    bodyPadding: 5,
    requires: [
        'Ext.selection.CheckboxModel',
        'Ext.ux.CheckColumn',
        'Ext.toolbar.Paging',
        'Ext.selection.CellModel'
    ],
    initComponent: function () {
        var me = this;
        var store =Ext.create('Demo.store.UserDepartStore');
        this.store = store;
        this.selModel = Ext.create('Ext.selection.CheckboxModel');
        this.columns = [
                {
                    text: '序号',
                    width: 90,
                    sortable: false,
                    dataIndex: 'userID'
                },
                {
                    text: '姓名',
                    width: 160,
                    dataIndex: 'userName'
                },
                {
                	text: '部门',
                    width: 160,
                    dataIndex: 'departName'
                }
            ];
        this.bbar = Ext.create('Ext.PagingToolbar', {
            store: store,
            displayInfo: true,
            displayMsg: 'Displaying topics {0} - {1} of {2}',
            emptyMsg: "No topics to display"
        });
        var field =new Ext.form.field.Text();
        var datefield = Ext.create("Ext.form.field.Date", {
            format:'Ym',
            value:new Date()
            });
        this.dockedItems = [
            {
                xtype: 'toolbar',
                dock: 'top',
                items: [
                {
                	 xtype: 'button',
                	 id: 'allbtn',
                	 text: '全选',
                	 handler: function (){
                		
                	 }
                },"-",
                {
                    xtype: 'button',
                    id: 'cansle',
                    text: '撤销全选',
                    handler: function () {
                        
                    }
                },"-",
                {
                    xtype: 'button',
                    id: 'confirm',
                    text: '确定',
                    handler: function () {
                    	var records = me.getSelectionModel().getSelection();
                    	var len=records.length;
                    	if ( len> 0) {
                            var ids = "";
                            for (var i = 0; i < len; i++) {
                                ids += records[i].get("userID");
                                if (i < len - 1) { ids = ids + ","; }
                            }
                            var unity=Ext.create('Demo.util.AjaxUtil');
                            var url=path+"/kaoqin/add.htm";
                            var para={idList:ids,month:datefield.getValue()};
                            var obj=unity.getObject(url,para);
                            Ext.MessageBox.show({ title: "提示", msg: obj.msg });
                        } else {
                            Ext.MessageBox.show({ title: "提示", msg: "请选择要添加的人!" });
                            return;
                        }
                    }
                },"->", '考勤月份:',datefield,'-',"姓名：",field, {
                    text: "查询",
                    handler: function () {
                        store.load({ params: { keyword: field.getValue()} });
                    }
                }
                ]
            }
        ];
        this.callParent(arguments);
    }
});

