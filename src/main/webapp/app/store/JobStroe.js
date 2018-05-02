/*
作者：罗文兵
描述：企业岗位数据集合
*/
Ext.define('Demo.store.JobStroe', {
    extend: 'Ext.data.Store',
    autoLoad: true,
    pageSize: 25,
    model: 'Demo.model.Job',
    proxy: {
        type: 'ajax',
        url:path+'/job/list.htm',
        reader: {
            type: 'json',
            root: 'rows'
        }
    }
}) ;