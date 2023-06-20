// $(document).ready(function(){
//     for(let i = 0; i<20; i++){
//         <img class="small" src="./img (4)/si[i].jpg" alt="작은이미지[i]">
//         <img class="big" src="./img (4)/pic[i].jpg" alt="큰이미지[i]">
//         <h2 class="title">Art Work 0[i]</h2>
//         <p>Artwork description comes here.<br>2023.06.20</p>
//         <span class="btnClose">close</span>

//     }


// })

    $(document).ready(function(){
      for(let i=1; i<=20; i++){
          $(`.train`).append(`
          <li>
          <img class="small" src="./img (4)/s${i}.jpg" alt="작은이미지${i}">
          <img class="big"src="./img (4)/pic${i}.jpg" alt="큰이미지${i}">
          <h2 class="title">art work ${i}</h2>
          <p>Artwork description comes here.<br>2023.06.20</p>
          <span class="btnClose">Close</span>
          </li>
          `)
      }
  })
