/*
作者：罗文兵
描述：企业岗位数据集合
*/
Ext.define('Demo.store.TongXinStore', {
    extend: 'Ext.data.Store',
    autoLoad: true,
    pageSize: 25,
    model: 'Demo.model.TongXin',
    proxy: {
        type: 'ajax',
        url:path+'/tongxin/list.htm',
        reader: {
            type: 'json',
            root: 'rows'
        }
    }
}) ;