var cursorkovar = document.querySelector("#cursor")
var blur = document.querySelector("#cursor-blur")

/*here dets means the index of the cursor where it moves. you can check it on the inspect element console*/
document.addEventListener("mousemove", function(dets){
    cursorkovar.style.left = dets.x +25+ "px" /*koi element ko left style diyako ra dets x axis maa kati pixel left jani vaneko */ 
    cursorkovar.style.top = dets.y+ "px"; 

    blur.style.left = dets.x -105 + "px" /*koi element ko left style diyako ra dets x axis maa kati pixel left jani vaneko */ 
    blur.style.top = dets.y -105 + "px"; 
})

/*here, for each is specially used in array. the var h4all = document.querySelectorAll("#nav h4")
gives the result in node list(can check in inspect element) so, that 
node list can be treated as array. so we use forEach.*/
var h4all = document.querySelectorAll("#nav h4")
h4all.forEach(function(element){
    element.addEventListener("mouseenter",function(){
        cursorkovar.style.scale = 3
        cursorkovar.style.border = "0.5px solid #fff"
        cursorkovar.style.backgroundColor = "transparent"
    })
    element.addEventListener("mouseleave",function(){
        cursorkovar.style.scale = 1
        cursorkovar.style.border = "0px solid #ff004f"
        cursorkovar.style.backgroundColor = "#ff004f"
        })
})






gsap.to("#nav",{
    backgroundColor :"#000",
    height: "90px",
    duration: 1,
    scrollTrigger:{
        trigger:"#nav",
        scroller:"body",
        /*markers:true,*/
        start:"top -5%",
        end: "top -10%",
        scrub:1

    }
})

gsap.to("#main",{
    backgroundColor : "#000",
    scrollTrigger:{
        trigger:"#main",
        scroller:"body",
        /* markers:true*/
        start:"top -25%",
        end:"top -70%",
        scrub:2
    }
})

gsap.from("#about-us img, #about-us-in",{
    y:90,/*yaxis bata aauxa*/ 
    opacity:0,
    duration:1,/*dutation 1 sec diyako */
    stagger:0.4,/*stagger means harek element ek ek garera aauxan */
    scrollTrigger:{
        trigger:"#about-us",
        scroller:"body",
        /*markers:true,*/
        start: "top 60%",
        end: "top 55%",
        scrub:3
    }
})

gsap.from(".card",{
    scale:0.5,
    opacity:0,
    duration:0.5,/*dutation 1 sec diyako */
    stagger:0.1,/*stagger means harek element ek ek garera aauxan */
    scrollTrigger:{
        trigger:".card",
        scroller:"body",
        /*markers:true,*/
        start: "top 70%",
        end: "top 65%",
        scrub:3
    }
})


gsap.from("#colon1",{
    y:-70,
    x:-70,
    scrollTrigger:{
        trigger:"#colon1",
        scroller:"body",
        /* markers:true,*/
        start:"top 55%",
        end:"top 45%",
        scrub:4
    }
})
gsap.from("#colon2",{
    y:70,
    x:70,
    scrollTrigger:{
        trigger:"#colon1",
        scroller:"body",
        /*markers:true,*/
        start:"top 55%",
        end:"top 45%",
        scrub:4
    }
})

gsap.from("#page4 h1",{
    y:50,
    scrollTrigger:{
        trigger:"#page4 h1",
        scroller:"body",
        /*markers:true,*/
        start:"top 75%",
        end:"top 70%",
        scrub:2
    }
})