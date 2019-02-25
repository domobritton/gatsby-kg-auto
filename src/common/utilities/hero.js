export const heroFix = () => {
    let image = document.getElementById('heroimage') || false;
    console.log(image)
    if (image) {
        let imageHeight = image.clientHeight;
        console.log(imageHeight)
        document.getElementById('heroimage').setAttribute("style","height:" + imageHeight + "px");
    }
  return;
}
