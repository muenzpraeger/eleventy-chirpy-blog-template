import { scrollToTop, slideLeftSidebar } from "./ui";
import { searchContent, toggleSearch } from "./search";
import { copyUrlToClipboard } from "./utils";

window.scrollToTop = function () {
    scrollToTop();
};

window.slideLeftSidebar = function () {
    slideLeftSidebar();
};

window.searchContent = function (e) {
    window.clearTimeout(window.searchDelay);
    window.searchDelay = setTimeout(() => {
        searchContent(e);
    }, 300);
};

window.toggleSearch = function () {
    toggleSearch();
};

window.copyUrlToClipboard = function () {
    copyUrlToClipboard();
};

document.addEventListener("DOMContentLoaded", function () {
    const sections = document.querySelectorAll(".content h2,.content h3");
    const menu = document.querySelectorAll("nav.toc a");

    const hash = window.location.hash;

    if (hash) {
        for (const item of menu) {
            if (menu.href === hash) {
                item.classList.add("active");
            }
        }
    }

    const makeActive = (link) => {
        if (menu[link]) {
            menu[link].classList.add("active");
        }
    };
    const removeActive = (link) => menu[link].classList.remove("active");
    const removeAllActive = () =>
        [...Array(sections.length).keys()].forEach((link) =>
            removeActive(link)
        );

    let currentActive = 0;

    document
        .getElementById("right-area")
        .addEventListener("scroll", function () {
            {
                const areaEl = document.getElementById("right-area");
                const barEl = document.getElementById("top-bar");
                const scrollEl = document.getElementById("scroll");
                const scrollTop = areaEl.scrollTop;

                const currentHeading =
                    sections.length -
                    [...sections].reverse().findIndex((section) => {
                        return section.offsetTop - 45 <= scrollTop;
                    }) -
                    1;

                if (currentHeading !== currentActive) {
                    removeAllActive();
                    currentActive = currentHeading;
                    makeActive(currentHeading);
                }

                if (scrollTop >= 45) {
                    barEl.classList.add("hide");
                } else {
                    barEl.classList.remove("hide");
                }

                if (scrollEl) {
                    if (scrollTop > window.innerHeight) {
                        scrollEl.style.display = "flex";
                    } else {
                        scrollEl.style.display = "none";
                    }
                }
            }
        });
});
