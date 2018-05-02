/*
作者：罗文兵
描述：出差管理view
*/
Ext.define('Demo.view.zonghe.combosearch', {
    extend: 'Ext.form.field.ComboBox',
    alias: 'widget.combosearch',
    bodyPadding: 5,
    displayField: 'userName',
    typeAhead: false,
    hideLabel: true,
    hideTrigger:true,
    anchor: '100%',
    width:400,
    minChars : 2,
    pageSize:10,
    initComponent: function () {
        var me = this;  
        var tongxinStore = Ext.create('Demo.store.UserDepartStore');
        var val=encodeURI(encodeURI(me.getValue()));
        this.store = tongxinStore.load({ params: { query:val } });
        this.listConfig={
            loadingText: 'Searching...',
            emptyText: '没有查找到匹配的项...',
            getInnerTpl: function() {
                return '<a class="search-item" href="http://www.sencha.com/forum/showthread.php?t={topicId}&p={id}">' +
                    '<h3><span>{[Ext.Date.format(values.lastPost, "M j, Y")]}<br />by {author}</span>{userName}</h3>' +
                    '{departName}' +
                '</a>';
            }
        };
        this.callParent(arguments);
    }
});

