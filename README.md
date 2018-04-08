# simple-egg
egg 的一个简单实现

###environment

linux npm 

###start

```shell
git clone ..
cd egg-example
npm i 
npm run dev
```

目录如下

```shell
── egg-example
   ├── app
   │   ├── controller
   │   │   └── news.js
   │   ├── middleware
   │   │   └── robot.js
   │   ├── router.js
   │   └── service
   │       └── news.js
   ├── app.js
   ├── config
   │   └── config.default.js
   ├── node_modules
   │   ├── .bin
   │   │   └── egg-bin
   │   └── egg
   │       ├── egg.js
   │       ├── egg_loader.js
   │       └── package.json
   └── package.json

```

核心目录就在 node_modules 下面的 .bin 隐藏目录和 egg目录。

可以看到三个主要文件 egg-bin, egg.js, egg_loder.js . 三个加起来 180 行代码。



### 执行流程

程序入口

```javascript
// egg-example/package.json
{
  "name": "example",
  "version": "1.0.0",
  "scripts": {
    "dev": "egg-bin dev"
  },
  "dependencies": {
    "koa": "^2.5.0",
    "koa-router": "^7.4.0"
  }
}
```

由于`node_modules/.bin/`目录会在运行时加入系统的 PATH 变量，因此在运行 npm 时，就可以不带路径，直接通过命令来调用这些脚本。 所以我们可以直接 npm run dev.

这里 npm run dev 会找到 .bin 目录下载的 egg-bin。 有了入口就可以看源码了。 ( window 下面不能运行，)。

其中比较难的就是 controller 和 service 的 this 传递。只要记住这两个基本都是 app.context 就行。