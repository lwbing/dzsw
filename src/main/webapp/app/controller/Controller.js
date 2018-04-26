/*
	作者：罗文兵
	URL：http://www.itlee.name
*/
Ext.define('Demo.controller.Controller', {
    extend: 'Ext.app.Controller',
    views:['Viewport','Header','Footer','Tree'],
    stores: ['TreeStore'],
    
    refs:[{
    	ref:'pages',
    	selector:'#pagesPanel'
    }],

    init:function(){
    	this.control({
	    	'treepanel':{
	    		'select': this.changePage,
                'itemcontextmenu': this.showContextMenu
	    	},
            'Menu [action=edit]': {
                'click': this.editNode
            },
            'menu [action=add]':{
                'click': this.addNode
            },
            'menu [action=del]':{
                'click': this.delNode
            },
            'Edit [action=submit]':{
                'click': this.saveNodeText
            }
    	});
    },

    //提交表单 更新节点信息
    saveNodeText:function(me,e){
        var form  = me.up().up(),
            //node是点击右键的时候传递过来的待修改节点信息
            node  = form.up().node,
            //获取新的节点名称
            value = form.getForm().findField('node').getValue();

        //设置节点名称为修改后名称
        node.set({text:value});
        //修改完成之后隐藏弹出框
        form.up().hide();
    },

    //编辑节点信息
    editNode:function(me,e){
        var node = me.up().node,
            //继续在页面之间传递 操作节点的信息
            edit = Ext.create('Demo.view.Edit',{
                node: node
            });
        //用原节点的名称填充表单信息
        edit.down('form').getForm().findField('node').setValue(node.get('text'));
        edit.show();
    },

    addNode:function(me,e){
        Ext.Msg.alert('提示','您点击的是添加按钮...');
    },

    delNode:function(me,e){
        Ext.Msg.alert('提示','您点击的是删除按钮...');
    },

    //点击右键 显示右键菜单
    showContextMenu:function(me,rec,item,index,e){
        //将tree节点的数据传给menu，实现页面之间参数的传递
        var menu = Ext.create('Demo.view.Menu',{
            node:rec
        });

        //阻止浏览器默认右键事件
        e.preventDefault();
        e.stopEvent();

        menu.showAt(e.getXY());
    },

    //点击树形节点  切换页面
    changePage:function(me,rec,item,index,e){
    	var pagesPanel = this.getPages(),
    	    parentNode = rec.parentNode,
    		path = rec.get('name'),
    		text = rec.get('text'),
    		page;

    	//如果点击的节点为非叶子节点，则不作任何操作
    	if(!rec.isLeaf()){
    		return;
    	}

    	//设置pagesPanel的title为所点击节点的text值
    	pagesPanel.setTitle(text);

    	//根据节点的name属性，获取所要显示页面的路径
    	while(parentNode && parentNode.get('name') != "root") {
            path = parentNode.get('name') + '.' + Ext.String.capitalize(path);
            parentNode = parentNode.parentNode;
        }
        path = 'Demo.view.'+path;     //   pages.

    	page = Ext.create(path);
    	pagesPanel.removeAll();
    	pagesPanel.add(page);
    }
});