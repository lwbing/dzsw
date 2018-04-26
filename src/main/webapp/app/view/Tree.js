Ext.define('Demo.view.Tree', {
    extend: 'Ext.tree.Panel',
    xtype: 'treePanel',
    title: '菜单',
    iconCls:'icon-menu',
    rootVisible: false,
    cls: 'examples-list',
    lines: false,
    useArrows: true,
    store: 'TreeStore'
 });