1. 块级作用域
let
    基本用法和var相同，但是所声明的变量，只在let命令所在的代码块内有效。 {}
const
    用于声明一个只读的常量，一旦声明，常量的值不能被改变。
var会带来变量提升，即变量可以在声明之前使用。值为undefined
let命令不允许在相同作用域内重复声明一个变量。

var定义的全局变量和全局函数会自动添加为window对象的属性。
但是用let和const定义的全局变量或常量不会自动添加为window的属性。

2. 变量的解构赋值
    ES6允许按照 一定的模式 ，从数组或对象中提取值，对变量进行赋值，这称为解构。

3. 函数扩展
    A， 参数默认值

    B,  rest参数   ...

    C， 箭头函数

4. 对象扩展
   属性
       简洁表示法
        属性名和属性值一样时，可以简化只写属性名
   方法
       简洁表示法
        不用写function

5. set数据结构
   类似于数组，但成员的值是唯一的，不重复。
   Set 是一个构造函数
   let s = new Set();

   操作方法：
     add(v)   -  返回Set本身
     delete(v)  -  返回true | false , 表示删除是否成功
     has(v)    - 返回true | false
     clear()   - 无返回， 全部清空
   遍历：
      for(  ... of ... )
      s.forEach(fn)

6. map数据结构
    类似于对象，也是键值对，但是key类型不限  , 且键不能重复，后面的会覆盖前面的。
    Map是一个构造函数
    let m = new Map();
    m.set(key, value);
    m.get(key);
    m.keys()
    m.values()
    m.delete(key)
    m.clear()
    遍历同set

7. promise对象
   异步编程：
      javascript语言的执行环境是“单线程” single thread
      即一次只能完成一个任务，如果有多个任务需要完成，则必须排队。
      好处：实现简单， 执行环境单纯。
      缺点：只要有一个任务的耗时很长，则后面的任务必须等待。
      为了解决这个问题，javascript将任务的执行模式分为两种：
      同步  （Synchronous）
      异步   (Asynchronous)

      异步模式的情况是，每个任务有一个或多个回调函数，前一个任务结束，不是去执行下一个任务
      而是执行回调函数。而后一个任务也不用等待前一个任务结束就可以执行。程序的执行顺序与
      任务的排列顺序不一致，因此称之为异步。


      异步编程的方案：
        1） 回调函数
        2） promise
            Promise构造函数
             let p = new Promose();
             三种状态： pending, resolved, rejected
             构造函数的参数是一个函数， 该函数又接受两个参数， 这两个参数也是函数， 第一个参数是resolve函数，
             第二个参数是reject函数， 这两个函数由js引擎提供。
             resolve函数的作用是将  pending - > resolved， 同时将成功的结果通过参数返回出去
             reject函数的作用是将   pending - > rejected ， 同时将失败的结果通过参数返回出去。

             promise对象生成之后，用它的then函数可以指定成功或失败的回调 。

ES6的module: (模块)
     ES6支持把一个大的程序分成互相依赖的各个小文件（module），再用简单的方法进行拼装。
     ES6的模块化通过两个命令来实现：
     export命令  （导出）
         export 导出的内容
     import命令   （导入）

     因为当前环境不支持export和import的语法，需要安装es6的编译环境。
     loader:
       babel(相关）
       babel-core
       babel-loader
       babel-preset-env

       本地安装插件：
            cnpm install babel-core babel-loader babel-preset-env --save-dev
       webpack (模块打包机）
          分析项目结构，找到js模块以及其它的一些浏览器不能直接运行的拓展语言（sass, less, es6, typescript等），并
          将其转换和打包为合适的格式供浏览器使用。
          安装webpack:
             全局安装： cnpm install webpack -g
             本地安装： cnpm installl webpack --save-dev
       在webpack.config.js文件中对相关js文件进行插件配置


       1). cnpm init ->  产生 package.json文件
       2). 安装webpack  (全局，本地)
       3). 本地安装babel-core
                    babel-loader
                    babel-preset-env
       4). 编写webpack.config.js文件
       5). 编写一些有export和import的js文件(例如js下的main.js和user.js)
       6). 编写一个引入了编译后的bundle.js的.html文件（例如20.模块测试.html）
       7). webpack -w
       8). 在浏览器预览20.模块测试.html即可。