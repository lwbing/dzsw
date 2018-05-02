/*
作者：罗文兵
描述：企业岗位数据集合
*/
Ext.define('Demo.store.NotePadStore', {
    extend: 'Ext.data.Store',
    autoLoad: true,
    pageSize: 25,
    model: 'Demo.model.NotePad',
    proxy: {
        type: 'ajax',
        url:path+'/notepad/list.htm',
        reader: {
            type: 'json',
            root: 'rows'
        }
    }
}) ;