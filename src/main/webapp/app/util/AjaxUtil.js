Ext.define("Demo.util.AjaxUtil", {
	alias:"AjaxUtil",
	config: {
    },
    constructor: function (config) {
        this.initConfig(config);
    },
	deleteObject: function (url,param) {
        Ext.Ajax.request({
            url: url,
            method: 'POST',
            params: param,
            success: function (response) {
                var text = response.responseText;
                var responseArray = Ext.JSON.decode(text);
                if (responseArray.success) {
                    Ext.MessageBox.show({ title: "提示", msg: responseArray.msg });
                } else {
                    Ext.MessageBox.show({ title: "提示", msg: responseArray.msg });
                }
            },
            failure: function (response) {
                Ext.MessageBox.show({ title: "提示", msg: "删除失败!" });
            }
        });
    },
    getObject:function(url,para){
    	Ext.Ajax.request({
            url: url,
            method: 'GET',
            params: para,
            success: function (response) {
                var text = response.responseText;
                var obj = Ext.JSON.decode(text);
                return obj;
                //edit.getForm().findField("Contents").setValue(model.Contents);
            },
            failure: function (response) {
                Ext.MessageBox.show({ title: "提示", msg: "数据加载失败!" });
            }
        });
    }
});