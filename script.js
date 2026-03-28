
gsap.registerPlugin(ScrollTrigger);

Shery.mouseFollower();

Shery.makeMagnet(".magnet");

Shery.hoverWithMediaCircle(".hvr", {
  videos: ["./images/video1.mp4", "./images/video2.mp4", "./images/video3.mp4"],
});

gsap.to(".f-left-elems", {
  scrollTrigger: {
    trigger: "#f-images",
    start: "top top",
    end: "bottom bottom",
    pin: true,
    endTrigger: ".last",
    scrub: 1,
  },
  y: "-300%",
  ease: "power1",
});

var sections = document.querySelectorAll(".f-left-elems");

Shery.imageEffect(".images", {
  style: 5,
  slideStyle: (setScroll) => {
    sections.forEach(function (section, index) {
      ScrollTrigger.create({
        trigger: section,
        start: "top top",
        scrub: 1,
        onUpdate: function (prog) {
          setScroll(prog.progress + index);
        },
      });
    });
  },
});
