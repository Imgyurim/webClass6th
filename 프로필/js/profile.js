$(document).ready(function(){

    // // $(".skill_List>li circle")
    // let pathLength = $(".c1").get(0).getTotalLength()
    // // alert(pathLength)
    // // 314 - (314*0.9) 
    // pathLength - (pathLength*0.9)
    // $(".c1").css("stroke-dashoffset",pathLength - (pathLength*0.9))

    $(".btn").click(function(){

        if($(".skill_List").hasClass("on")==false){
            // skill클래스에 on클래스가 없다면
            $(".skill_List").addClass("on")
            $(".skill_List>li").each(function(){
                let list = $(this)
                let percent = $(this).find(".per").text()
                let count = 0
                let circle = $(this).find("circle")

                let timer = setInterval(function(){
                    count++
                    list.find(".per").text(count+"%")
                    circle.css("stroke-dashoffset",314-(314*(count/100)))
                    if(count>=percent){
                        clearInterval(timer)
                    }
                },10)
            })
        }
    })

    $(window).scroll(function(){
        let a = $(window).scrollTop()
        let b = $(".skill_List").offset().top
        let c = $(window).height()*0.5

        if(a+c>=b){
            if($(".skill_List").hasClass("on")==false){
                // skill클래스에 on클래스가 없다면
                $(".skill_List").addClass("on")
                $(".skill_List>li").each(function(){
                    let list = $(this)
                    let percent = $(this).find(".per").text()
                    let count = 0
                    let circle = $(this).find("circle")
    
                    let timer = setInterval(function(){
                        count++
                        list.find(".per").text(count+"%")
                        circle.css("stroke-dashoffset",314-(314*(count/100)))
                        if(count>=percent){
                            clearInterval(timer)
                        }
                    },10)
                })
            }
        }

        
    })

    $(".tab>li").click(function(){
        $(".tab>li").removeClass("on")
        $(this).addClass("on")

        $(".train>li").removeClass("on")
        $(".train>li".)eq(count).addClass("on")
    })

    // let count = 0;
    // $(".prevbtn").click(function(e){
        
    //     count++;
    //     if(count>7){
    //         count=0
    //     }
    //     e.preventDefault()
    //     $(".train>li").removeClass("on")
    //     $(".train>li").eq(count).addClass("on")
    // })
    // $(".nextbtn").click(function(e){
        
    //     count--;
    //     if(count<0){
    //         count=7
    //     }
    //     e.preventDefault()
    //     $(".train>li").removeClass("on")
    //     $(".train>li").eq(count).addClass("on")
    // })
})