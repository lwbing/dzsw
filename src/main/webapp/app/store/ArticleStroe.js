/*
作者：罗文兵
描述：文章数据集合
*/
Ext.define('Demo.store.ArticleStroe', {
    extend: 'Ext.data.Store',
    autoLoad: true,
    pageSize: 25,
    model: 'Demo.model.Article',
    proxy: {
        type: 'ajax',
        url: '/Article/Index',
        reader: {
            type: 'json',
            root: 'Article',
            totalProperty: 'totalCount'
        }
    }
}) ;