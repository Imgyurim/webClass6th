$(document).ready(function(){
        let count = 0;
     setInterval(function(){
        count++;
        if(count>2){
            count=0
        }
        $(".train>li").removeClass("on")
        $(".train>li").eq(count).addClass("on")
    },2000)

    // $(".staition").mouseover(function(){
    //     clearInterval(timer)
    // })
    // $(".staition").mouseout(function(){
    //     timer = setInterval(function(){
    //     count++;
    //     if(count>4){
    //         count=0
    //     }
    //     $(".train>li").removeClass("on")
    //     $(".train>li").eq(count).addClass("on")
    // },2000)

    // })

})