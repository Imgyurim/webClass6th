window.onload = function(){
    let tabTitles = document.querySelectorAll(".tabTip>li")
    let tabDes = document.querySelector(".tabDes")
    let tabDescription = [
        `<h3>title1</h3>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius ipsa deleniti possimus assumenda atque placeat itaque illum veritatis quasi dignissimos facilis quidem, magni impedit quibusdam animi necessitatibus veniam asperiores nulla?</p>`, 
    `<h3>title2</h3>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius ipsa deleniti possimus assumenda atque placeat itaque illum veritatis quasi dignissimos facilis quidem, magni impedit quibusdam animi necessitatibus veniam asperiores nulla?</p>`,
    `<h3>title3</h3>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius ipsa deleniti possimus assumenda atque placeat itaque illum veritatis quasi dignissimos facilis quidem, magni impedit quibusdam animi necessitatibus veniam asperiores nulla?</p>`
]

    for(let i=0 ;i<tabTitles.length;i++){
        tabTitles[i].addEventListener("click",function(){
            // tabTitles[0].classList.remove("on")
            // tabTitles[1].classList.remove("on")
            // tabTitles[2].classList.remove("on")
            for(let j=0; j<tabTitles.length; j++){
                tabTitles[j].classList.remove("on")
            }
            this.classList.add("on")

            tabDes.innerHTML = tabDescription[i]
        })
         
    }
}