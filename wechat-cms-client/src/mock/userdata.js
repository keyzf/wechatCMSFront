/**
 * Created by wangjiang on 17/5/30.
 */

var Mock = require('mockjs')

// 设置响应时间
Mock.setup({
    timeout: '1000-2000'
})


var Random = Mock.Random
Random.extend({
    constellation: function(date) {
        var constellations = ['白羊座', '金牛座', '双子座', '巨蟹座', '狮子座', '处女座', '天秤座', '天蝎座', '射手座', '摩羯座', '水瓶座', '双鱼座']
        return this.pick(constellations)
    }
})


Mock.mock('/login/', {
    user: {
        username: 'admin',
        password: 'admin',
        email: Mock.mock('@email'),
        constellation: Mock.mock('@CONSTELLATION'),
        image: Mock.mock('@Image'),
        content: Mock.mock('@word'),
        url: Mock.mock('@url'),
    },
    token:Random.sentence(3),
    success: true
})


Mock.mock('/logout/', {
    success: true
})


Mock.mock('/get_user_list/2/', {
    results:[{
        key: '1',
        name: {
            first:'John',
            last:'Brown'
        },
        age: 32,
        address: 'New York No. 1 Lake Park',
    }, {
        key: '2',
        name: {
            first:'SD',
            last:'Brown'
        },
        age: 42,
        address: 'London No. 1 Lake Park',
    }, {
        key: '3',
        name: {
            first:'SS',
            last:'Brown'
        },
        age: 32,
        address: 'Sidney No. 1 Lake Park',
    }, {
        key: '4',
        name: {
            first:'Dddsdsds',
            last:'Brown'
        },
        age: 32,
        address: 'London No. 2 Lake Park',
    },{
        key: '5',
        name: {
            first:'33343443',
            last:'Brown'
        },
        age: 32,
        address: 'London No. 2 Lake Park',
    },],
    pageSize: 5,
    current:2,
    total: 30,
    success:true,
});

Mock.mock('/get_user_list/3/', {
    results:[{
        key: '1',
        name: {
            first:'John',
            last:'Brown'
        },
        age: 32,
        address: 'New York No. 1 Lake Park',
    }, {
        key: '2',
        name: {
            first:'John',
            last:'Brown'
        },
        age: 42,
        address: 'London No. 1 Lake Park',
    }, {
        key: '3',
        name: {
            first:'John',
            last:'Brown'
        },
        age: 32,
        address: 'Sidney No. 1 Lake Park',
    }, {
        key: '4',
        name: {
            first:'John',
            last:'Brown'
        },
        age: 32,
        address: 'London No. 2 Lake Park',
    },{
        key: '5',
        name: {
            first:'John',
            last:'Brown'
        },
        age: 32,
        address: 'London No. 2 Lake Park',
    },],
    pageSize: 5,
    current:2,
    total: 30,
    success:true,
});

Mock.mock('/get_user_list/3/', {
    results:[{
        key: '1',
        name: {
            first:'John',
            last:'Brown'
        },
        age: 44,
        address: 'New York No. 1 Lake Park',
    }, {
        key: '2',
        name: {
            first:'John',
            last:'Brown'
        },
        age: 44,
        address: 'London No. 1 Lake Park',
    }, {
        key: '3',
        name: {
            first:'John',
            last:'Brown'
        },
        age: 44,
        address: 'Sidney No. 1 Lake Park',
    }, {
        key: '4',
        name: {
            first:'John',
            last:'Brown'
        },
        age: 44,
        address: 'London No. 2 Lake Park',
    },{
        key: '5',
        name: {
            first:'John',
            last:'Brown'
        },
        age: 32,
        address: 'London No. 2 Lake Park',
    },],
    pageSize: 5,
    current:3,
    total: 30,
    success:true,
});
//var data = Mock.mock('/login/', {
//    // 属性 list 的值是一个数组，其中含有 1 到 10 个元素
//    'list|1-10': [{
//        // 属性 id 是一个自增数，起始值为 1，每次增 1
//        'id|+1': 1
//    }]
//})
// 输出结果
//console.log(JSON.stringify(data, null, 4))