function loadingAnimation(){
    var tl = gsap.timeline();
tl.from('.line h1',{
    y: 150,
    stagger:0.45,
    delay: 0.2,
    duration:0.6,
})
tl.from('.line1-part1',{
    opacity:0,
    onStart: function(){
        var h5Timer = document.querySelector(".line1-part1 h5")
grow =0;
setInterval(() => {
    // grow++;
    // console.log(grow);
    if (grow<100) {
        h5Timer.innerHTML= grow++;
    }
    else {
        h5Timer.innerHTML= grow; 
    }
}, 26);
    }
})
tl.to('.line h2',{
    animationName: 'anime',
    opacity:0.2,
    // delay:3,
    // opacity:1,

})
tl.to('#loader ', {
    opacity: 0,
    duration:0.2,
    delay:1,
})
tl.from('#page1', {
    delay: 0.2,
    y:1600,
    opacity: 0,
    duration:0.6,
    ease: Power4,
})
tl.to('#loader',{
    display:'none',
})

tl.from("#nav",{
    opacity:0,
})
tl.from("#hero1 h1,#hero2 h1,#hero3 h2,#hero4 h1",{
    y:120,
    stagger:0.3

})
}

function cursorAnimation(){
    document.addEventListener("mousemove",function(dets){
        gsap.to("#crs",{
            left:dets.x,
            top:dets.y,
        })
    })  
    Shery.makeMagnet("#nav-part-2 h4");
}

loadingAnimation();
cursorAnimation();


