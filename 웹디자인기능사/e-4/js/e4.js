$(document).ready(function(){
    let count = 0;

    setInterval(function(){
        count++;
        if(count>2){count=0}
        $(".train").css("transform","translateX(-"+(33.3*count)+"%)")
    },2500)
})