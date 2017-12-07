// 这里放的是公共的js

// 为ajax注册全局事件
// 开始ajax时
$(document).ajaxStart(function(){
    NProgress.start();
})


// ajax结束时
$(document).ajaxStop(function(){
    NProgress.done();
})

