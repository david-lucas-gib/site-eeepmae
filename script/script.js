function mostrarHover(container) {
  container.querySelector('.img-original').style.opacity = '0';
  container.querySelector('.img-hover').style.opacity = '1';
}
function mostrarOriginal(container) {
    container.querySelector('.img-original').style.opacity = '1';
    container.querySelector('.img-hover').style.opacity = '0';
}
