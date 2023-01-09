$('#owl-carousel-slider').owlCarousel({
    loop: true,
    margin: 0,
    dots: true,
    nav: false,
    items: 1,
    autoplay: true,
    autoplayTimeout: 12000,
    smartSpeed: 1000,
    responsiveClass: true,
    autoplayHoverPause: true,
    stopOnHover: true,
    animateOut: 'fadeOut'
})

$('#owl-carousel-tea').owlCarousel({
    loop: true,
    nav: false,
    autoplay: false,
    dots: true,
    mouseDrag: true,
    responsiveClass: true,
    responsive: {
        0: {
            items: 1
        },
        991: {
            items: 1
        },
        992: {
            items: 3
        },
        1800: {
            items: 4
        }
    }
});

$('#owl-carousel-coffee').owlCarousel({
    loop: true,
    nav: false,
    autoplay: false,
    dots: true,
    mouseDrag: true,
    responsiveClass: true,
    responsive: {
        0: {
            items: 1
        },
        991: {
            items: 1
        },
        992: {
            items: 3
        },
        1800: {
            items: 4
        }
    }
});

$('#owl-carousel-snacks').owlCarousel({
    loop: true,
    nav: false,
    dots: true,
    autoplay: false,
    mouseDrag: true,
    responsiveClass: true,
    responsive: {
        0: {
            items: 2
        },
        767: {
            items: 4
        },
        561: {
            items: 3
        },
        992: {
            items: 4
        },
        1300: {
            items: 6
        }
    }
});



$(document).ready(function() {
    $("#myModal-loader").modal('show');
});


$(window).scroll(function() {
    if ($(window).scrollTop() >= 200) {
        $('.header-fix').addClass('fixed-header');
        $('.header-fix .header-top').addClass('visible-title');
    } else {
        $('.header-fix').removeClass('fixed-header');
        $('.header-fix .header-top').removeClass('visible-title');
    }
});


$(function() {
    $("form[name='contact-form']").validate({
        rules: {
            name: "required",
            email: {
                required: true,
                email: true
            },
        },
        messages: {
            firstname: "Please enter your firstname",
            email: "Please enter a valid email address"
        },
        submitHandler: function(form) {
            form.submit();
        }
    });
});
$("#contact-number").on("input", function() {
    if (/^0/.test(this.value)) {
        this.value = this.value.replace(/^0/, "")
    }
});


let count = 1;
let countEl = document.getElementById("show-count");
let plus = function increament() {
    if (count < 50) {
        count++;
        countEl.value = count;
    }
}
let minus = function decreament() {
    if (count > 1) {
        count--;
        countEl.value = count;
    }
}


//-----------------------------//
const overlay = document.querySelector(".overlay");
const body = document.querySelector("body");
const menuBtn = document.querySelector(".menu-btn");
const menuItems = document.querySelector(".menu-items");
const expandBtn = document.querySelectorAll(".expand-btn");

function toggle() {
    // disable overflow body
    body.classList.toggle("overflow");
    // dark background
    overlay.classList.toggle("overlay--active");
    // add open class
    menuBtn.classList.toggle("open");
    menuItems.classList.toggle("open");
}

menuBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    toggle();
});

window.onkeydown = function(event) {
    const key = event.key; // const {key} = event; in ES6+
    const active = menuItems.classList.contains("open");
    if (key === "Escape" && active) {
        toggle();
    }
};

document.addEventListener("click", (e) => {
    let target = e.target,
        its_menu = target === menuItems || menuItems.contains(target),
        its_hamburger = target === menuBtn,
        menu_is_active = menuItems.classList.contains("open");
    if (!its_menu && !its_hamburger && menu_is_active) {
        toggle();
    }
});

// mobile menu expand
expandBtn.forEach((btn) => {
    btn.addEventListener("click", () => {
        btn.classList.toggle("open");
    });
});