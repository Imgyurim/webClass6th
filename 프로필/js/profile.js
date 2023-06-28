$(document).ready(function(){
    $(".tabmenu>li").click(function(){
        $(".tabmenu>li").removeClass("on")
        $(this).addClass("on")
        $("div").removeClass("on")
        $(this).addClass("on")
})
})