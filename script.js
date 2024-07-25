var tl = gsap.timeline();
tl.to(".nav ",{
    y:50,
    // stagger:0.5,
    duration:0.5,
    delay:0.5
})
tl.to(".hero .elem #az1 #az2 #az3",{
    x:50,
    duration:0.5,
})
document.addEventListener('DOMContentLoaded', () => {
    gsap.from(".main-footer > div", {
        duration: 1,
        y: 100,
        opacity: 0,
        ease: "power3.out",
        stagger: 0.2
    });

    gsap.from(".brandname h1", {
        duration: 1.5,
        y: 200,
        opacity: 0,
        ease: "power3.out",
        delay: 1
    });
});


var button = document.querySelector("button");
button.addEventListener("mouseenter",function(){
    gsap.to(button,{
       scale:1.2,
        duration:1
    })
})
button.addEventListener("mouseleave",function(){
    gsap.to(button,{
       scale:1,
        duration:1
    })
})
const sections = [
    ["nike", "hello", "good", "like"],
    ["airMaxPlus", "airMaxGood", "justForFun", "airMaxPlus2"],
    ["makeTheGroundShake", "justForFun2", "makeGroundShake", "makeTheShake"],
    ["price1", "price2", "price3", "price4"]
];

let currentIndices = [0, 0, 0, 0]; // Track the current index for each section
const bgImages = [
    "url('./vecteezy_black-and-orange-luxury-vector-abstract-background-modern_9384281.jpg')",
    "url('./empty-green-studio-well-use-as-background-website-template-frame-business-report_1258-71916.jpg')",
    "url('./abstract-creative-3d-sphere_23-2150885637.jpg')",
    "url('./black-prism-concept-ai-generated_268835-7011.avif')"
];
const imageIds = ["jutta1", "jutta2", "jutta3", "jutta4"];
let currentBgIndex = 0; // Track the current background image index
let currentImageIndex = 0; // Track the current image index

// Initialize the first text in each section as visible
sections.forEach(section => {
    document.getElementById(section[0]).classList.add("visible");
});

// Initialize the first product image as visible
document.getElementById(imageIds[currentImageIndex]).classList.add("visible");

document.addEventListener("click", () => {
    // Change text
    for (let i = 0; i < sections.length; i++) {
        const currentText = document.getElementById(sections[i][currentIndices[i]]);
        currentText.classList.remove("visible");
        currentText.classList.add("hidden");

        currentIndices[i]++;
        if (currentIndices[i] >= sections[i].length) {
            currentIndices[i] = 0;
        }

        const nextText = document.getElementById(sections[i][currentIndices[i]]);
        nextText.classList.remove("hidden");
        nextText.classList.add("visible");
    }

    // Change product image
    const currentImage = document.getElementById(imageIds[currentImageIndex]);
    currentImage.classList.remove("visible");
    currentImage.classList.add("hidden");

    currentImageIndex++;
    if (currentImageIndex >= imageIds.length) {
        currentImageIndex = 0;
    }

    const nextImage = document.getElementById(imageIds[currentImageIndex]);
    nextImage.classList.remove("hidden");
    nextImage.classList.add("visible");

    // Change background image
    currentBgIndex++;
    if (currentBgIndex >= bgImages.length) {
        currentBgIndex = 0;
    }

    document.querySelector('.landing').style.backgroundImage = bgImages[currentBgIndex];
});



gsap.from(".container .box",{
    opacity:0,
    y:100,
    duration:0.2,
    stagger:0.2,
    // rotate:360,
    delay:0.2,
    scrollTrigger:{
        trigger:"#box1",
        scroller:"body",
        scroll:"top 50%",
        // scrub:1
    }
})

gsap.from(".cont .good",{
    opacity:0,
    y:100,
    duration:0.2,
    stagger:0.3,
    // rotate:360,
    delay:0.2,
    scrollTrigger:{
        trigger:"#box1",
        scroller:"body",
        scroll:"top 35%",
        scrub:1
    }
})


