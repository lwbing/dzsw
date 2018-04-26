/*
作者：罗文兵
描述：出差描述model
*/
Ext.define('Demo.model.ChuChai', {
    extend: 'Ext.data.Model',
    fields: ['id', 'userID', 'userName', 'departID', 'departName', 'reason','address','startTime','endTime','cost','status','pzr']
});