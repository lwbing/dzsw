Ext.define('Demo.view.Viewport', {
	extend: 'Ext.container.Viewport',
	layout: 'border',
    defaults:{
        border: false
    },
    items:[{
        region: 'north',
        xtype: 'pageHeader'
    },{
    	region: 'west',
    	xtype: 'treePanel',
        split:true,
        collapsible : true,
        border: true,
        margin: '2 0 0 3',
    	width: 250
    },{
    	region: 'center',
    	margin: '2 0 0 3',
    	split: true,
    	border: true,
        flex: 1,
        title: '&nbsp;',
        id   : 'pagesPanel',
        layout: {
            type: 'fit',
            align: 'center',
            pack: 'center'
        },
        overflowY: 'auto',
        bodyPadding: 0
    },{
    	region: 'south',
        xtype: 'pageFooter'
    }]
});