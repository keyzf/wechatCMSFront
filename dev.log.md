## 开发要点小计 

* 退出登录时有等待效果
    完成
    
* 设置左侧菜单栏(以后可考虑改成可配置项) 
    应该是可以的,用一个统一的routes配置项
    
    目前不考虑, 只写初始菜单
    - 第一个菜单,控制台,总览
    -
    - 设置
        系统设置
        权限设置
        个人设置
* 面包屑导航处理
    完成
    menu定位问题
        1. 点击事件和刷新事件处理不同,刷新会导致menu无法展开到相应位置
            Menu菜单
        2. 连续点击当前页面会导致数据无法重新获取,可以通过willupdate解决,但是不完美
            使用componentWillUpdate再次获取数据

* 粉丝管理项
    - 菜单项
    - 搜索表单的处理
        - 改写for
            完成
        - 自动完成框表单元素
            完成
    - 列表处理  
        完成
        - 排序
          完成
        - 筛选
          完成
            
        
    
    
