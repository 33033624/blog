module.exports = function(name){
    /*
    * 读取环境变量中的debug值 如果和自己的名字一样输出msg值  否则什么都不做
    *
    * */
     return function(msg){
         /*if(process.env.DEBUG==name){//判断我们的环境变量中的DEBUG值是否跟我们输入的name值一直  如果一致的话就输出我们的日志 也就是打印一些相关信息*/
             var debug = process.env.DEBUG;//先获取环境变量的DEBUG值
             debug = '^'+debug.replace('*','.*');//进行字符串替换
             var regex = new RegExp(debug);
             if(regex.test(name))
             console.log(name,msg);
         };
    /* }*/


};