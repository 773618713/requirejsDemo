/*
这里是requirejs的配置。
paths中存放的是js文件的别名。
*/
requirejs.config({
    baseUrl: 'js/',
    paths: {
    	'jquery':'jquery/2.2.4/jquery.min',
        'definejs': 'define'
    },
    shim: {

    }
});

/*
['definejs'] 表示 这里可以引入definejs模块。
	definejs是define.js文件定义在paths中的别名。
	这里也可以用js文件路径代替别名。

defineObj 表示 define 模块的返回值。
*/
require(['definejs'],function(defineObj){
    console.log("appjs文件");
    console.log("defineObj=" + defineObj);
})