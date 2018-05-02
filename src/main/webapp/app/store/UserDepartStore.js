/*
作者：罗文兵
描述：用户数据信息
*/
Ext.define('Demo.store.UserDepartStore', {
    extend: 'Ext.data.Store',
    model: 'Demo.model.UserDepart',
    //autoLoad: true,
    proxy: {
        type: 'ajax',
        url: path+'/user/list.htm',
        reader: {
            type: 'json',
            root: 'rows'
        }
    }
}) ;