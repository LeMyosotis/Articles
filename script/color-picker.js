const colorPicker = new iro.ColorPicker("#color-picker", {
    width: 150,
    color: "#776350",
    margin: 10,
    layout: [
        { 
          component: iro.ui.Box,
          options: {
            boxHeight: 150
          }
        },
        {
            component: iro.ui.Slider,
            options: {
                sliderType: "hue",
                sliderSize: 30
            }
        }
      ],
      layoutDirection: "horizontal"
});

colorPicker.on("color:change", e => {
    document.documentElement.style.setProperty('--background-color', e.hexString);
})