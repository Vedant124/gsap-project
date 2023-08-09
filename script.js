const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});

function circleSwez() {
    var xscale = 1;
    var yscale = 1;

    var xprev = 0;
    var yprev = 0;
    window.addEventListener("mousemove", function (dets) {

        xscale = gsap.utils.clamp(.8, 1.2, dets.clientX - xprev)
        yscale = gsap.utils.clamp(.8, 1.2, dets.clientY - yprev)

        xprev = dets.clientX;
        yprev = dets.clientY;


        mouseScroll(xscale, yscale);

    })

    mouseScroll(xscale, yscale)




}
circleSwez();

function firstPageAnim() {
    var fl = gsap.timeline();

    fl.from("#nav", {
        y: '-10',
        opacity: 0,
        duration: 1.4,
        ease: Expo.easeInOut
    })


    fl.from("#footer", {
        y: '-10',
        opacity: 0,
        duration: 1.4,
        ease: Expo.easeInOut
    })
    fl.to(".bounding_ele", {
        y: 0,
        stagger: .4,
        duration: 1.4,
        ease: Expo.easeInOut
    })





}

function mouseScroll(xscale, yscale) {
    window.addEventListener("mousemove", function (dets) {
        document.querySelector("#circle_info").style.transform = `translate(${dets.clientX}px,
            ${dets.clientY}px) scale(${xscale},${yscale})`;
    })

}
mouseScroll();
firstPageAnim();


document.querySelectorAll(".items").forEach(function (elem) {

    var rotate = 0;
    var diffrot = 0;

    elem.addEventListener("mouseleave", function (dets) {


        gsap.to(elem.querySelector("img"), {

            opacity: 0,
            ease: Power1,
            // duration:.3
        });
    });

    elem.addEventListener("mousemove", function (dets) {


        var diff = dets.clientY - elem.getBoundingClientRect().top;
        diffrot = dets.clientX - rotate;
        rotate = dets.clientX;
        gsap.to(elem.querySelector("img"), {

            opacity: 1,
            ease: Power1,
            top: diff,
            left: dets.clientX,
            rotate :gsap.utils.clamp(-20,20,diffrot)


        });
    });

});

