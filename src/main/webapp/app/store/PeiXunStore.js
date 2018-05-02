/*
作者：罗文兵
描述：企业培训管理信息
*/
Ext.define('Demo.store.PeiXunStore', {
    extend: 'Ext.data.Store',
    autoLoad: true,
    pageSize: 25,
    model: 'Demo.model.PeiXun',
    proxy: {
        type: 'ajax',
        url:path+'/peixun/list.htm?startTime=no&endTime=no',
        reader: {
            type: 'json',
            root: 'rows'
        }
    }
}) ;