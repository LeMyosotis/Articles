const button = document.querySelector(".color-picker-button")
const out = document.querySelector(".color-selector-out")
const colorPicker = document.querySelector(".color-selector")


button.addEventListener("click", e => {
    button.classList.toggle("active");
    colorPicker.classList.toggle("open");
});

out.addEventListener("click", e => {
    button.classList.remove("active");
    colorPicker.classList.remove("open");
});