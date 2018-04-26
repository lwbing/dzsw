/*
作者：罗文兵
描述： 考勤信息model
*/
Ext.define('Demo.model.KaoQin', {
    extend: 'Ext.data.Model',
    fields: ['id', 'userID','kqMonth', 'userName', 'departID', 'departName','remark','cdsum','jbsum','kgsum','qjsum','sumMoney','customsum1']
});