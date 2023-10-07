//gsap.registerPlugin(ScrollTrigger);

gsap.to(".square", {
    x: 700,
    duration: 3,
    // start: 100,
    scrollTrigger: {
        trigger: ".square",
        start: 500,
        //end: "top 20%",
        markers: true

     }
    
})