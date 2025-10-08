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

  // Dynamic divider and globe position based on contact height for page-2
  setTimeout(() => {
    const poster = document.querySelector('.poster');
    if (poster && poster.classList.contains('page-2')) {
      const contact = document.querySelector('.contact');
      const divider = document.querySelector('.gold-divider');
      const globe = document.querySelector('.globe-space');
      const address = document.querySelector('.address');

      if (contact) {
        const contactBottom = contact.offsetTop + contact.offsetHeight;

        console.log('Page-2: Contact offsetTop:', contact.offsetTop, 'offsetHeight:', contact.offsetHeight, 'bottom:', contactBottom);

        if (divider) {
          const dividerTop = contactBottom + 20;
          divider.style.top = dividerTop + 'px';
          divider.style.zIndex = '1'; // Ensure below text
          console.log('Divider top set to:', dividerTop);
        }

        if (globe) {
          const globeTop = contactBottom + 30;
          globe.style.top = globeTop + 'px';

          if (address) {
            const addressTop = address.offsetTop;
            const globeHeight = addressTop - globeTop - 10;
            globe.style.height = Math.max(0, globeHeight) + 'px';
            console.log('Globe top:', globeTop, 'height:', globeHeight, 'Address top:', addressTop);
          }
        }
      }
    }
  }, 100);
}

// Initial call
updateDynamicStyles();

// Update on resize
window.addEventListener('resize', updateDynamicStyles);