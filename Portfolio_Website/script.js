
function toggleClassOnResize(elementId, className, screenSize) {
  const element = document.getElementById(elementId);
  const screenWidth = window.innerWidth;

  if (screenWidth <= screenSize) {
    element.classList.add(className);
  } else {
    element.classList.remove(className);
  }
}

window.addEventListener('load', function() {
  toggleClassOnResize('nav', 'responsive-nav', 768); 
});

window.addEventListener('resize', function() {
  toggleClassOnResize('nav', 'responsive-nav', 768); 
});