Ext.define('Demo.controller.UserController', {
    extend: 'Ext.app.Controller',
//    views: [ 'user.AddUser','user.UserList'],
//    stores: ['Users'],
//    models:['User'],
    refs: [{
        ref: 'pages',
        selector: '#pagesPanel'
    }],
    init: function () {
        this.control({
            'treepanel': {
                'click': this.changePage
            }
        });
    },
    //点击树形节点  切换页面
    changePage: function (me, rec, item, index, e) {
        var pagesPanel = this.getPages(),
    	    parentNode = rec.parentNode,//得到父节点
    		path = rec.get('name'),//得到当前节点name的值
    		text = rec.get('text'),//得到当前节点text的值
    		page;

        //如果点击的节点为非叶子节点，则不作任何操作
        if (!rec.isLeaf()) {
            return;
        }
        //设置pagesPanel的title为所点击节点的text值
        pagesPanel.setTitle(text);

        //根据节点的name属性，获取所要显示页面的路径
        if(parentNode && parentNode.get('name') != "root") {
            path = parentNode.get('name') + '.' + Ext.String.capitalize(path);
            parentNode = parentNode.parentNode;
        }
        path = 'Demo.view.' + path;
        page = Ext.create(path);
        pagesPanel.removeAll();
        pagesPanel.add(page);
    }
});