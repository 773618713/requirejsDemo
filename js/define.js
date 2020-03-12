/*
定义 define 模块。
['jquery'] 表示引入jquery,并且赋值给变量$。
*/
define(['jquery'], function($){
    console.log("defiine文件");
    console.log($("#inputOne").val());
    return '123';
})