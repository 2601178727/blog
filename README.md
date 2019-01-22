# blog

##### 本地建立远程跟踪

```
echo "# blog" >> README.md
git init
git add README.md
git commit -m "first commit"
git remote add origin https://github.com/2601178727/blog.git
git push -u origin master
```



##### 提供后端接口

```
cnpm i egg-init -g
egg-init  blog-api --type simple // simple代表最简单的项目
cd zhufengpeixunblog-api
cnpm i 
```

