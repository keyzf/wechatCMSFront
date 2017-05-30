/**
 * Created by wangjiang on 17/5/30.
 */

var Mock = require('mockjs')

// 设置响应时间
Mock.setup({
    timeout: 600
})

var data = Mock.mock('/login/', {
    username:'admin',
    password:'admin',
    success: true
})

//var data = Mock.mock('/login/', {
//    // 属性 list 的值是一个数组，其中含有 1 到 10 个元素
//    'list|1-10': [{
//        // 属性 id 是一个自增数，起始值为 1，每次增 1
//        'id|+1': 1
//    }]
//})
// 输出结果
//console.log(JSON.stringify(data, null, 4))