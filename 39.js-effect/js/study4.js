$(document).ready(function(){
    $(".list>li").each(function(){
        let result = Math.round(Math.random())
        if(result){
            $(this).addClass("mrtl")
        }else{
            $(this).addClass("mltr")
        }
    })
        let result = Math.round(Math.random)
    $(window).scroll(function(){
        let winst = $(window).scrollTop() // 스크롤바가 위에서 얼마큼 내려왔는지 계산
        let winHeight = $(window).height()*0.75 //브라우저화면의 높이를 계산
        
        $(".mrtl,.mltr").each(function(){
            if(winst+winHeight>$(this).offset().top){
                $(this).addClass("on")
            }else{
                $(this).removeClass("on")
            }

        })

    })
    
})