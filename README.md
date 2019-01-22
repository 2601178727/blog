#### 创建目录

##### 下载依赖
> cnpm i egg -S
> cnpm i egg-bin -D

##### 修改配置文件package.json
> "dev": "egg-bin dev"

##### 跑通路由
> 定义app文件夹 —— 默认规则，存放项目代码
> 定义router.js 文件，默认名称，存放路由规则
> 定义controller文件夹 控制器容器

##### 启动
> npm run dev
> 生成public文件夹，存放静态文件
> 生成logs，存放日志
> 生成run,运行文件