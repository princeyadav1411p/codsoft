gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
    el: document.querySelector(".main"),
    smooth: true
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy(".main", {
    scrollTop(value) {
        return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
    }, // we don't have to define a scrollLeft because we're only scrolling vertically.
    getBoundingClientRect() {
        return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
    },
    // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
    pinType: document.querySelector(".main").style.transform ? "transform" : "fixed"
});
 // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
 ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

 // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
 ScrollTrigger.refresh();

 var tl1 = gsap.timeline({
    scrollTrigger: {
        trigger: ".page1",
        scroller: ".main",
        start: "top 0",
        end: "top -10%",
        scrub: 2,
    }
})

 tl1.from(".page1-elem-left h3",{
    // y: -50,
    scale: 1.15,
    // opacity: 0,
    duration: 0.8
 })
 tl1.from(".page1-elem-left input",{
    x:-50,
    scale: 1.15,
    opacity: 0,
    duration: 0.8
 })
 tl1.from(".name h1",{
    x:-50,
    scale: 1.15,
    opacity: 0,
    duration: 0.8
 })
 var tl2 = gsap.timeline({
    scrollTrigger: {
        trigger: ".page2-elem",
        scroller: ".main",
        start: "top 60",
        // markers:true,
        end: "top -30%",
        scrub: 2,
    }
})
tl2.from(".page2-right p,.page2-left",{
    y:-40,
    scale: 1.15,
    opacity: 0,
    duration: 0.8
 })
 tl2.from(".page2-right button",{
    y:-50,
    scale: 1.17,
    opacity: 0,
    duration: 0.8
 })
 var tl3 = gsap.timeline({
    scrollTrigger: {
        trigger: ".page3",
        scroller: ".main",
        start: "top 60",
        // markers:true,
        end: "top -30%",
        scrub: 2,
    }
})
tl3.from(".page3-elem-vox1",{
    // y:-40,
    scale: 1.13,
    // opacity: 0,
    duration: 0.8
 })
 tl3.to(".page3 h1",{
    y:10,
    scale: 1.17,
    // opacity: 0,
    duration: 0.8
 })
 var tl4 = gsap.timeline({
    scrollTrigger: {
        trigger: ".page4",
        scroller: ".main",
        start: "top 50",
        // markers:true,
        end: "top -10%",
        scrub: 2,
    }
})
tl4.from(".page4-elem h2",{
    y:-60,
    scale: 1.19,
    // opacity: 0,
    duration: 0.8
 })
 tl4.from(".page4-elem button",{
    y:-50,
    scale: 1.19,
    // opacity: 0,
    duration: 0.8
 })