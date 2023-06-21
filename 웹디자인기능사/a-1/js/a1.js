$(document).ready(function(){
    let count = 0;
    setInterval(function(){
        count++;
        if(count>2){count=0}
        $(".train").css("transform","translateX(-"+(33.3*count)+"%)")
    },2000)

    $(".tabMenu>dt").click(function(){
        $(".tabMenu>dt").removeClass("on")
        $(this).addClass("on")
        $(".tabMenu>dd").removeClass("on")
        $(this).next().addClass("on")
    })
    
    $(".btnPopup").click(function(){
        $(".popUP").addClass("on")
    })
    $(".btnPopupClose").click(function(){
        $(".popUP").removeClass("on")
    })
})

