/*
作者：罗文兵
描述：合同信息model
*/
Ext.define('Demo.model.HeTong', {
    extend: 'Ext.data.Model',
    fields: ['id', 'hno', 'userID', 'userName', 'departName','syStartTime','syEndTime','syCost','cost','sqStartTime','sqEndTime','age','bz','htPath']
});