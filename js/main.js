const SLIDE_ON = `<svg xmlns="http://www.w3.org/2000/svg" width="42" height="42" view-box="0 0 42 42" fill="none">
                    <circle cx="21" cy="21" r="20" stroke="#A1A6B4" stroke-width="2" />
                    <path d="M13 24L21 16L29 24" stroke="#A1A6B4" stroke-width="2" stroke-linecap="square" />
                </svg>`;
const SLIDE_OFF = `<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" view-box="0 0 48 48" fill="none">
                    <circle cx="24" cy="24" r="20" stroke="#A1A6B4" stroke-width="2" />
                    <path d="M16 22L24 30L32 22" stroke="#A1A6B4" stroke-width="2"stroke-linecap="square" />
                </svg>`;
const LIVE_OFF = `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" view-box="0 0 20 20" fill="none">
                    <path d="M10 0C4.475 0 0 4.475 0 10C0 15.525 4.475 20 10 20C15.525 20 20 15.525 20 10C20 4.475 15.525 0 10 0ZM8 14.5V5.5L14 10L8 14.5Z" fill="#A1A6B4" />
                </svg>`;
const LIVE_ON = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <g clip-path="url(#clip0_24531_3491)">
                        <path d="M12 2C6.475 2 2 6.475 2 12C2 17.525 6.475 22 12 22C17.525 22 22 17.525 22 12C22 6.475 17.525 2 12 2Z" fill="#A1A6B4"/>
                        <rect x="9" y="8" width="2" height="8" rx="1" fill="white"/>
                        <rect x="13" y="8" width="2" height="8" rx="1" fill="white"/>
                    </g>
                    <defs>
                        <clipPath id="clip0_24531_3491">
                            <rect width="24" height="24" fill="white"/>
                        </clipPath>
                    </defs>
                </svg>`;
const PODCAST_ON = `<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48" fill="none">
                        <circle cx="24" cy="24" r="20" stroke="#A1A6B4" stroke-width="2"/>
                        <rect x="19" y="15" width="2" height="18" rx="1" fill="#A1A6B4"/>
                        <rect x="27" y="15" width="2" height="18" rx="1" fill="#A1A6B4"/>
                    </svg>`;
const PODCAST_OFF = `<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48" fill="none">
                        <circle cx="24" cy="24" r="20" stroke="#A1A6B4" stroke-width="2"/>
                        <path d="M21.6924 31.7965L31.5716 24.7996C32.1428 24.3998 32.1428 23.6002 31.5716 23.2004L21.6924 16.2035C20.9943 15.7037 20 16.1835 20 17.0031V30.9969C20 31.8165 20.9943 32.2963 21.6924 31.7965Z" fill="#A1A6B4"/>
                    </svg>`;

const select = document.getElementById("select-click");
const options = document.getElementById("options");
const search = document.querySelector("#search");
const search__input = search.querySelector('.search__input');
const playerButtons = document.querySelectorAll(".header__play");
const slides = document.querySelectorAll(".acardion__item");
const podcastBtns = document.querySelectorAll(".podcast__btn");
const loginBtn = document.getElementById("login");
const header = document.querySelector("header");
const sections = document.querySelectorAll("section");
const footer = document.querySelector("footer");
const modal = document.getElementById("modal");


loginBtn.addEventListener("click", () => {
    [header, ...sections, footer].forEach(elem => {
        elem.classList.add("hidden");
    });
    changeClass(modal, ["hidden", "flex"]);
})

podcastBtns.forEach(btn => {
    changeButton(btn, PODCAST_ON, PODCAST_OFF);
});

playerButtons.forEach(btn => {
    changeButton(btn, LIVE_ON, LIVE_OFF);
});

search.addEventListener("click", () => {
    changeClass(search__input, ["hidden", "active"]);
})

select.addEventListener("click", () => {
    if (options) {
        changeClass(options, ['hidden', 'active']);
    }
});


slides.forEach(slide => {
    slide.addEventListener("click", () => {
        if (slide.classList.contains("collapsed")) {
            if (slide.classList.contains("no-collapsed")) slide.classList.remove("no-collapsed");
            slide.innerHTML = `${slide.textContent}
            ${SLIDE_OFF}`;
        } else {
            slide.classList.add("no-collapsed");
            slide.innerHTML = `${slide.textContent}
            ${SLIDE_ON}`;
        }
    });
})

function changeClass(el, classes) {
    classes.forEach(Class => {
        if (el.classList.contains(Class)) {
            el.classList.remove(Class);
            el.classList.add(classes.filter(item => item !== Class)[0]);
            classes.length = 0;
        }
    })
}

function changeButton(btn, BTN_ON, BTN_OFF) {
    btn.addEventListener("click", () => {
        changeClass(btn, ["on", "off"]);
        if (btn.classList.contains("on")) {
            btn.innerHTML = BTN_ON
        } else {
            btn.innerHTML = BTN_OFF;
        }
    });
}
