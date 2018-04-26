/*
作者：罗文兵
描述： 考勤信息model
*/
Ext.define('Demo.model.PeiXun', {
    extend: 'Ext.data.Model',
    fields: ['id','pno', 'pname','person', 'address', 'bz', 'company','pcontent','cost','startDate','endDate']
});