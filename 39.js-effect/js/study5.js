$(document).ready(function(){

    let count = 0;
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