/*
作者：罗文兵
描述：工资组成数据集合
*/
Ext.define('Demo.store.SalaryItemStore', {
    extend: 'Ext.data.Store',
    pageSize: 25,
    autoLoad:true,
    model: 'Demo.model.SalaryItem',
    groupField: 'typeUser',
    proxy: {
        type: 'ajax',
        url:path+'/salaryitem/list.htm',
        reader: {
            type: 'json',
            root: 'rows'
        }
    }
});