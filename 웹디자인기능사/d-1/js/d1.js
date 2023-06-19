$(document).ready(function(){
    let count = 0;

    setInterval(function(){
        count++;
        if(count>2){count=0}
        $(".slide").css("transform","translateX(-"+(count*33.333)+"%)")
    },2500)
})