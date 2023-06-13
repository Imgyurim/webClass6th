$(document).ready(function(){
    let count = 0;
    $(".btnNext").click(function(e){
        
        count++;
        if(count>4){
            count=0
        }
        e.preventDefault()
        $(".train>li").removeClass("on")
        $(".train>li").eq(count).addClass("on")
    })
    $(".btnPrev").click(function(e){
        
        count--;
        if(count<0){
            count=4
        }
        e.preventDefault()
        $(".train>li").removeClass("on")
        $(".train>li").eq(count).addClass("on")
    })
    let timer = setInterval(function(){
        count++;
        if(count>4){
            count=0
        }
        $(".train>li").removeClass("on")
        $(".train>li").eq(count).addClass("on")
    },2000)

    $(".staition").mouseover(function(){
        clearInterval(timer)
    })
    $(".staition").mouseout(function(){
        timer = setInterval(function(){
        count++;
        if(count>4){
            count=0
        }
        $(".train>li").removeClass("on")
        $(".train>li").eq(count).addClass("on")
    },2000)

    })

})