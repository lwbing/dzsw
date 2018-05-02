/*
作者：罗文兵
描述：文章数据集合
*/
Ext.define('Demo.store.ChuChaiStore', {
    extend: 'Ext.data.Store',
    autoLoad: true,
    pageSize: 25,
    model: 'Demo.model.ChuChai',
    proxy: {
        type: 'ajax',
        url: path+'/chuchai/list.htm?startTime=no&endTime=no',
        reader: {
            type: 'json',
            root: 'rows',
            totalProperty:'total'
        }
    }
});