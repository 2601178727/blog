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

##### 创建配置文件
> 创建config文件夹
> 新建config.default.js文件
> exports.keys = 'storage'; 加密cookie

##### 启动
> npm run dev
> 生成public文件夹，存放静态文件
> 生成logs，存放日志
> 生成run,运行文件

##### 实现爬虫

###### 后端渲染
> cnpm i egg-view-ejs -S -D // 为egg.js 提供渲染功能
> config文件夹下 添加plugin.js 配置插件
> config.default.js 添加引擎配置
> 添加模板文件夹 view


###### 模板语法
```
<%
  news.forEach(item => { %>
    <li class="list-group-item">
      <a href="<%=item.url%>">
        <%=item.title%>
      </a>
    </li>
  <% })
%>
```
> JS部分用<% %>包起来