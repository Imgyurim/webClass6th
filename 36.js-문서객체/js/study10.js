window.onload = function(){
    
    let slider1 = new Swiper(".station1",{
        // direction: 'vertical',
        loop: true,
        // freeMode: true,
        slidesPerView:1.5,
        pagination: {
            el: '.swiper-pagination',
        }
    })

    let slider2 = new Swiper(".station2",{
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          },
    })
    
}