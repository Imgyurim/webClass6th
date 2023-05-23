// window.onload = function(){
//     let dtList = document.querySelectorAll(".bannerTabMenu>dt")
//     for(let i=0 ; i<dtList.length ; i++){
//        dtList[i].addEventListener("click",function(){
//            for(let j=0 ; j<3 ; j++){
//                dtList[j].classList.remove("on")
//            }
//            this.classList.add("on")
//        })
//    }
//    let tabList = document.querySelectorAll(".tabMenu>dt")
//    for(let i=0 ; i<tabList.length ; i++){
//     tabList[i].addEventListener("click",function(){
//           for(let j=0 ; j<tabList.length ; j++){
//             tabList[j].classList.remove("on")
//           }
//           this.classList.add("on")
//       })
//   }
// }

function tab(classname){
    let tab = document.querySelectorAll("."+classname+">dt")
    for(let i = 0 ; i<tab.length ; i++){
        tab[i].addEventListener("click",function(){
            for(let k=0; k<tab.length ; k++){
                tab[k].classList.remove("on")
            }
            this.classList.add("on")
        })
    }
}
window.onload = function(){
    tab("tabMenu")
    tab("bannerTabMenu")    
}

