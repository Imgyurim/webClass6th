$(document).ready(function(){


  let pathLength = $("#progress path").get(0).getTotalLength()
  $("#progress path").css("stroke-dasharray",pathLength)
  $("#progress path").css("stroke-dashoffset",pathLength)

    
  $(window).scroll(function(){
      let winTop = $(window).scrollTop()
      let fixedTop = $(".fixedFrame").offset().top
      let distance = winTop-fixedTop
      let movingAreaHeight = $(".movingArea").height()        
      
      if(distance<0){

          $(".movingArea").css("position","absolute")
          $(".movingArea").css("left","0")
          $(".movingArea").css("top","0")

      }
      if(distance>=0 && distance<=8000-movingAreaHeight){
          $(".movingArea").css("position","fixed")
          $(".movingArea").css("left","0")
          $(".movingArea").css("top","0")
          let percent = (distance/(8000-movingAreaHeight)*100)     //0~100까지의 수        
          $("#progress path").css("stroke-dashoffset",pathLength-(pathLength*percent/100))
          $(".per").text(Math.round(percent)+"%")

          let percent2 = (distance/(8000-movingAreaHeight)*87.5) //0~87.5까지의 수
          $(".train").css("transform","translateX(-"+percent2+"%)")

          
      }
      if(distance>8000-movingAreaHeight){
          $(".movingArea").css("position","absolute")
          $(".movingArea").css("left","0")
          $(".movingArea").css("top",(8000-movingAreaHeight)+"px")

      }  
      
      

      

  })
})





