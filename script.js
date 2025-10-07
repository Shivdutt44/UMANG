// Dynamic responsiveness script
function updateDynamicStyles() {
  const width = window.innerWidth;
  const root = document.documentElement;

  // Dynamic image width based on screen size
  let imageWidth;
  if (width <= 420) {
    imageWidth = '80px';
  } else if (width <= 640) {
    imageWidth = '100px';
  } else {
    imageWidth = '120px';
  }
  root.style.setProperty('--dynamic-image-width', imageWidth);

  // Dynamic poster scale
  let scale;
  if (width <= 420) {
    scale = 0.52;
  } else if (width <= 640) {
    scale = 0.64;
  } else if (width <= 820) {
    scale = 0.78;
  } else if (width <= 980) {
    scale = 0.88;
  } else {
    scale = 1;
  }
  root.style.setProperty('--dynamic-scale', scale);

  // Apply scale to poster
  const poster = document.querySelector('.poster');
  if (poster) {
    poster.style.transform = `scale(${scale})`;
  }
}

// Initial call
updateDynamicStyles();

// Update on resize
window.addEventListener('resize', updateDynamicStyles);