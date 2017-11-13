/**
 * Created by Administrator on 2017/10/30.
 */
export let username="Hello World";//导出一个变量
export let userage=20;
export let useraddress="瑞达路";

//导出一个函数
export let fn=()=>5+7;

export let fn1=(x)=>{
    console.log("hi");
    return x+5;
};

//导出一个对象
export let name="张三";
export let age=30;
export let user={
    name:name,
    age:age
};

//可以多个一块导出
let perName="黄五";
let perAge=20;

function myFn(){
    console.log("fn....");
}

let obj={
    name:"李二",
    age:22
};

class Animal{
    constructor(name,type){
        this.name=name;
        this.type=type
    }
    eat(){
        console.log("animal"+this.name+"is eating");
    }
}
export{perName as pn,perAge,myFn,obj,Animal};
//as用于给导出的内容起别名

//默认导入一个对象
export default{
    name:"qq",
    age:"123",
    address:"瑞达路"
}
