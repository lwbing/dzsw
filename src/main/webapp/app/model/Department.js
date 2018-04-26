/*
作者：罗文兵
描述：部门描述model
*/
Ext.define('Demo.model.Department', {
    extend: 'Ext.data.Model',
    fields: ['id', 'departmentName', 'officer', 'tel', 'parentID', 'total']
});