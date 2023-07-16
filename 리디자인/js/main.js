window.onload = function(){
  
  
    let station1 = new Swiper(".main_p .station1",{
     loop:true,
     direction:"horizontal",
     pagination: {
         el: '.swiper-pagination',
         type: 'bullets', 
         clickable:true
       },
       navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
       autoplay:true,
       speed:10
    });

    let station2 = new Swiper(".main_p .station2",{
      effect : 'cube',
      cubeEffect : {
        slideShadows : true, // 슬라이더를 돌릴때 흐릿해 지는 그림자 표시 여부
        shadow : false, // 슬라이더 밑의 그림자 표시 여부
        shadowOffset : 20, // 그림자 위치, 수치가 클수록 아래로 내려감
        shadowScale : 0.1, // 그림자 크기, 수치가 클수록 그림자 커짐
      },
      loop:true,
      direction:"horizontal",
      pagination: {
          el: '.swiper-pagination',
          type: 'bullets', 
          clickable:true
        },

    });
    let station4 = new Swiper(".sns .station4",{
      loop:true,
      spaceBetween:10,
      
      // // direction:"horizontal",
        slidesPerView: 4,
      //   pagination: {
      //     el: ".swiper-pagination",
      //     type: "progressbar",
      //   },
        autoplay:true,
      //   speed:5
        pagination: {
          el: ".swiper-pagination",
          type: "progressbar",
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
     });

     let station5 = new Swiper(".subpage11 .station5",{
      loop:true,
      direction:"horizontal",
        navigation: {
         nextEl: '.swiper-button-next',
         prevEl: '.swiper-button-prev',
       },
     });

     let station6 = new Swiper(".subpage11 .station6",{
      loop:true,
      direction:"horizontal",
      slidesPerView: 4,
        navigation: {
         nextEl: '.swiper-button-next',
         prevEl: '.swiper-button-prev',
       },
     });
   


      // 버튼을 클릭했을 때 만약에 메뉴가 열려있는 상태라면? -> 메뉴를 닫는기능
      // 버튼을 클릭했을 때 만약에 메뉴가 닫혀있는 상태라면? -> 메뉴를 여는기능
  
      let menuState = false;
      $(".btnMoMenu").click(function(){
          //btnMenu클래스 클릭했을 대 실행될 동작
          if(menuState == false){
              $(".btnMoMenu").addClass("close")
              $(".monav").addClass("show")
              menuState = true
          }else{
              $(".btnMoMenu").removeClass("close")
              $(".monav").removeClass("show")
              menuState = false
          }
          }) 

}
 