//function to toggle navbar
function open_menu() {
    document.getElementsByClassName("nav-links")[0].classList.toggle("open");
    document.getElementsByClassName("burger")[0].classList.toggle("menuAnimate");
    window.scroll(0, 0);
}

// hide/show navbar when scrolled i.event listener when scrolled

// store present and previous scroll position
let prev, now;
const nav_scroll = () => {

    // set present scroll
    now = window.pageYOffset;

    // get the nav element (itself and its height) and the nav links 
    let nav = document.getElementsByTagName("nav")[0];
    let nav_height = nav.getBoundingClientRect().height;
    let link_rect = document.getElementsByClassName("nav-links")[0].getBoundingClientRect();
    // console.log(rect.top, rect.right, rect.bottom, rect.left);

    // if scroll is beyond the nav height and the links are hidden
    if (now > nav_height && link_rect.left < 0) {
        if (now - prev < 0) {
            nav.style.transform = `translateY(0)`;
        } else {
            nav.style.transform = `translateY(-${nav_height + 10}px)`;
        }
    } else {
        nav.style.transform = "translateY(0)";
    }

    // set this present as the previous now 
    prev = window.pageYOffset;
}

//attach onscroll event
document.addEventListener("scroll", () => {
    nav_scroll();
});

