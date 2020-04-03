function obj2str(obj) {
    /*
     {
         "userName":"xdd",
         "userPwd":"1979"
     }
    */
    //再加一组k-v 是时间戳防止缓存发生
    obj.t = new Date().getTime()
        /*
        {
            "userName":"xdd",
            "userPwd":"1979",
            "t":"12358468465132"
        }
        */
    var res = []
    for (var key in obj) {
        // 转成这样?key=value&key=value
        res.push(encodeURIComponent(key) + "=" + encodeURIComponent(obj[key]))
    }
    //是字符串，把数组转化一下并把每条k-v拼接
    return res.join("&")
}

function ajax(url, obj, success, error) {
    //开始封装！封装的话肯定有些东西是要靠调用者来传值的！

    //0.将传入的对象传承字符串拼接在url上
    var str = obj2str(obj) // 转成这样?key=value&key=value
    console.log(str)
        //1.创建一个异步对象
    let xmlhttp = new XMLHttpRequest();

    //2.设置请求方式和请求地址
    /*
    method：请求的类型；GET 或 POST
    url：文件在服务器上的位置
    async：true（异步）或 false（同步）
    */
    console.log(new Date().getTime())
    console.log(Date.now())
        //地址：不能写死吧！
    xmlhttp.open("GET", url + "?" + str, true);

    //3.发送请求
    xmlhttp.send();

    //4.监听状态的变化
    xmlhttp.onreadystatechange = function(e2) {
        /*readyState
        每当 readyState 改变时，就会触发 onreadystatechange 事件。

        readyState 属性存有 XMLHttpRequest 的状态信息。
        0: 请求未初始化
        1: 服务器连接已建立
        2: 请求已接收
        3: 请求处理中
        4: 请求已完成，且响应已就绪
        */
        if (xmlhttp.readyState === 4) { //现在我请求了
            /*当能响应回来才说明这次请求成功
                status
            */
            if (xmlhttp.status >= 200 && xmlhttp.status < 300 || xmlhttp.status === 304) {
                //5.处理返回的结果
                // console.log("接收到服务器返回的数据");
                //console.log(xmlhttp.responseText)
                success(xmlhttp)
            } else {
                // console.log("没有接收到服务器返回的数据");
                error(xmlhttp)

            }

        }

    }
}