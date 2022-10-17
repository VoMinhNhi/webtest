// Swiper
var swiper = new Swiper(".mySwiper", {
    slidesPerView: 4,
    spaceBetween: 30,
    slidesPerGroup: 1,
    loop: true,
    loopFillGroupWithBlank: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".bx-chevron-right",
        prevEl: ".bx-chevron-left",
    },
    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        520: {
            slidesPerView: 2,
        },
        700: {
            slidesPerView: 3,
        },
    },
});


// View more
// const readMoreBtn = document.querySelector(".btn-view");
// const text = document.querySelector(".text");

// readMoreBtn.addEventListener("click", (e) => {
//     text.classList.toggle("show-more");
//     if (readMoreBtn.innerText === "View more") {
//         readMoreBtn.innerHTML = "<span class='btn-view-more'>Back</span> <i class='bx bx-left-arrow-alt'></i>";
//     } else {
//         readMoreBtn.innerHTML = "<span class='btn-view-more'>View more</span> <i class='bx bx-right-arrow-alt'></i>";
//     }
// });

// View more business

const btn = document.querySelector('.btn-businesss');
const cardHolder = document.querySelector('.nav-business');
cardHolder.addEventListener('click', e => {
    const current = e.target;
    const isReadMoreBtn = current.className.includes('btn-business');
    if (!isReadMoreBtn)
        return;
    const currentText = e.target.parentNode.querySelector('.text-more-business');
    currentText.classList.toggle('text-more-business_open');
    current.textContent = current.textContent.includes('View more') ? 'Back' : 'View more';
});

// View more services

const btnServices = document.querySelector('.view-services');
const cardServices = document.querySelector('.nav-services');
cardServices.addEventListener('click', e => {
    const current = e.target;
    const isReadMoreBtn = current.className.includes('view-services');
    if (!isReadMoreBtn)
        return;
    const currentText = e.target.parentNode.querySelector('.content-services-more');
    currentText.classList.toggle('content-services-more_open');
    current.textContent = current.textContent.includes('Back') ? 'View more' : 'Back';
});


// Swiper Feedback
var swiper = new Swiper(".mySwiper-feedback", {
    slidesPerView: 3,
    spaceBetween: 30,
    slidesPerGroup: 1,
    loop: true,
    loopFillGroupWithBlank: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".bx-chevron-right",
        prevEl: ".bx-chevron-left",
    },
});