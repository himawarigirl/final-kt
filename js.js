gsap.to("#first", {
    scrollTrigger: {
        trigger: "#first",
        scrub: 1
    },
    y: -130,
    duration: 0.8,
});

gsap.to(".clown", {
    scrollTrigger: ".clown",
    y: -90,
    duration: 1,
});

tippy('.btn1', {
    content: 'NO SHOP HERE'
});

tippy('a', {
    content: 'Tap to navigate!'
});

IMask(
    document.getElementById('phone'),
    {
        mask: '+{7}(000)000-00-00'
    }
)

IMask(
    document.getElementById('email'),
    {
        mask: /^[A-Z,a-z,0-9]\S*@?\S*$/
    }
)

IMask(
    document.getElementById('name'),
    {
        mask: /[А-Я,а-я,A-Z,a-z]/
    }
)

let anim1 = gsap.to(".clownpic", {
    scrollTrigger: "mousemove",
    duration: 1,
    x: 150,
    ease: "bounce.in",
});

let sec = document.querySelector(".clownpic");
sec.addEventListener("mouseenter", () => anim1.play());
sec.addEventListener("mouseleave", () => anim1.reverse());


let anim2 = gsap.to(".kidpic", {
    pointerEvent: "mousemove",
    duration: 1,
    x: -200,
    ease: "bounce.in",
});

let th = document.querySelector(".kidpic");
th.addEventListener("mouseenter", () => anim2.play());
th.addEventListener("mouseleave", () => anim2.reverse());

const moveTo = new MoveTo();
const button = document.querySelectorAll('a');
button.forEach(a => moveTo.registerTrigger(a));