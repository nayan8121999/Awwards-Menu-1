
let cursor = document.querySelector(".cursor");
let mouseX = 0;
let mouseY = 0;
let delay = 10; // Adjust this value to set the delay in milliseconds

document.addEventListener("mousemove", (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
});

function moveCursor() {
    const deltaX = (mouseX - cursor.offsetLeft) / 10;
    const deltaY = (mouseY - cursor.offsetTop) / 10;

    cursor.style.left = cursor.offsetLeft + deltaX + "px";
    cursor.style.top = cursor.offsetTop + deltaY + "px";

    setTimeout(moveCursor, delay);
}

// console.log(cursor.children[0].className);

moveCursor();

var state = true;

let explore = document.querySelector(".explore");
let exptext = document.querySelector("span");
let nav = document.querySelector(".nav");

explore.addEventListener("click", () => {
    if (state) {
        gsap.to(".menu-bg", {
            width: "100%",
            height: "100%",
            margin: "0",
            borderRadius: "0",
        });

        gsap.from("#circle", {
            rotate: "90",
            duration: 1,
        })



        // change explore text to close
        exptext.innerHTML = "close";
        setTimeout(() => {
            nav.style.visibility = "visible";
        }, 500);



    } else {
        gsap.to(".menu-bg", {
            width: "20px",
            height: "20px",
            margin: "3em 5em",
            borderRadius: "40em",
        });

        // change close text to explore text
        exptext.innerHTML = "explore";

        nav.style.visibility = "hidden";
    }
    state = !state;
});




// scroll


const circle = nav.querySelector("#circle");
const circleChild = circle.children;

// console.log(circleChild);

// console.log(window.scrollY);
let tmax = -20;
let tmin = 20;
let val = window.scrollY;
let idx = 3;

document.addEventListener('wheel', (event) => {
    // Delta values give you information about the scroll direction
    // event.preventDefault();

    var audio = new Audio('./changemenu.mp3');

    const deltaY = event.deltaY;


    if (deltaY > 0 && val > tmax) {
        // Scrolling downwards
        gsap.to('#circle', {
            rotate: `-=10`,
            duration: '0.4',
            ease: Expo.easeInOut,
        });

        if (nav.style.visibility === "visible") {
            audio.play();
        }

        // gsap.to('.sec', {
        //     color: '#0a0a0a',
        // })
        val -= 10;
        idx++;
        // console.log(idx);
        focusText(idx - 1);

    } else if (deltaY < 0 && val < tmin) {
        // Scrolling upwards
        gsap.to('#circle', {
            rotate: `+=10`,
            duration: '0.4',
            ease: Expo.easeInOut,
        });

        if (nav.style.visibility === "visible") {
            audio.play();
        }

        // gsap.to('.sec', {
        //     color: '#0a0a0a',
        // })
        val += 10;
        idx--;
        // console.log(idx);
        focusText(idx - 1);
    }


    // console.log(nav.children);
    // console.log(val);



    // console.log(circleChild[0].className);
});

let prevSec = null;
// let prevDot = null;

function focusText(idx) {
    // circleChild[idx].classList.toggle = 'active';
    // console.log(circleChild[idx].children);

    if (prevSec) {
        prevSec[1].classList.remove("active");
    }

    let sec = circleChild[idx].children;

    setTimeout(() => {
        sec[1].classList.add("active");
        prevSec = sec;
    }, 300);


    // prevSec.classList.remove("active");
}


// nav close feature

let cls = document.querySelector("#navclose");
cls.addEventListener('click', () => {
    console.log(cls);
    gsap.to(".menu-bg", {
        width: "20px",
        height: "20px",
        margin: "3em 5em",
        borderRadius: "40em",
    });

    // change close text to explore text
    exptext.innerHTML = "explore";

    nav.style.visibility = "hidden";

})