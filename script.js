const swiperContainer = () => {
  const swiper = new Swiper('.swiper', {
    loop: true,
    autoplay: {
      delay: 3100,
      disableOnInteraction: false,
    },
  });
  let per = document.querySelector("#pervious")
  let next = document.querySelector("#next")
  per.addEventListener("click", () => {
    swiper.slidePrev()
  })
  next.addEventListener("click", () => {
    swiper.slideNext()
  })
}
swiperContainer()
const animation = () => {
  let tl = gsap.timeline()
  tl.to("#page1", {
    scale: 0.9,
    duration: 0.8,
    ease: "Power4.out",
    yoyo: -1,
    repeat: -1,
    repeatDelay: 1
  }, "same")
  tl.to("#page2", {
    scale: 0.9,
    duration: 0.8,
    ease: "Power4.out",
    yoyo: -1,
    repeat: -1,
    repeatDelay: 1
  }, "same")
  tl.to(".change h1", {
    y: "-100%",
    duration: 1,
    ease: "Power4.out",
    yoyo: 1,
    repeat: -1,
    repeatDelay: 2.3
  }, "same")
  tl.to(".change img", {
    y: "-100%",
    duration: 1,
    ease: "Power4.out",
    yoyo: 1,
    repeat: -1,
    repeatDelay: 2.3
  }, "same")
}

animation()

