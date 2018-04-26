Ext.Loader.setConfig({
    enabled: true,
    paths: { 
    	'Ext.ux' : '/ext-4.1/ux',
    	'Ext.app':'/app'
    	}
});
Ext.onReady(function(){
    Ext.application({
        name: 'Demo',
        //appFolder: '/app',
        autoCreateViewport: true,
        controllers: [
            'Controller',
            'UserController'
        ]
    });
});
