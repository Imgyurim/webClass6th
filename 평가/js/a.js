$(document).ready(function(){
    $(".tabmenu>dt").click(function(){
        $(".tabMenu>dt").removeClass("on")
        $(this).addClass("on")
        $(".tabmenu>dd").removeClass("on")
        $(this).next().addClass("on")
    })
})