// var jutta = document.querySelector("#jutta");
// jutta.addEventListener("mouseenter",function(){
//     gsap.from(jutta,{
//         rotate:30,
//         duration:1,
//         delay:0.5
//     })
// })
// jutta.addEventListener("mouseleave",function(){
//     gsap.from(jutta,{
//         rotate:0,
//         duration:1,
//         delay:0.5
//     })
// })
const gradients = document.querySelectorAll('.gradient');
const shoes = document.querySelectorAll('.shoe');
const shoeBg = document.querySelector('.shoeBackground');
const colors = document.querySelectorAll('.color');
const sizes = document.querySelectorAll('.size');

let prevColor = "blue";
let animationEnd = true;

function changeSize(){
    sizes.forEach(size => size.classList.remove('active'));
    this.classList.add('active');
}


function changeColor(){
    if(!animationEnd) return;
    let primary = this.getAttribute('primary');
    let color = this.getAttribute('color');
    let shoe = document.querySelector(`.shoe[color="${color}"]`);
    let gradient = document.querySelector(`.gradient[color="${color}"]`);
    let prevGradient = document.querySelector(`.gradient[color="${prevColor}"]`);

    if(color == prevColor) return;

    colors.forEach(c => c.classList.remove('active'));
    this.classList.add('active');

    document.documentElement.style.setProperty('--primary', primary);

    shoes.forEach(s => s.classList.remove('show'));
    shoe.classList.add('show');

    gradients.forEach(g => g.classList.remove('first', 'second'));
    gradient.classList.add('first');
    prevGradient.classList.add('second');

    prevColor = color;
    animationEnd = false;

    gradient.addEventListener('animationend', () => {
        animationEnd = true;
    })

}

colors.forEach(c => c.addEventListener('click', changeColor));

sizes.forEach(size => size.addEventListener('click', changeSize));


gsap.from(".container .card .shoeBackground",{
    x:600,
    duration:1,
    delay:1,
    scrollTrigger:{
        trigger:".container .card .shoeBackground",
        scroller:"body",
        scroll:"top 50%"

        // scrub:1
    }
})
gsap.from(".container .card .info",{
    x:600,
    duration:1,
    delay:1,
        opacity:0,
    scrollTrigger:{
        trigger:".container .card .info",
        scroller:"body",
        // scrub:1
        scroll:"top 50%"
    }
})

gsap.from(" .main",{
    y:200,
    duration:0.2,
    delay:0.5,
    stagger:0.2,
    opacity:0,
    scrollTrigger:{
        trigger:".container .card .info",
        scroller:"body",
        scrub:1
    }
})

// var tl=gsap.timeline();
// tl.from(".cont1",{
//    duration:25,
//    opacity:0,
//    scale:0,
//    y:-100,
//    stagger:3,
//    scrollTrigger:{
//     trigger:'.cont1',
//     scroller:"body",
//     // markers:true,
//     start:"top 80%",
//     end:"top 5%",
    
//     scrub:0.2,
//    }
// })
tl.from(".Good1",{
    duration:25,
    opacity:0,
    scale:0,
    y:-100,
    stagger:3,
    scrollTrigger:{
     trigger:'.cont1',
     scroller:"body",
    //  markers:true,
     start:"top 80%",
     end:"top 5%",
     
     scrub:0.2,
    }
 })
 tl.from(".social",{
    duration:25,
    opacity:0,
    scale:0,
    y:-100,
    stagger:3,
    scrollTrigger:{
     trigger:'.cont1',
     scroller:"body",
    //  markers:true,
     start:"top 80%",
     end:"top 5%",
     
     scrub:0.2,
    }
 })



 
 




 let prevBtn = document.getElementById('prev');
let nextBtn = document.getElementById('next');
let carousel = document.querySelector('.carousel');
let items = carousel.querySelectorAll('.list .item');
let indicator = carousel.querySelector('.indicators');
let dots = indicator.querySelectorAll('.indicators ul li');

let active = 0;
let firstPosition = 0;
let lastPosition = items.length - 1;
let autoPlay;

const startAutoPlay = () => {
    clearInterval(autoPlay); 
    autoPlay = setInterval(() => {
        nextBtn.click();
    }, 5000);
}
startAutoPlay();

