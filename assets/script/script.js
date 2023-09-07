function E(selector, parent) {
    if (selector instanceof HTMLElement)
        return selector;

    return (parent || document).querySelector(selector);
}

function hasClass(element, className) {
    return element.classList.contains(className);
}

function radioClass(element, className) {
    document.querySelectorAll("." + className).forEach((elem) => {
        elem.classList.remove(className);
    });
    element.classList.toggle(className);
}

function tabs(nav) {
    let navElem = E(nav);

    navElem.addEventListener("click", (e) => {
        let target = e.target;

        if (hasClass(target, "tab"))
            radioClass(target, "active");

        let linkedtab = E("." + target.id);

        radioClass(linkedtab, "visible");
    });

    let active = document.querySelector(".tab.active");
    if (active) {
        radioClass(E("#" + active.id), "visible");
    }
}

tabs(".menu-nav");

let loadMoreBtn1 = document.querySelector('#load-more-1');
let currentItem1 = 4;

loadMoreBtn1.onclick = () => {
    let boxes = [...document.querySelectorAll('.box-container-1 .box-1')];
    for (var i = currentItem1; i < currentItem1 + 4 && i < boxes.length; i++) {
        boxes[i].style.display = 'inline-block';
    }
    currentItem1 += 4;
    if (currentItem1 >= boxes.length) {
        loadMoreBtn1.style.display = 'none';
    }
};
