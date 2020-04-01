$(function() {
    console.log("yong")

    //0.插件自定义滚动条
    // 在要添加滚动条的元素选择器上调用mCustomScrollbar函数
    // $(".content_list").mCustomScrollbar();
    $(".content_list").mCustomScrollbar({
        theme: "minimal-dark"
    });
    //1.监听歌曲列表工具条的移入移出事件
    $(".list_music").hover(function() {
        //移入显示子菜单 选择this这个li 用find()方法找到后代中的工具条类=>添加动画效果
        $(this).find(".list_menu").stop().fadeIn(100);
        $(this).find(".list_time a").stop().fadeIn(100);
        //隐藏时长
        $(this).find(".list_time span").stop().fadeOut(100);
    }, function() {
        //移出隐藏子菜单
        $(this).find(".list_menu").stop().fadeOut(100);
        $(this).find(".list_time a").stop().fadeOut(100);
        //显示时长
        $(this).find(".list_time span").stop().fadeIn(100);
    })

    //2.监听歌曲选择框点击事件
    $(".list_check").click(function() {
        //alert(1)
        $(this).toggleClass("list_checked")
    })

    // 通过ajax获取到歌曲信息
    // getMusic()
    // function getMusic(){
    // // $.ajax({
    // //     url: '',
    // //     dataType: '',
    // //     success: function(data) {
    // //             var $musicList = $(".content_list ul");
    // //         访问成功后会把数据作为参数传入到data形参
    // //         遍历获取到的歌曲信息 歌曲信息在形参data里
    // //         each方法有两个参数 index是遍历的序列号从0开始 ele就是data每一条详细数据
    // //         $.each(data, function(index, ele) {
    // //             调用一个方法createMusicItem动态的创建歌曲li
    // //             var $item = createMusicItem(index,ele) 再把数据序号和详细数据传给这个方法
    // //             $musicList.append($item)  
    // //         })
    // //     },
    // //     error: function(e) {

    // //     };

    // // })
    // }


    // function createMusicItem(index, music) {
    //     定义的时候index是序号 music是形参
    //     var $item = $('<li class="list_music"> <
    //         div class = "list_check" > < i > < /i></div >
    //         <
    //         div class = "list_number" > "+(index+1)+" < /div> <
    //         div class = "list_name" > "+music.name+" <
    //         div class = "list_menu" >
    //         <
    //         a href = "javascript:;"
    //         title = "播放" class="list_menu_play"> < /a> <
    //         a href = "javascript:;"
    //         title = "添加" > < /a> <
    //         a href = "javascript:;"
    //         title = "下载" > < /a> <
    //         a href = "javascript:;"
    //         title = "分享" > < /a> < /
    //         div > <
    //         /div> <
    //         div class = "list_singer" > "+music.singer+" < /div> <
    //         div class = "list_time" >
    //         <
    //         span > "+music.time+" < /span> <
    //         a href = "javascript:;"
    //         title = "删除" > < /a> < /
    //         div > <
    //         /li>') jquery函数可以接受html代码片段 从而动态创建

    //         创建完毕一条歌曲之后把他返回出去， 要不然没有返回结果只会出现最后一首歌
    //         return $item;
    //     }

    //         因为是动态创建的，所以该条动态创建出来的若要绑定事件，就要交给委托来做

    //=======================移入移出 歌曲列表上的工具条显示与隐藏================================//
    //         $(".content_list").delegate(".list_music", "mouseenter", function{
    // //   移入显示子菜单 选择this这个li 用find()方法找到后代中的工具条类=>添加动画效果
    //               $(this).find(".list_menu").stop().fadeIn(100);
    //               $(this).find(".list_time a").stop().fadeIn(100);
    // //    隐藏时长
    //              $(this).find(".list_time span").stop().fadeOut(100);
    //})
    //         $(".content_list").delegate(".list_music", "mouselevea", function{
    //  //   移出隐藏子菜单
    //              $(this).find(".list_menu").stop().fadeOut(100);
    //              $(this).find(".list_time a").stop().fadeOut(100);
    //  //   显示时长
    //              $(this).find(".list_time span").stop().fadeIn(100);
    //})
    //=======================移入移出 歌曲列表上的工具条显示与隐藏================================//



    //=======================歌曲列表的复选框的切换类================================//
    //         $(".content_list").delegate("list_check", "click", function(){
    //   歌曲前面序列号toggle成选中/未选中类
    //              $(this).toggleClass("list_checked")
    //})
    //=======================歌曲列表的复选框的切换类================================//



    //=======================歌曲列表工具条上播放键与底部播放键的联动================================//
    //3.0获取底部播放键
    //var $musicPlay = $(".music_play")
    //          $(".content_list").delegate(".list_menu_play", "click", function() {
    //3.1歌曲列表的播放按钮toggle成播放/暂停类
    //              $(this).toggleClass("list_menu_play2")
    //3.2再点击其他的歌曲列表上的歌曲播放按钮时让其他的播放按钮还原暂停类
    //              $(this).parents(".content_list").siblings().find(".list_menu_play").removeClass("list_menu_play2")
    //3.3同步底部的播放键
    //不能简单的$musicPlay.toggleClass("list_menu_play2")
    //这样做只是和第一次点击的有关，并不能做到再点击其他歌曲列表播放按钮的同步的效果
    //要通过这个li上的class属性上的值来真实的判断
    //判断这次点击的按钮上有没有play2正在播放的值
    //if($(this).attr("class").indexOf("list_menu_play2")!=-1){
    //当前是播放的状态
    //$musicPlay.addClass("music_play2")
    //}else
    //当前没有播放的状态
    //    $musicPlay.removeClass("music_play2")
    // })
    //=======================歌曲列表工具条上播放键与底部播放键的联动================================//
})