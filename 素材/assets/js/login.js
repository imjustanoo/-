$(function () {
    $('#reg').on('click', function () {
        $('.login').hide()
        $('.reg').show()
        $('.reg_box').show()
    })

    $('#login').on('click', function () {
        $('.login').show()
        $('.reg').hide()
    })

    var form = layui.form
    form.verify({
        pwd: [
            /^[\S]{6,12}$/
            , '密码必须6到12位，且不能出现空格'
        ]
    })
})