//showbox
//bigpic
//showsum
//商品详情-放大镜
$(function () {
    //鼠标放在小图片上,呈现放大镜和大图片
    //
    $("#showbox").on("mouseover", function () {
        $("#glass").css("display", "block");
        $("#bigpic").css("display", "block")
    })

    //鼠标移出时,消失

    $("#showbox").on("mouseout", function () {
        $("#glass").css("display", "none");
        $("#bigpic").css("display", "none")
    })


//鼠标在图片上移动时

$("#showbox").on("mousemove", function (ev) {
//获取鼠标在小图片上的位置

var disX = ev.clientX - $("#showbox").offset().left - $("#glass").width() / 2;


var disY = ev.clientY - $("#showbox").offset().top - $("#glass").height() / 2;

//判断,让放大镜不能出界

if (disX < 0) {
    disX = 0
} else if (disX > ($("#showbox").width() - $("#glass").width())) {
    disX = $("#showbox").width() - $("#glass").width()
}

if (disY < 0) {
    disY = 0
} else if (disY > ($("#showbox").height() - $("#glass").height())) {
    disY = $("#showbox").height() - $("#glass").height()
}


        //鼠标移动起来
        $("#glass").css({
            left: disX + "px",
            top: disY + "px"
        })

        //  disX / ($("#showbox").width() - $("#glass").width()) = left / ($("#oImg").width() - $("#bigpic").width());

        //大图片的移动其实和放大镜移动时按照一定比例来进行
        //比例
        var l = disX / ($("#showbox").width() - $("#glass").width())

        var t = disY / ($("#showbox").height() - $("#glass").height())

        //大图片移动,放大镜向左移动,大图片整体向右移动,所以是反的
        //
        $("#oImg").css({
            left: -l * ($("#oImg").width() - $("#bigpic").width()) + "px",
            top: -t * ($("#oImg").height() - $("#bigpic").height()) + "px"
        })
    })
})
//
//商品详情-鼠标滑过-加一个类
// $(function(){
//     $("#showsum>p>span").on('mouseover',
//         function () {
//             $(this).siblings("span").semoveClass("bsr");
//             $(this).addClass("bsr");
            
//         });
// })
$(function(){
    
})

//bigpic
//showsum span
//商品详情-鼠标滑过-加一个类
//商品详情-鼠标滑过—换图功能
$(function () {
    //1. 给所有的a注册点击事件
    
    
    // $(".sp").hover(
    //     function () {
    //         console.log('1');
    //         $(this).addClass("bsr");
    //     },
    //     function () {
    //         console.log('2');
    //         $(this).removeClass("bsr");
    //     }
    // );


    $("#showsum .sp").hover(function () {
     $(this).addClass("bsr").siblings().removeClass("bsr");
      var src = $(this).find('img').attr("src");
      $("#bigpic img").attr("src", src);
      $("#showbox img").attr("src", src);
      var title = $(this).find('img').attr("title");
      return false;
    });

    
  });
