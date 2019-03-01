export const heroFix = () => {
    let image = document.getElementById('heroimage') || false;
    if (image) {
        let imageHeight = image.clientHeight;
        document.getElementById('heroimage').setAttribute("style","height:" + imageHeight + "px");
    }
  return;
}
