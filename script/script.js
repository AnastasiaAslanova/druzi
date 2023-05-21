// burger
const iconMenu = document.querySelector('.menu__icon');
const menuBody = document.querySelector ('.menu__body');
if (iconMenu) {
    iconMenu.addEventListener('click', function (e) {
        document.body.classList.toggle('_lock');
        iconMenu.classList.toggle('_active');
        menuBody.classList.toggle('_active');
    })
}

// scroll
document.addEventListener('DOMContentLoaded', function () {
    const menuLinks = document.querySelectorAll('.menu__link[data-goto]');
    if (menuLinks.length > 0) {
        menuLinks.forEach(menuLink => {
            menuLink.addEventListener("click", onMenuLinkClick);
        });
        function onMenuLinkClick(e) {
            e.preventDefault();
            const menuLink = e.target;
            if (menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)) {
                const gotoBlock = document.querySelector(menuLink.dataset.goto);
                const gotoBlockValue = gotoBlock.getBoundingClientRect().top + scrollY - document.querySelector('header').offsetHeight;

                if (iconMenu.classList.contains('_active')) {
                    document.body.classList.remove('_lock');
                    iconMenu.classList.remove('_active');
                    menuBody.classList.remove('_active');
                }

                window.scrollTo({
                    top: gotoBlockValue,
                    behavior: "smooth"
                });

            }
        }
    }
}, false);

//slider
$(document).ready(function() {
    $('.services-section__slider').slick({
        arrow: true,
        slidesToShow: 3,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 2
                }

            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1
                }

            }
        ]
    });
});

//video
function activeVideo(e) {
    console.log(e.currentTarget);
    document.querySelectorAll('.casses-section__videos-list-item').forEach((elem) => {
        elem.classList.remove('active-video');
    })
    e.currentTarget.classList.add('active-video');
}

function handleClick(e) {
    Swal.fire({
        html: `<iframe width="auto" height="500"  src="${e.currentTarget.dataset.url}"
title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" ></iframe>`,
        showConfirmButton: false,
        showCloseButton: true,
        width: 900
    })
}


document.querySelectorAll('.casses-section__videos-list-item').forEach((elem) => {
    elem.addEventListener('mouseover', activeVideo);
    elem.addEventListener('touchstart', activeVideo);
    elem.addEventListener('click', handleClick);
});
