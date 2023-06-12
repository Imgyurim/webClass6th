$(document).ready(function(){

    let count = 0;
    let perView;
    //train클래스 너비를 변경 => train클래스의 너비를 불러와서 perView로 나눈후 결과를 다시 적용
    let stationWidth;
    let trainWidth;

    let winWidth = $(window).width()
    if($(window).width()>=1024){
        perView = 2.5
        stationWidth = $(".station").width()
        trainWidth = stationWidth  * 5 / perView
        $(".train").width(trainWidth)
       }else if(winWidth>=768){
        perView = 2
        stationWidth = $(".station").width()
        trainWidth = stationWidth  * 5 / perView
        $(".train").width(trainWidth)
       }else{
        perView = 1
        stationWidth = $(".station").width() 
        trainWidth = stationWidth  * 5 / perView
        $(".train").width(trainWidth)
       }

    // $(".train").width(trainWidth)
    $(window).resize(function(){
        let winWidth = $(window).width()
        if($(window).width()>=1024){
            perView = 2.5
            stationWidth = $(".station").width()
            trainWidth = stationWidth  * 5 / perView
            $(".train").width(trainWidth)
           }else if(winWidth>=768){
            perView = 2
            stationWidth = $(".station").width()
            trainWidth = stationWidth  * 5 / perView
            $(".train").width(trainWidth)
           }else{
            perView = 1
            stationWidth = $(".station").width() 
            trainWidth = stationWidth  * 5 / perView
            $(".train").width(trainWidth)
           }

    })
    

    
    $(".btnNext").click(function(e){
        e.preventDefault()
        count++
        //기차가 왼쪽으로 500픽셀
        if(count>4){count=0}
        $(".train").css("transform","translateX("+(-20*count)+"%)")
        moveSlider(count)
    })
    $(".btnPrev").click(function(e){
        e.preventDefault()
        count--
        if(count<0){count=4} //예외처리
        $(".train").css("transform","translateX("+(-20*count)+"%)")
        moveSlider(count)
    })

    function moveSlider(idx){
        $(".train").css("transform","translateX("+(-20*idx)+"%)")
    }
    moveSlider(2)
})