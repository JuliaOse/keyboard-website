function animateBar(triggerElement, onEnterWidth, onLeaveBackWidth, duration) {
  gsap.to(".bar", {
    scrollTrigger: {
      trigger: triggerElement, // Ensure this is the correct trigger element
      start: "top center",
      end: "bottom bottom",
      scrub: true,
      onEnter: () => {
        gsap.to(".bar", {
          width: onEnterWidth,
          duration: duration,
          ease: "none",
        });
      },
      onLeaveBack: () => {
        gsap.to(".bar", {
          width: onLeaveBackWidth,

          duration: duration,
          ease: "none",
        });
      },
    },
  });
}

animateBar(".section2", "35%", "0%", 0.3);
animateBar(".section3", "65%", "35%", 0.4);
animateBar(".section4", "100%", "70%", 0.4);

console.log("working...");

// function moveKeyboard() {}

// gsap.to("#mySplineViewer", {
//   scrollTrigger: {
//     // trigger: ".section2",
//     start: "top top",
//     end: "center 100%",

//     scrub: true,
//     pin: true,
//     markers: "true",
//   },
//   y: 680,
//   x: -450,
//   duration: 1,
// });
// gsap.to("#mySplineViewer", {
//   scrollTrigger: {
//     trigger: ".section2",
//     start: "top top",
//     end: "center 100%",
//     scrub: true,
//     pin: true,
//   },
//   y: 1350,
//   x: -25,
//   duration: 1,
// });

function moveKeyboard(
  triggerElement,
  onEnterY,
  onEnterX,
  onLeaveBackY,
  onLeaveBackX,
  duration
) {
  gsap.to("#mySplineViewer", {
    scrollTrigger: {
      trigger: triggerElement, // Ensure this is the correct trigger element
      start: "center center",
      end: "bottom bottom",
      scrub: true,
      pin: true,
      onEnter: () => {
        gsap.to("#mySplineViewer", {
          y: onEnterY,
          x: onEnterX,
          pin: true,
          //   y: "150vh",
          duration: duration,
          ease: "none",
        });
      },
      onLeaveBack: () => {
        gsap.to("#mySplineViewer", {
          y: onLeaveBackY,
          x: onLeaveBackX,
          pin: true,
          duration: duration,
          ease: "none",
          //delay: "1",
        });
      },
    },
  });
}

moveKeyboard(".section2", "760", "-450", "0", "0", 0.3);
moveKeyboard(".section3", "1500", "-25", "760", "-450", 0.3);
moveKeyboard(".section4", "2100", "-300", "1500", "-25", 0.3);
// moveKeyboard(".section2", "1000", "-450", "0", "0", 0.4);
// moveKeyboard(".section3", "2100", "-25", "1000", "-450", 0.4);
// moveKeyboard(".section4", "3000", "-300", "2100", "-25", 0.4);
