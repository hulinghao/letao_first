// 这里放的是公共的js

// 为ajax注册全局事件
// 开始ajax时
$(document).ajaxStart(function () {
    NProgress.start();
})


// ajax结束时
$(document).ajaxStop(function () {
    NProgress.done();
})

if (window.location.href.indexOf("login.html") == -1) {
    // 验证是否登陆
    $.ajax({
        url: '/employee/checkRootLogin',
        success: function (backData) {
            console.log(backData);
            // 如果没有登陆
            if ( backData.error == 400) {
                // 打回登陆页
                window.location.href = './login.html';
            }
        }
    })
}



// 显示 隐藏侧边栏
$('.lt_top a:first').click(function () {
    $('.lt_aside').toggleClass('fullScreen');
    $('.lt_main').toggleClass('fullScreen');
})

// 侧边栏功能实现
/*
    不需要点击切换高亮
    只需要 实现 展开 收起功能即可
*/
$(".menu ol").parent().click(function () {
    console.log('分类按钮');
    $(this).children('ol').slideToggle();
})

// 弹出modal
$(".glyphicon-log-out").click(function (event) {
    event.preventDefault();
    // 弹出modal框
    // 判断页面是否有modal
    $(".modal").modal('show');
})

// 点击modal的确定按钮
$('.modal button.btn-danger').click(function () {
    // 调用登出接口
    $.ajax({
        url: '/employee/employeeLogout',
        success: function (backData) {
            console.log(backData);
            window.location.href = './login.html';
        }
    })

    // 去登陆页
})