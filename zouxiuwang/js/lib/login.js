/**
 * Created by zhangfeng on 2017/1/21.
 */
$(function(){
    $(".dlfs>li").on("click",function(){
        $(".dlfs>li").eq($(this).index()).addClass("dlfsactive").siblings().removeClass();
        $(".login>div").eq($(this).index()).css({display:"block"}).siblings().css({display:"none"})
    })
    $(".duoxuan>span").on("mouseenter",function(){
        $(".l-tishi").css({display:"block"})
    })
    $(".duoxuan>span").on("mouseleave",function(){
        $(".l-tishi").css({display:"none"})
    })
})