gsap.registerPlugin(ScrollTrigger);

gsap.to('.titulo', {
  opacity: 0,
  duration: 1,
  scrollTrigger: {
    trigger: '.titulo',
    start: 'top 10%',
    // end: 'center 20%',
    markers: false,
    scrub: true,
    pinSpace: false,
    // toggleClass: 'active',
    toggleActions: 'restart none none none',
    pin: false
  },
})

gsap.to('.bloco2', {
  duration: 5,
  scrollTrigger: {
    trigger: '.bloco2',
    start: 'top 30%',
    markers: false,
    pin: true,
    pinSpacing: false,
    toggleActions: 'restart none none none',
    scrub: true
  }
})

const tlB3 = gsap.timeline({
  scrollTrigger: {
    trigger: '.bloco3',
    start: 'top 30%',
    markers: false,
    pin: true,
    pinSpacing: false,
    toggleActions: 'restart none none reverse',
    scrub: true
  }
});
tlB3.to('.bloco3', {
  opacity: 1
})


const tlB4 = gsap.timeline({
  duration: 1,
  scrollTrigger: {
    trigger: '.bloco4',
    start: 'top 30%',
    markers: false,
    pin: true,
    toggleActions: 'restart none none reverse',
    pinSpacing: false,
  }
})


tlB4.to('.bloco4', {
  x: "230%",
})




const tlB5 = gsap.timeline({
  duration: 1,
  scrollTrigger: {
    trigger: '.bloco5',
    start: 'top 30%',
    markers: false,
    pin: true,
    toggleActions: 'restart none none reverse',
    pinSpacing: false,
  }
})

tlB5.to('.bloco5', {
  x: "-210%",
})



const tlB6 = gsap.timeline({
  scrollTrigger: {
    trigger: '.bloco6',
    start: 'top 30%',
    scrub: true,
    end: '+=200%',
    markers: false,
    scrub: true,
    pinSpace: false,
    // toggleClass: 'active',
    toggleActions: 'restart none none none',
    pin: true
  },
})

tlB6
.to('body',{ duration: 1 }) 
.to('.bloco6',{ scale: 10, opacity: 0, duration: 4, ease: 'none' })
.to('body',{ duration: 1 }) 





gsap.to('.bloco8', {
  duration: 5,
  scrollTrigger: {
    trigger: '.bloco8',
    start: 'top 30%',
    end: '+=350%',
    markers: false,
    pin: true,
    pinSpacing: false,
    toggleActions: 'restart none none none',
    scrub: true
  }
})



const tlB9 = gsap.timeline({
  scrollTrigger: {
    trigger: '.bloco9',
    start: 'top 30%',
    scrub: true,
    end: '+=200%',
    markers: false,
    scrub: true,
    pinSpace: false,
    // toggleClass: 'active',
    toggleActions: 'restart none none none',
    pin: true
  },
})

tlB9
.to('body',{ duration: 1 }) 
.to('.bloco9',{ scale: 10, opacity: 0, duration: 4, ease: 'none' })
.to('body',{ duration: 1 }) 



gsap.utils.toArray('span').forEach(span => {
  ScrollTrigger.create({
    trigger: span,
    start: 'top 80%',
    toggleClass: 'active',
    toggleActions: 'none none none none',
    markers: false
  })
})
