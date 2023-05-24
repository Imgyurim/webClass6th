window.onload = function(){
    let nextbtn = document.querySelector(`.btnNext`)
    let prevbtn = document.querySelector(`.btnPrev`)
    let train = document.querySelector(`.train`)
    let pagenation = document.querySelector(`.pagenation`)
    let trainList = train.children
    let pagenationList = pagenation.children
    
    let count = 0

    nextbtn.addEventListener(`click`,function(){
        count++
        if(count>3){count=0}
        train.style.transform = `translateX(-${25*count}%)`
        for(let i=0; i<trainList.length; i++){
            trainList[i].classList.remove(`on`)
            pagenationList[i].classList.remove(`on`)
        }
        trainList[count].classList.add(`on`)
        pagenationList[count].classList.add(`on`)
    })
    prevbtn.addEventListener(`click`,function(){
        count--
        if(count<0){count=3}
        train.style.transform = `translateX(-${25*count}%)`
        for(let i=0; i<trainList.length; i++){
            trainList[i].classList.remove(`on`)
            pagenationList[i].classList.remove(`on`)
        }
        trainList[count].classList.add(`on`)
        pagenationList[count].classList.add(`on`)
    })
    
    // pagenationList[0].addEventListener("click",function(){
    //     for(let i=0; i<trainList.length; i++){
    //         trainList[i].classList.remove(`on`)
    //         pagenationList[i].classList.remove(`on`)
    //     }
    //     trainList[0].classList.add(`on`)
    //     pagenationList[0].classList.add(`on`)

    //     train.style.transform = `translateX(-${25*0}%)`
    // })
    // pagenationList[1].addEventListener("click",function(){
    //     for(let i=0; i<trainList.length; i++){
    //         trainList[i].classList.remove(`on`)
    //         pagenationList[i].classList.remove(`on`)
    //     }
    //     trainList[1].classList.add(`on`)
    //     pagenationList[1].classList.add(`on`)

    //     train.style.transform = `translateX(-${25*1}%)`
    // })
    // pagenationList[2].addEventListener("click",function(){
    //     for(let i=0; i<trainList.length; i++){
    //         trainList[i].classList.remove(`on`)
    //         pagenationList[i].classList.remove(`on`)
    //     }
    //     trainList[2].classList.add(`on`)
    //     pagenationList[2].classList.add(`on`)

    //     train.style.transform = `translateX(-${25*2}%)`
    // })
    // pagenationList[3].addEventListener("click",function(){
    //     for(let i=0; i<trainList.length; i++){
    //         trainList[i].classList.remove(`on`)
    //         pagenationList[i].classList.remove(`on`)
    //     }
    //     trainList[3].classList.add(`on`)
    //     pagenationList[3].classList.add(`on`)

    //     train.style.transform = `translateX(-${25*3}%)`
    // })

    for(let a=0; a<4; a++)
    pagenationList[a].addEventListener("click",function(){
        count = a //순번에 맞는 인덱스를 카운트변수에 저장한다.
        for(let i=0; i<trainList.length; i++){
            trainList[i].classList.remove(`on`)
            pagenationList[i].classList.remove(`on`)
        }
        trainList[a].classList.add(`on`)
        pagenationList[a].classList.add(`on`)

        train.style.transform = `translateX(-${25*a}%)`
    })


}
