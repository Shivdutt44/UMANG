// Dynamic responsiveness script
function updateDynamicStyles() {
  const width = window.innerWidth;
  const root = document.documentElement;

  console.log('Screen width:', width);

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
  console.log('Image width set to:', imageWidth);

  // Poster size is responsive via CSS media queries
}

// Initial call
updateDynamicStyles();

// Update on resize
window.addEventListener('resize', updateDynamicStyles);