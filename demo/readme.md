## 安装nodejs

## 开发环境运行

``` lang=bash
npm install -g webpack webpack-dev-server protractor
npm install
npm run serve
```


## 生产环境打包

``` lang=bash
npm install -g webpack webpack-dev-server protractor
npm install
npm run build

如果想在本地测试运行打包后的文件，可继续执行以下步骤
npm run start
```


## 执行单元测试

``` lang=bash
npm run test
如果想自动执行单元测试，运行
npm run test:watch
```

## 执行e2e测试

``` lang=bash
先执行
npm run webdriver-start

执行完之后,再另开一个窗口执行
npm run e2e
```

## 项目中使用的相关主要插件说明

```
 - [x] 使用[extract-text-webpack-plugin](https://github.com/webpack-contrib/extract-text-webpack-plugin)提取共用的JS类库文件
 - [x] 使用[html-webpack-plugin](https://github.com/jantimon/html-webpack-plugin)生成html，模版文件在src/index.html
 - [x] 使用[ng-annotate-webpack-plugin](https://github.com/jeffling/ng-annotate-webpack-plugin) 自动注入注解插件,解决angularjs压缩混淆无法找到provider问题
 - [x] 使用[webpack-dev-server](https://github.com/webpack/webpack-dev-server) 方便热加载
 - [x] 使用[easy-mock](https://github.com/easy-mock/easy-mock) 提供的服务模拟数据
 - [x] 使用[angular-loading-bar](https://github.com/chieffancypants/angular-loading-bar) 当发生请求顶部显示加载动画
 - [x] 使用[oclazyload](https://oclazyload.readme.io) 实现按需加载组件
 - [x] 使用[angular-ui-router](https://github.com/angular-ui/ui-router/wiki) 项目中用到的路由组件
```
## 目录结构说明

```
angular1.x-es6-oclazyLoad-webpack3.6-seed
├── dist                                                    # webpack线上发布结果
├── .tmp                                                    # webpack本地编译结果
├── node_modules      　　                                    # node引用包
├── bower_components                                        # bower引用组件
├── test                                                    # 测试相关
│    ├── e2e                                                # UI端对端测试
│    │   └── helper.js                                      # UI端对端测试公共处理文件
│    └── unit                                               #　单元测试
│    │   └── helper.js                                      # 单元测试入口文件
├── src                                                     # 项目源文件
│    ├── app                                                # 应用
│    │   ├── assets                                         # 静态资源
│    │   │   ├── images        　　　　                         # 资源图片
│    │   │   ├── data                                       # 静态数据
│    │   │   └── fonts                                      # 字体文件
│    │   ├── components                                     # 通用组件
│    │   │   ├── layout                                     # 布局模块
│    │   │   └── loading                                    # 加载模块
│    │   ├── directives                                     # 通用指令
│    │   │    └── index.js                                  # 指令模块定义入口文件
│    │   ├── filters                                        # 通用过滤器
│    │   │    └── index.js                                  # 过滤器模块定义入口文件
│    │   ├── services                                       # 通用服务
│    │   │    ├── auth.service.js                           # 权限验证服务
│    │   │    ├── event.constant.js                         # 全局事件常量定义
│    │   │    ├── http-interceptor.service.js               # http拦截服务
│    │   │    ├── identity.service.js                       # 身份验证服务
│    │   │    ├── router-helper.provider.js                 # 路由统一处理注入服务
│    │   │    └── index.js                                  # 服务模块定义入口文件
│    │   ├── less                                           # 公共less
│    │   │    ├── bootstarp.less                            # bootstarp的引入文件
│    │   │    ├── bootstarp.variables.less                  # bootstarp的的公共变量定义
│    │   │    ├── style.less                                # 自定义公共less文件
│    │   │    └── variables.less                            # 自定义公共变量
│    │   └── modules                                        # 系统功能模块
│    │       ├── login                                      # 登录
│    │       └── user                                       # 用户
│    ├── config.js                                          #　http请求的baseUrl配置文件
│    ├── favicon.ico                                        #　标签图标
│    ├── index.js　                                          # 入口文件,注入组件
│    └── index.html                                         #　首页
├── .babelrc                                                # babel配置文件
├── .eslintrc.json                                          # eslint配置文件
├── karma.conf.js                                           # 单元测试配置文件
├── .gitignore                                              # git忽略提交配置文件
├── package.json                                            # npm安装包配置文件
├── postcss.config.js                                       # postcss处理css的配置文件，如给css加浏览器前缀
├── protractor.configconfig.js                              # e2e测试配置文件
├── readme.md                                               # 项目说明文件
├── webpack.base.conf.js                                    # webpack开发环境和生产环境中通用的配置文件
├── webpack.dev.conf.js                                     # webpack开发环境打包配置文件
└── webpack.config.js                                       # webpack生产环境打包配置文件
```