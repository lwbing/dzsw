/*
作者：罗文兵
描述：内容信息model
*/
Ext.define('Demo.model.Seller', {
    extend: 'Ext.data.Model',
    fields: ['id', 'headImg','sellerName','loginName','tel','email','status','enable','createTime']
});