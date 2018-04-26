/*
作者：罗文兵
描述：企业岗位数据集合
*/
Ext.define('Demo.store.SellerStore', {
    extend: 'Ext.data.Store',
    autoLoad: true,
    pageSize: 25,
    model: 'Demo.model.Seller',
    proxy: {
        type: 'ajax',
        url:'/seller/list',
        reader: {
            type: 'json',
            root: 'rows'
        }
    }
}) ;