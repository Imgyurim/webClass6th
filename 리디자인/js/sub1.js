$(document).ready(function(){
    let S1tab = document.querySelectorAll(".subpage1 .tap>li");
    let S1con = document.querySelectorAll(".subpage1 .content>li");
    $(S1tab).click(function(){
        alert("Test")
        $(S1tab).removeClass("on")
        $(this).addClass("on")

        $(S1con).removeClass("on")
        $(this).addClass("on")
    })

    let S2tab = document.querySelectorAll(".subpage3 .tab>li")
    let S2con = document.querySelectorAll(".subpage3 .subcontent .items")
    $(S2tab).click(function(){
        $(S2tab).removeClass("on")
        $(this).addClass("on")

        $(S2con).removeClass("on")
        $(this).addClass("on")
    })
})