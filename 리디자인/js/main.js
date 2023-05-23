window.onload = function(){

    let nextBtn = document.querySelector(".btnNext")
    let prevBtn = document.querySelector(".btnPrev")
    let  train= document.querySelector(".train")
    let count = 0

    nextBtn.addEventListener("click",function(){
        // train클래스를 선택해서 왼쪽으로 500픽셀이동
        count++
        if(count>3){count=0}
      train.style.transform = "translateX(-"+500*count+"px)"
        })
    prevBtn.addEventListener("click",function(){
        count--
        if(count<0){count=3}
        train.style.transform = "translateX(-"+500*count+"px)"
        })

}
