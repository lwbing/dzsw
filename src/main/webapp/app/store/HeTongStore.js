/*
作者：罗文兵
描述：企业岗位数据集合
*/
Ext.define('Demo.store.HeTongStore', {
    extend: 'Ext.data.Store',
    autoLoad: true,
    pageSize: 25,
    model: 'Demo.model.HeTong',
    proxy: {
        type: 'ajax',
        url:path+'/hetong/list.htm?status=1',
        reader: {
            type: 'json',
            root: 'rows',
            totalProperty: 'total'
        }
    }
}) ;