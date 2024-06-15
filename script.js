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
})}