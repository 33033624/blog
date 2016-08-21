//可用于一些调试信息   debug只要是判断环境变量中的值是否是我们开发环境和应用环境  例如开发环境下我们会打印信息  但是上线的时候就不需要打印了
var debug = require('./debug');

//传入一个名字可以得到对应的日志记录器
var loggerServer = debug('logger:server');
//调用此函数在控制台输出日志
//输出的时候，会用此日志记录器的名字和环境变量中DEBUG的值进行比较，如果相同 则输出到控制台 如果不相同则不输出任何东西
loggerServer('server');
var loggerClient = debug('logger:client');
loggerClient('client');