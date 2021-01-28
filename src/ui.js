const scrollToTop = () => {
    document.getElementById("right-area").scroll({
        top: 0,
        left: 0,
        behavior: "smooth"
    });
};

const slideLeftSidebar = () => {
    const elSidebar = document.getElementById("sidebar");
    const elRightArea = document.getElementById("right-area");
    elSidebar.classList.toggle("-translate-x-56");
    elSidebar.classList.toggle("translate-x-0");
    elRightArea.classList.toggle("translate-x-56");
};

export { scrollToTop, slideLeftSidebar };
