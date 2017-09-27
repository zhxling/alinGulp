var routes = [
    {title: '用户管理', state: 'user', parent: 'index', url: '/user', template: '<div ui-view></div>', abstract: true},
    {title: '基本信息', state: 'user.setting', parent: 'user', url: '/setting', templateUrl: 'user/setting.html'},
    {title: '用户通知', state: 'user.notifications', parent: 'user', url: '/notifications', templateUrl: 'user/notifications.html'},
    {title: '创建项目', state: 'creatProject', parent: 'index', url: '/creatProject', template: '<div ui-view></div>', abstract: true},
    {title: '资质管理', state: 'creatProject.qualifications', parent: 'creatProject', url: '/qualifications', template: '<div ui-view></div>'},
    {title: '广告主资质管理', state: 'creatProject.qualifications.advertiser', parent: 'creatProject.qualifications',
        url: '/advertiser', templateUrl: 'creatProject/qualifications/advertiser.html'},
    {title: '素材管理', state: 'creatProject.material', parent: 'creatProject', url: '/material', template: '<div ui-view></div>'},
    {title: '预算管理', state: 'creatProject.budget', parent: 'creatProject', url: '/budget', template: '<div ui-view></div>'},
    {title: '投放管理', state: 'creatProject.delivery', parent: 'creatProject', url: '/delivery', template: '<div ui-view></div>'}
]