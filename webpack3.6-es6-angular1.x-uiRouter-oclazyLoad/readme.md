## 运行 How to run
安装nodejs

``` lang=bash
npm install -g bower webpack webpack-dev-server --save-dev
npm install
npm run serve


- [x] 使用[extract-text-webpack-plugin](https://github.com/webpack-contrib/extract-text-webpack-plugin)提取共用的JS类库文件
 - [x] 使用[html-webpack-plugin](https://github.com/jantimon/html-webpack-plugin)生成html，模版文件在src/index.template.html
 - [x] 使用[webpack-dev-server](https://github.com/webpack/webpack-dev-server)，方便热加载
 - [x] 使用[easy-mock](https://github.com/easy-mock/easy-mock)提供的服务模拟数据
 - [x] 使用[angular-loading-bar](https://github.com/chieffancypants/angular-loading-bar)当发生请求顶部显示加载动画
 - [x] 封装localStorage
 - [x] 修复登录问题
 - [ ] common模块转ES6模块规范
```
## 目录结构说明

```
angular1.x-es6-oclazyLoad-webpack3.6-seed
├── dist                             # webpack线上发布结果
├── .tmp                             # webpack本地编译结果
├── node_modules      　　             # node引用包
├── bower_components                 # bower引用组件
├── src                              # 项目源文件
│    ├── app                         # 应用
│    │   ├── assets                  # 静态资源
│    │   │   ├── images        　　　　  # 资源图片
│    │   │   ├── data                # 静态数据
│    │   │   └── fonts               # 字体文件
│    │   ├── components              # 通用组件
│    │   │   └── common              # 首页通用html模块
│    │   ├── directives              # 通用指令
│    │   ├── filters                 # 通用过滤器
│    │   ├── services                # 通用服务
│    │   ├── less                    # 路由定义文件
│    │   ├── router                  # 路由配置
│    │   │   └── index.js            # 路由配置文件
│    │   ├── utils                   # 工具类模块
│    │   └── modules                 # 系统功能模块
│    │       ├── login               # 登录
│    │       └── user                # 用户
│    ├── favicon.ico                 #　标签图标
│    ├── index.js　                   # 入口文件,注入组件
│    └── index.html                  #　首页
├── .babelrc                         # babel配置文件
├── .eslintrc.json                   # eslint配置文件
├── .gitignore                       # git忽略提交配置文件
├── package.json                     # npm安装包配置文件
├── readme.md                        # 项目说明文件
├── webpack.dev.conf.js              # webpack开发环境打包配置文件
└── webpack.conf.js                  # webpack生产环境打包配置文件
```

## Thanks

* https://github.com/angular-ui/ui-router/wiki
* https://oclazyload.readme.io
* http://michalzalecki.com/lazy-load-angularjs-with-webpack/