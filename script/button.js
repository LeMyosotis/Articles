const button = document.querySelector(".color-picker-button")
const out = document.querySelector(".color-selector-out")
const colorPickerContainer = document.querySelector(".color-selector")


button.addEventListener("click", e => {
    button.classList.toggle("active");
    colorPickerContainer.classList.toggle("open");
});

out.addEventListener("click", e => {
    button.classList.remove("active");
    colorPickerContainer.classList.remove("open");
});
