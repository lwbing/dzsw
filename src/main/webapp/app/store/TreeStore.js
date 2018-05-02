Ext.define('Demo.store.TreeStore', {
    extend: 'Ext.data.TreeStore',
    fields: ['text', 'name'],
    root: {
        expanded: true,
        name: 'root',
        children: [
            {
                text: '人事管理',
                expanded: true,
                name: 'Content',
                children: [
                    { leaf: true, text: '人事档案', name: 'UserInfoList' },
                    { leaf: true, text: '考勤管理', name: 'KaoQinList' },
                    { leaf: true, text: '培训管理', name: 'PeiXunList' },
                    { leaf: true, text: '企业岗位', name: 'JobList' }
                ]
            },
            {
                text: '工资管理',
                expanded: true,
                name: 'salary',
                children: [
                    { leaf: true, text: '工资组成项', name: 'SalaryItemList' },
                    { leaf: true, text: '工资表管理', name: 'SalaryTotalList' },
                    { 
                    	text: '工资表汇总',
                    	expanded: true, 
                    	name: 'list',
                    	children:[
                    	          {leaf: true, text: '部门工资汇总表', name: ''},
                    	          {leaf: true, text: '部门工资年报', name: ''},
                    	          {leaf: true, text: '部门工资年报', name: ''}
                    	          ]
                    }
                ]
            },
            {
                text: '综合管理',
                expanded: true,
                name: 'zonghe',
                children: [
                    { leaf: true, text: '部门管理', name: 'DepartmentList' },
                    { leaf: true, text: '合同管理', name: 'HeTongList' },
                    { leaf: true,text: '出差管理',  name: 'ChuChaiList'}
                ]
            },
            {
                text: '常用信息',
                expanded: true,
                name: 'zonghe',
                children: [
                    { leaf: true, text: '通信录', name: 'TongXinList' },
                    { leaf: true, text: '记事本', name: 'NotePadList' },
                    {
                    	text: '邮件', 
                        expanded: false, 
                        name: 'Emial',
                        children:[
 									{leaf: true, text: '收件箱', name: ''},
 									{leaf: true, text: '已发邮件', name: ''},
 									{leaf: true, text: '草稿箱', name: ''}
                                  ] 
                     }
                ]
            },
            {
                text: '系统管理',
                expanded: true,
                name: 'System',
                children: [
                    { leaf: true, text: '系统数据备份', name: 'Add' },
                    { leaf: true, text: '管理人员设置', name: 'LinkList' },
                    { leaf: true, text: '权限管理', name: 'LinkList' },
                    { leaf: true, text: '登录密码设置', name: 'LinkList' }
                ]
            },
            {
                text: '店铺管理',
                expanded: true,
                name: 'shop',
                children: [
                    { leaf: true, text: '商家列表', name: 'sellers' },
                    { leaf: true, text: '管理人员设置', name: 'LinkList' },
                    { leaf: true, text: '权限管理', name: 'LinkList' },
                    { leaf: true, text: '登录密码设置', name: 'LinkList' }
                ]
            },
            {
                text: '技术支持',
                expanded: true,
                name: 'JiShu',
                children: [
                    { leaf: true, text: '技术支持', name: 'Show' }
                ]
            }
        ]
    }
});
