const fullcup = document.querySelector(".full-cup");
const halfcup = document.querySelector(".half-cup");
const empcup = document.querySelector(".empty-cup");

fullcup.addEventListener("click", () => {
    fullcup.classList.add("empty");
    empcup.classList.remove("empty");
    console.log("empty");
});

halfcup.addEventListener("click", () => {
    halfcup.classList.add("empty");
    fullcup.classList.remove("empty");
    console.log("working");
});

empcup.addEventListener("click", () => {
    empcup.classList.add("empty");
    halfcup.classList.remove("empty");
    console.log("empty");
});
