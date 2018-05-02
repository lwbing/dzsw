/*
作者：罗文兵
描述：企业岗位数据集合
*/
Ext.define('Demo.store.ItemStore', {
    extend: 'Ext.data.Store',
    autoLoad: true,
    fields: ['id', 'name'],
    proxy: {
        type: 'ajax',
        url: path+'/salaryitem/itemType.htm',
        reader: {
            type: 'json'
        }
    }
}) ;