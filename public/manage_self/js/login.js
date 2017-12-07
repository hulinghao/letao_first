$(function () {
    // 1.初始化表单验证插件
    $('form').bootstrapValidator({
        // 提示的小图标
        feedbackIcons: {
            valid: 'glyphicon glyphicon-ok',
            invalid: 'glyphicon glyphicon-remove',
            validating: 'glyphicon glyphicon-refresh'
        },
        // 指定检验的字段
        fields: {
            // 字段名
            // 用户名
            username: {
                // 规则
                validators: {
                    // 非空
                    notEmpty: {
                        // 提示信息
                        message: "用户名不能为空"
                    },
                    // 字符串长度
                    stringLength: {
                        min: 3,
                        max: 15,
                        message: "用户名的长度必须在3-15之间哦"

                    },
                    callback:{
                        message:'用户名错误'
                    }
                }
            },
            // 密码
            password: {
                // 规则
                validators: {
                    // 非空
                    notEmpty: {
                        // 提示信息
                        message: "密码不能为空"
                    },
                    // 字符串长度
                    stringLength: {
                        min: 3,
                        max: 16,
                        message: "密码的长度必须在3-15之间哦"

                    },
                    callback: {
                        message: "密码错误"
                    }
                }
            }
        }
    }).on('success.form.bv', function (e) {
        e.preventDefault();
        //使用ajax提交逻辑
        console.log('ajax提交数据')
        $.ajax({
            url: '/employee/employeeLogin',
            data: $('form').serialize(),
            type: 'post',
            success: function (backData) {
                // console.log(backData);
                if (backData.success == true) {
                    console.log('登陆成功');
                } else {
                    if (backData.error == 1000) {
                        console.log('用户名错误');
                        $("form").data('bootstrapValidator').updateStatus('username', 'INVALID','callback' );
                    } else if (backData.error == 1001) {
                        console.log('密码错误');
                        $("form").data('bootstrapValidator').updateStatus('password', 'INVALID','callback' );

                    }
                }
            }
        })
    });

    // 绑定重置表单方法
    $('button[type=reset]').click(function () {
        $("form").data('bootstrapValidator').resetForm();
    })
})