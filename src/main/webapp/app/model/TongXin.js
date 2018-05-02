/*
作者：罗文兵
描述： 企业人员通信录信息model
*/
Ext.define('Demo.model.TongXin', {
    extend: 'Ext.data.Model',
    fields: ['id','userID', 'userName','depart', 'tel', 'mobile', 'qq','email','job']
});