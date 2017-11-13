/**
 * Created by Administrator on 2017/10/30.
 */

import {username,userage,useraddress} from './user';
import {fn} from './user';//导入函数名
import {fn1} from './user';
import {user} from './user';//导入对象名

import {pn,perAge as pa,myFn,obj,Animal} from './user';
//as用于给导入的内容起别名

//默认导出的名字任意，没有{}括起来
import student from './user';

//导入css文件
import '../css/blue.css';

//导入less文件
import '../less/main.less';

console.log(username,userage,useraddress,fn(),user,fn1(5));//输出内容
console.log(pn,pa,obj);

myFn();//调用函数

let a= new Animal("mouse","类型");//class语法

a.eat();

console.log(student);



