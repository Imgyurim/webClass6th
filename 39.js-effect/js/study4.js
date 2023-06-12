$(document).ready(function(){
    $(".list>li").each(function(){
        let result = Math.round(Math.random()*1000)%4
        if(result==0){
            $(this).addClass("mrtl")
        }else if(result==1){
            $(this).addClass("mltr")
        }else if(result==2){
            $(this).addClass("mbtt")
        }else{
            $(this).addClass("mttb")
        }
    })
        let result = Math.round(Math.random)
    $(window).scroll(function(){
        let winst = $(window).scrollTop() // 스크롤바가 위에서 얼마큼 내려왔는지 계산
        let winHeight = $(window).height()*0.75 //브라우저화면의 높이를 계산
        
        $(".mrtl,.mltr,.mbtt,.mttb").each(function(){
            if(winst+winHeight>$(this).offset().top){
                $(this).addClass("on")
            }else{
                $(this).removeClass("on")
            }

        })

    })
    
})