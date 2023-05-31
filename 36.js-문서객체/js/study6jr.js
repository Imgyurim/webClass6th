$(document).ready(function(){


    // 버튼을 클릭했을 때 만약에 메뉴가 열려있는 상태라면? -> 메뉴를 닫는기능
    // 버튼을 클릭했을 때 만약에 메뉴가 닫혀있는 상태라면? -> 메뉴를 여는기능

    let menuState = false;
    $(".btnMenu").click(function(){
        //btnMenu클래스 클릭했을 대 실행될 동작
        if(menuState == false){
            $(".btnMenu").addClass("close")
            $("nav").addClass("show")
            menuState = true
        }else{
            $(".btnMenu").removeClass("close")
            $("nav").removeClass("show")
            menuState = false
        }
        })
})