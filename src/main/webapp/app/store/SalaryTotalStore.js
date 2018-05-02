﻿/*
作者：罗文兵
描述：企业岗位数据集合
*/
Ext.define('Demo.store.SalaryTotalStore', {
    extend: 'Ext.data.Store',
    autoLoad: true,
    pageSize: 25,
    model: 'Demo.model.SalaryTotal',
    proxy: {
        type: 'ajax',
        url:path+'/salarytotal/list.htm?month=notime',
        reader: {
            type: 'json',
            root: 'rows'
        }
    }
}) ;