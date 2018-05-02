/*
作者：罗文兵
描述：企业人员信息描述model
*/
Ext.define('Demo.model.UserInfo', {
    extend: 'Ext.data.Model',
    fields: ['id', 'name', 'sex', 'age', 'education', 'birthday','workdate','birthplace','politicsStatus','nationality','photo','jobID']
});