$(document).ready(function(){
    window.addEventListener("wheel", function(e){
        e.preventDefault();
    },{passive : false});

    var $html = $("html");
    var page = 1;
    var lastPage = $(".wrap>div").length;

$html.animate({scrollTop:0},10);
    $(window).on("wheel", function(e){
        if($html.is(":animated")) return;
        if(e.originalEvent.deltaY > 0){
            if(page== lastPage) return;
            page++;
        }else if(e.originalEvent.deltaY < 0){
            if(page == 1) return;
            page--;
        }
        var posTop = (page-1) * $(window).height();
        $html.animate({scrollTop : posTop});
    });

    $(".tabmenu>li").click(function(){
        $(".tabmenu>li").removeClass("on")
        $(this).addClass("on")
        $("div").removeClass("on")
        $(this).addClass("on")
})


})