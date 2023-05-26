window.onload = function(){

    let station1 = new Swiper(".station1",{
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

  let station2 = new Swiper(".station2",{
    loop:true,
    direction:"horizontal",
    pagination: {
        el: '.swiper-pagination',
        type: 'bullets', 
        clickable:true
      },

  })

  }
