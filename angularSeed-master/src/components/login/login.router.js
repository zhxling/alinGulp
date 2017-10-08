// import LoginTpl from './login.html' //模板 用webpack的raw-loader加载成文本字符串，具体配置看

let LoginRoute = {
    template    :  '<login></login>',
    url         :  '/login',
    controller  :  'LoginCtrl',  //这里只是写了一个字符串
    resolve: {
        load: ['$q','$ocLazyLoad',function ($q,$ocLazyLoad) {
            return $q((resolve) => {
                //下面这一行写法是webpack在需要的时候才下载依赖的模块，[具体看这里][2]
                require.ensure([], () => {
                    //这里只是依赖了一个控制器文件，但是这个文件里面你可以import很多其他的依赖
                    let module = require('./index'); 
                    console.log(module);
                    
                    //加载模块名为xxx.bg.login的模块，具体是什么作用没弄明白，请高手解答
                    $ocLazyLoad.load({name: 'login'}); 
                    
                    //promise 的成功回调，不返回出去参数也没关系，因为在login.contorller.js里面已经注册了LoginCtrl
                    resolve('loginCtrl'); 
                });
            });
        }]
    }
};
export default LoginRoute;