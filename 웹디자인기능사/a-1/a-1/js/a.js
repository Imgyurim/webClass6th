$(document).ready(function(){
    let count = 0;
    let timer = setInterval(function(){
        count++;
        if(count>2){count=0}
        moveSlider(count) 
        $(".train").css("transform","translateX(}+(-33.333*count")+"%)"
    },2000);

})

