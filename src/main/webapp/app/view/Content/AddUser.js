Ext.define('Demo.view.Content.AddUser', {
    extend: 'Ext.form.Panel',
    alias: 'widget.AddUser',
    requires: [
        'Ext.form.*'
    ],
    frame: true,
    title: '企业人员添加',
    layout: 'column',
    defaults: {
        anchor: '100%',
        margin: "10" 
    },
    bodyPadding: 5,
    fieldDefaults: {
        msgTarget: 'side',
        labelWidth: 75,
        width: 250
    },
    url: path+'/userinfo/add.htm',
    defaultType: 'textfield',
    initComponent: function () {
        var me = this;
        var sexitem = Ext.create('Ext.data.Store', {
            fields: ['id', 'name'],
            data : [
                {"id":"男", "name":"男"},
                {"id":"女", "name":"女"}
            ]
        });
        var educationItem=Ext.create('Ext.data.Store', {
            fields: ['id', 'name'],
            data : [
                {"id":"小学及以下", "name":"小学及以下"},
                {"id":"初中", "name":"初中"},
                {"id":"高中", "name":"高中"},
                {"id":"中专", "name":"中专"},
                {"id":"大专", "name":"大专"},
                {"id":"本科", "name":"本科"},
                {"id":"研究生", "name":"研究生"},
                {"id":"博士及以上", "name":"博士及以上"}
            ]
        });
        this.items = [
        {
        	xtype: 'fieldset',
            title: '用户基本信息',
            defaultType: 'textfield',
            layout: 'anchor',
            defaults: {
                anchor: '100%'
            },
            items:[
                   {
                	   fieldLabel: '姓名:',
                       name: 'name',
                       allowBlank: false
                    },
                    {
                        xtype: 'combobox',
                        fieldLabel: '学历:',
                        queryMode: 'local',
                        displayField: 'name',
                        valueField: 'id',
                        store: educationItem,
                        name: 'education',
                        emptyText: '请选择',
                        blankText: '请选择',
                        allowBlank: false
                    },
                    {
                        xtype: 'combobox',
                        fieldLabel: '性别:',
                        queryMode: 'local',
                        displayField: 'name',
                        valueField: 'id',
                        store: sexitem,
                        name: 'sex',
                        emptyText: '请选择',
                        blankText: '请选择',
                        allowBlank: false
                    },
                    {
                        fieldLabel: '籍贯',
                        name: 'birthplace',
                        allowBlank: false
                    },
                    {
                    	xtype: 'datefield',
                        fieldLabel: '出生日期',
                        name: 'birthday'
                    },
                    {
                        fieldLabel: '民族',
                        name: 'birthplace',
                        allowBlank: false
                    },
                    {
                    	xtype: 'datefield',
                        fieldLabel: '工作时间',
                        name: 'workdate'
                    },        
                    {
                        fieldLabel: '政治面貌',
                        name: 'politicsStatus'
                    },
                    {
                    	xtype: 'filefield',
                        fieldLabel: '照片',
                        name: 'photo'
                    },
                    {
                    	xtype: 'combobox',
                        fieldLabel: '工作岗位',
                        queryMode: 'local',
                        displayField: 'jobName',
                        valueField: 'id',
                        store: Ext.create('Demo.store.JobStroe'),
                        name: 'jobID',
                        emptyText: '请选择',
                        blankText: '请选择',
                        allowBlank: false
                    }
                 ]
           },{
        	   xtype: 'fieldset',
               title: '用户登录信息设置',
               defaultType: 'textfield',
               layout: 'anchor',
               defaults: {
                   anchor: '100%'
               },
               items: [{
                   fieldLabel: '登录用户名',
                   name: 'userName'
               },{
            	   fieldLabel: '登录密码',
            	   inputType: 'password',
            	   name:'userPass'
               }]
           }
        ];
        this.buttons = [{
            text: '保存',
            handler: function () {
                var form = this.up('form').getForm();
                form.submit({
                    success: function (form, action) {
                        Ext.MessageBox.alert("提示", action.result.msg);
                        form.reset();
                    },
                    failure: function (form, action) {
                        Ext.Msg.alert('提示', action.result.msg);
                    }
                });

            }
        }, {
            text: '清空',
            handler: function () {
                this.up('form').getForm().reset();
            }
        }];
        me.callParent(arguments);
    }
});

