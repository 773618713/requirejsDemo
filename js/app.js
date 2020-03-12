/*
这里是requirejs的配置。

require.config() 是用于配置参数的核心方法，它接收一个有固定格式与属性的对象作为参数，这个对象便是我们的配置对象。
在配置对象中 baseUrl 定义了基准目录，它会与 paths中模块的地址自动进行拼接，构成该模块的实际地址，
并且当配置参数是通过script标签嵌入到html文件中时，baseUrl默认的指向路径就是该html文件所处的地址。

paths中存放的是js文件的别名。
paths 属性的值也是一个对象，该对象保存的就是模块key/value值。其中key便是模块的名称与ID，一般使用文件名来命名，而value则是模块的地址，
在requireJS中，当模块是一个JS文件时，是可以省略 .js 的扩展名，比如 “index.js” 就可以直接写成 “index” 
而当定义的模块不需要与 baseUrl 的值进行拼接时，可以通过 "/" 与 http:// 以及 .js 的形式来绕过 baseUrl的设定。

baseUrl表示所有js文件的根目录。
通过 data-main 去加载入口文件，便会使配置对象中的 baseUrl 属性默认指向地址改为 app.js 所在的位置。
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