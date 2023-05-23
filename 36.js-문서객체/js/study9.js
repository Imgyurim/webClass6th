window.onload = function(){
    let nextbtn = document.querySelector(`.btnNext`)
    let prevbtn = document.querySelector(`.btnPrev`)
    let train = document.querySelector(`.train`)
    let trainList = train.children
    let count = 0

    nextbtn.addEventListener(`click`,function(){
        count++
        if(count>3){count=0}
        train.style.transform = `translateX(-${25*count}%)`
        for(let i=0; i<trainList.length; i++){
            trainList[i].classList.remove(`on`)
        }
        trainList[count].classList.add(`on`)
    })
    prevbtn.addEventListener(`click`,function(){
        count--
        if(count<0){count=3}
        train.style.transform = `translateX(-${25*count}%)`
        for(let i=0; i<trainList.length; i++){
            trainList[i].classList.remove(`on`)
        }
        trainList[count].classList.add(`on`)
    })
}