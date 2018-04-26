Ext.define('Demo.view.Header', {
    extend: 'Ext.Component',
    alias:  'widget.pageHeader',
    initComponent:function(){
    	Ext.applyIf(this, {
            xtype: 'box',
            cls: 'header',
            html: '<div id="header"><h1>企业人事工资管理系统</h1><div>',
            height: 30
        });
        this.callParent(arguments);
    }
});
