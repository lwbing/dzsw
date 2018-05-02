Ext.define('Demo.view.Footer', {
    extend: 'Ext.Toolbar',
    alias: 'widget.pageFooter', 
    ui   : 'sencha',
    height: 23,
    initComponent:function(){
        var me=this;
        Ext.applyIf(me,{
        	 items:["当前用户：Admin",'->',"技术支持:<a href='http://www.lwbing.com' target='_blank' style='text-decoration:none;'><font color='#0000FF'>http://www.lwbing.com</font></a>&nbsp;&nbsp;"]
        });
        me.callParent(arguments);
    }
});