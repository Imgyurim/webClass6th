$(document).ready(function(){
    $(".main_p .tab>li").click(function(){
        let idx = $(this).index()
        $(".main_p .tab>li").removeClass("on")
        $(this).addClass("on")

        $(".main_p .maincontent > .items").removeClass("on")
        $(".main_p .maincontent > .items").eq(idx).addClass("on")
    });
    $(".main_p .menu_img>li").click(function(){
        let idx = $(this).index()
        $(".main_p .menu_img>li").removeClass("on")
        $(this).addClass("on")

        $(".main_p .top_img > li").removeClass("on")
        $(".main_p .top_img > li").eq(idx).addClass("on")
    });
    // let S1tab = document.querySelectorAll(".subpage1 .tap>li");
    // let S1con = document.querySelectorAll(".subpage1 .content>li");
    $(".subpage1 .tap>li").click(function(){
         let idx = $(this).index()
        $(".subpage1 .tap>li").removeClass("on")
        $(this).addClass("on")

        $(".subpage1 .content>li").removeClass("on")
        $(".subpage1 .content>li").eq(idx).addClass("on")
    });

    // let S2tab = document.querySelectorAll(".subpage3 .tab>li")
    // let S2con = document.querySelectorAll(".subpage3 .subcontent .items")
    $(".subpage3 .tab>li").click(function(){
        let idx = $(this).index()
       $(".subpage3 .tab>li").removeClass("on")
       $(this).addClass("on")

       $(".subpage3 .subcontent .items").removeClass("on")
       $(".subpage3 .subcontent .items").eq(idx).addClass("on")
   });
})