const button = document.querySelector(".color-picker-button")
const colorPickerBox = document.querySelector(".color-picker-box")


button.addEventListener("click", e => {
    button.classList.toggle("active");
    colorPickerBox.classList.toggle("open");
});