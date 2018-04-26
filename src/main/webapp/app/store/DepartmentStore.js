/*
作者：罗文兵
描述：部门数据集合
*/
Ext.define('Demo.store.DepartmentStore', {
    extend: 'Ext.data.Store',
   /* sorters: [{
        property: 'id',
        direction: 'DESC'
    }],*/
    autoLoad: true,
    pageSize: 25,
    model: 'Demo.model.Department',
    proxy: {
        type: 'ajax',
        url:path+'/department/list.htm',
        reader: {
            type: 'json',
            root: 'rows'
        }
    }
}) ;