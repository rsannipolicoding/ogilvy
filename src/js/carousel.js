let container = document.querySelector(".container-draggable");
let innerContainer = document.querySelector(".container-draggable .items-container");
let itemContainer = document.querySelector(".container-draggable .items-container .item");

let pressed = false;
let startX;
let x;

container.addEventListener("mousedown", (e) => {
    pressed = true;
    startX = e.offsetX - innerContainer.offsetLeft;
    container.style.cursor = "grabbing";
});

container.addEventListener("mouseenter", () => {
    container.style.cursor = "grab";
});

container.addEventListener("mouseup", () => {
    container.style.cursor = "grab";
    pressed = false;
});

container.addEventListener("mousemove", (e) => {
    if (!pressed) return;
    e.preventDefault();

    let min = 0
    let max = (((itemContainer.offsetWidth + 15) * innerContainer.childElementCount) - innerContainer.offsetWidth) * -1;
    x = e.offsetX;
    let left = x - startX;

    if(left > min){
        innerContainer.style.left = `${min}px`;
    }else if(left < max){
        innerContainer.style.left = `${max}px`;
    }else{
        innerContainer.style.left = `${left}px`;
    }
});