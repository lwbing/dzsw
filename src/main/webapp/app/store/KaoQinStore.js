/*
作者：罗文兵
描述：企业岗位数据集合
*/
Ext.define('Demo.store.KaoQinStore', {
    extend: 'Ext.data.Store',
    autoLoad: true,
    pageSize: 25,
    model: 'Demo.model.KaoQin',
    proxy: {
        type: 'ajax',
        url:path+'/kaoqin/list.htm?month=0',
        reader: {
            type: 'json',
            root: 'rows'
        }
    }
}) ;