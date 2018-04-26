Ext.define('Demo.view.JiShu.Show', {
	extend: 'Ext.Component',
	alias: 'widget.jishushow',
	initComponent:function(){
		Ext.applyIf(this, {
            xtype: 'box',
            cls: 'header',
            bodyPadding: 5,
            html: '<div style="border:1px solid #cdefff; width:450px;margin:20px auto;padding:15px;line-height:40px;font-size: 16px;color: #4cc3fa;"><center><h2>企业单位人事工资管理系统</h2></center><p>联系电话：13619625274</p><p>QQ:961900371、577140656</p><p>电子邮件：96190071@qq.cpm</p><p>在线咨询:http://www.16319.org</p><p>在线使用教程:http://www.16319.org/Product/155.html</p><div>',
            height: 30
        });
        this.callParent(arguments);
    }
});

