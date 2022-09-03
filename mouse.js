//variable declaration
const container = document.querySelector(".container");
const mouseInner = document.querySelector(".mouse-inner");
const mouseOuter = document.querySelector(".mouse-outer");
const mouseOuterOuter = document.querySelector(".mouse-outer-outer");

//mouse move function
document.addEventListener("mousemove", function(e){
    mouseInner.style.top = e.pageY + "px";
    mouseInner.style.left = e.pageX + "px";

    mouseOuter.style.top = e.pageY + "px";
    mouseOuter.style.left = e.pageX + "px";

    mouseOuterOuter.style.top = e.pageY + "px";
    mouseOuterOuter.style.left = e.pageX + "px";
});

//mouse hover class add function

content.addEventListener("mouseenter", function(){
    mouseInner.classList.add("hide-mouse-inner");
    mouseOuter.classList.add("big-mouse-outer");
    mouseOuterOuter.classList.add("big-mouse-outer-outer");
});

//mouse hover class remove function

content.addEventListener("mouseenter", function(){
    mouseInner.classList.remove("hide-mouse-inner");
    mouseOuter.classList.remove("big-mouse-outer");
    mouseOuterOuter.classList.remove("big-mouse-outer-outer");
});