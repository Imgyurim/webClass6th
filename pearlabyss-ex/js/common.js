window.onload = function(){

    let newsSlider = new Swiper(".news_station",{
        slidesPerView:3,
        pagination: {
            el: '.swiper-pagination',
        },
        breakpoints:{
            280:{
                slidesPerView:1,
            },
            768:{
                slidesPerView:3,
            }
        }
});
}