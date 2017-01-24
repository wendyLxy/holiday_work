/**
 * Created by zhangfeng on 2017/1/23.
 */
$(function(){
    var jhtjjz=[
        {imgId:"1","imgurl":"../images/index/goods_a1.jpg"},
        {imgId:"2","imgurl":"../images/index/goods_a2.jpg"},
        {imgId:"3","imgurl":"../images/index/goods_a3.jpg"},
        {imgId:"4","imgurl":"../images/index/goods_a4.jpg"},
        {imgId:"5","imgurl":"../images/index/goods_a5.jpg"},
        {imgId:"6","imgurl":"../images/index/goods_a6.jpg"},
        {imgId:"7","imgurl":"../images/index/goods_b1.jpg"},
        {imgId:"8","imgurl":"../images/index/goods_b2.jpg"},
        {imgId:"9","imgurl":"../images/index/goods_b3.jpg"},
        {imgId:"10","imgurl":"../images/index/goods_b4.jpg"},
        {imgId:"11","imgurl":"../images/index/goods_b5.jpg"},
        {imgId:"12","imgurl":"../images/index/goods_b6.jpg"},
        {imgId:"13","imgurl":"../images/index/goods_c1.jpg"},
        {imgId:"14","imgurl":"../images/index/goods_c2.jpg"},
        {imgId:"15","imgurl":"../images/index/goods_c3.jpg"},
        {imgId:"16","imgurl":"../images/index/goods_c4.jpg"},
        {imgId:"17","imgurl":"../images/index/goods_c5.jpg"},
        {imgId:"18","imgurl":"../images/index/goods_c6.jpg"},
        {imgId:"13","imgurl":"../images/index/goods_d1.jpg"},
        {imgId:"14","imgurl":"../images/index/goods_d2.jpg"},
        {imgId:"15","imgurl":"../images/index/goods_d3.jpg"},
        {imgId:"16","imgurl":"../images/index/goods_d4.jpg"},
        {imgId:"17","imgurl":"../images/index/goods_d5.jpg"},
        {imgId:"18","imgurl":"../images/index/goods_d6.jpg"},
        {imgId:"19","imgurl":"../images/index/goods_e1.jpg"},
        {imgId:"20","imgurl":"../images/index/goods_e2.jpg"},
        {imgId:"21","imgurl":"../images/index/goods_e3.jpg"},
        {imgId:"22","imgurl":"../images/index/goods_e4.jpg"},
        {imgId:"23","imgurl":"../images/index/goods_e5.jpg"},
        {imgId:"24","imgurl":"../images/index/goods_e6.jpg"},
        {imgId:"25","imgurl":"../images/index/goods_f1.jpg"},
        {imgId:"26","imgurl":"../images/index/goods_f2.jpg"},
        {imgId:"27","imgurl":"../images/index/goods_f3.jpg"},
        {imgId:"28","imgurl":"../images/index/goods_f4.jpg"},
        {imgId:"29","imgurl":"../images/index/goods_f5.jpg"},
        {imgId:"30","imgurl":"../images/index/goods_f6.jpg"},

        {imgId:"31","imgurl":"../images/index/fxhh1 (1).jpg"},
        {imgId:"32","imgurl":"../images/index/fxhh1 (2).jpg"},
        {imgId:"33","imgurl":"../images/index/fxhh1 (3).jpg"},
        {imgId:"34","imgurl":"../images/index/fxhh1 (4).jpg"},
        {imgId:"35","imgurl":"../images/index/fxhh1 (5).jpg"},
        {imgId:"36","imgurl":"../images/index/fxhh1 (6).jpg"},
        {imgId:"37","imgurl":"../images/index/fxhh1 (7).jpg"},
        {imgId:"38","imgurl":"../images/index/fxhh1 (8).jpg"},
        {imgId:"39","imgurl":"../images/index/fxhh1 (9).jpg"},
        {imgId:"40","imgurl":"../images/index/fxhh1 (10).jpg"},
        {imgId:"41","imgurl":"../images/index/fxhh1 (11).jpg"},
        {imgId:"42","imgurl":"../images/index/fxhh1 (12).jpg"},
        {imgId:"43","imgurl":"../images/index/fxhh1 (13).jpg"},
        {imgId:"44","imgurl":"../images/index/fxhh1 (14).jpg"},
        {imgId:"45","imgurl":"../images/index/fxhh1 (15).jpg"},
        {imgId:"46","imgurl":"../images/index/fxhh1 (16).jpg"},

    ]

    var rjztjz=[
        {imgId:"1","imgurl":"../images/index/beats1.jpg","imgtitle":"../images/index/img-title1.png"},
        {imgId:"2","imgurl":"../images/index/beats2.jpg","imgtitle":"../images/index/img-title2.png"},
        {imgId:"3","imgurl":"../images/index/beats3.jpg","imgtitle":"../images/index/img-title3.png"},
        {imgId:"4","imgurl":"../images/index/beats4.jpg","imgtitle":"../images/index/img-title4.png"},
        {imgId:"5","imgurl":"../images/index/beats5.jpg","imgtitle":"../images/index/img-title5.png"},
        {imgId:"6","imgurl":"../images/index/beats6.jpg","imgtitle":"../images/index/img-title6.png"},
    ]

    $(".jhtj-goods").each(function(index,dom){

       var $a = $("<a>");
        $a.attr("href","#");
        var $img=$("<img>")
        $img.attr("src",jhtjjz[index].imgurl);
        $a.append($img)
        $(this).append($a)
    })
    $(".rjzt-goods").each(function(index,dom){

        var $a = $("<a>");
        $a.attr("href","#");
        var $img=$("<img>")
        $img.attr("src",rjztjz[index].imgurl);

        var $img1=$("<img>")
        $img1.attr("src",rjztjz[index].imgtitle);
        $img1.addClass("rjzt-active")
        $a.append($img)
        $(this).append($a)
        $(this).append($img1)
    })
})
