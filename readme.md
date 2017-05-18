#我的个人博客

项目被改造了一半，由于临近毕业，面临**毕业答辩**的压力，所以尚未完成。项目已经完成的部分有：

1. 页面设计
2. react静态页面部分编写
3. react-router-dom页面部分实现（不过当时路由规划不合理，需要结合redux改进）
4. laravle restful接口编写

项目尚未完成的部分有：
1. redux状态机的编写
2. redux-fetch中间件的编写

运行项目在根目录下执行：
```
    laravle install
    npm install
    webpack
    php -S localhost:80 -t public
```

目前可以使用的域名有：
1. http://localhost
2. http://localhost/article
3. http://localhost/article/type/{type}
4. http://localhost/article/id/{id}