const setSlider = () => {
    let itemActiveOld = carousel.querySelector('.list .item.active');
    if(itemActiveOld) itemActiveOld.classList.remove('active');
    items[active].classList.add('active');

    let dotActiveOld = indicator.querySelector('.indicators ul li.active');
    if(dotActiveOld) dotActiveOld.classList.remove('active');
    dots[active].classList.add('active');

    indicator.querySelector('.number').innerText = '0' + (active + 1);
    startAutoPlay();
}
setSlider();

nextBtn.onclick = () => {
    active = active + 1 > lastPosition ? 0 : active + 1;
    carousel.style.setProperty('--calculation', 1);
    setSlider();
}
prev.onclick = () => {
    active = active - 1 < firstPosition ? lastPosition : active - 1;
    carousel.style.setProperty('--calculation', -1);
    setSlider();
    clearInterval(autoPlay);
    autoPlay = setInterval(() => {
        nextBtn.click();
    }, 5000);
}
dots.forEach((item, position) => {
    item.onclick = () => {
        active = position;
        setSlider();
    }
})


gsap.from(".zoom #Launch",{
    opacity:0,
    duration:0.5,
    delay:0.5,
    y:200,
    scrollTrigger:{
        trigger:".zoom #Launch",
        scroller:"body",
        scrub:1

    }


})
gsap.from(".zoom .carousel",{
    opacity:0,
    duration:0.5,
    delay:0.5,
    y:300,
    scrollTrigger:{
        trigger:".zoom #Launch",
        scroller:"body",
        scrub:1,
        start:"top top",
        end:"bottom bottom"

    }


})
var tl = gsap.timeline();
tl.from(".last .name1",{
    opacity:0,
    x:300,
    duration:0.5,
    delay:0.5,
    // yoyo:true,
    scrollTrigger:{
        trigger:".last .name1",
        scroller:"body",
        scrub:1

    }
}).from(".last .name2",{
    opacity:0,
    x:300,
    duration:0.5,
    delay:0.5,
    // yoyo:true,
    scrollTrigger:{
        trigger:".last .name2",
        scroller:"body",
        scrub:1

    }
}).from(".last .name3",{
    opacity:0,
    x:300,
    duration:0.5,
    delay:0.5,
    // yoyo:true,
    scrollTrigger:{
        trigger:".last .name3",
        scroller:"body",
        scrub:1

    }
}).from(".last .name4",{
    opacity:0,
    x:300,
    duration:0.5,
    delay:0.5,
    // yoyo:true,
    scrollTrigger:{
        trigger:".last .name4",
        scroller:"body",
        scrub:1

    }
})

var main = document.querySelector("#main")
var cursor = document.querySelector("#cursor")
var navi = document.querySelector(".nav")


main.addEventListener("mousemove",function(dets){
   gsap.to(cursor,{
    x:dets.x,
    y:dets.y, 
   
    ease:"power4"  
})
})

gsap.to(".slides", {
    xPercent: -100 * (document.querySelectorAll(".slide").length - 1),
    ease: "power4",
    scrollTrigger: {
        trigger: ".as",
        start: "top top",
        end: "bottom bottom",
        // markers: true,
        scrub: 1,
        // pin: true;
        // anticipatePin: 1
    },
});



(function () {
    const locomotiveScroll = new LocomotiveScroll();
})();





document.querySelectorAll(".section")
.forEach(function(q){
    ScrollTrigger.create({
        trigger:q,
        start:"top 50%",
        end:"bottom 50% ",
        onEnter:function(){
            document.body.setAttribute("theme",q.dataset.color);

        },

 onEnterBack:function(){
            document.body.setAttribute("theme",q.dataset.color);

        }



    })
})
gsap.set(".slidesm",{scale:5})
var tl = gsap.timeline({
    scrollTrigger:{
        trigger:".home",
        start:"top top",
        end:"bottom top",
        // pin:true,
        // markers:true,
    scrub:2,
    },
 
})

tl.to(".videodiv",{
    "--clip":"0%",
    ease:Power2,
},'a')

tl.to(".slidesm",{
  scale:1,
    ease:Power2,
},'a')
.to(".lt",{
    xPercent:-10,
    stagger:.03,
    ease:Power4

},'b')
.to(".at",{
    xPercent:10,
    stagger:.03,
    ease:Power4

},'b')