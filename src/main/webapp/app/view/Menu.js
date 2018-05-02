Ext.define('Demo.view.Menu',{
	extend: 'Ext.menu.Menu',
	xtype: 'Menu',
	requires:['Demo.view.Edit'],
	items:[{
		text:'编辑',
		action: 'edit'
	},{
		text:'添加',
		action: 'add'
	},{
		text: '删除',
		action: 'del'
	}]
});