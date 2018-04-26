/*
作者：罗文兵
描述：用户数据信息
*/
Ext.define('Demo.store.UserStore', {
    extend: 'Ext.data.Store',
    model: 'Demo.model.UserInfo',
    autoLoad: true,
	pageSize: 20,
    proxy: {
        type: 'ajax',
        url: path+'/userinfo/list.htm?status=1&name=no',
        reader: {
            type: 'json',
            root: 'rows',
            totalProperty:'total'
        }
    }
}) ;