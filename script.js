// Modal logic
function openModal(productName) {
    document.getElementById('product-name').textContent = productName;
    document.getElementById('modal').style.display = 'flex';
  }
  
  function closeModal() {
    document.getElementById('modal').style.display = 'none';
  }
  
  window.onclick = function (event) {
    const modal = document.getElementById('modal');
    if (event.target === modal) {
      closeModal();
    }
  };
  
  // ScrollSpy nav active
  const sections = document.querySelectorAll('section');
  const navLinks = document.querySelectorAll('.nav-links a');
  
  window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
      const sectionTop = section.offsetTop - 120;
      if (window.scrollY >= sectionTop) {
        current = section.getAttribute('id');
      }
    });
  
    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href').includes(current)) {
        link.classList.add('active');
      }
    });
  
    // Parallax effect
    const scrollY = window.scrollY;
    const layer2 = document.querySelector('.layer2');
    const layer3 = document.querySelector('.layer3');
    const layer4 = document.querySelector('.layer4');
  
    if (layer2) layer2.style.transform = `translateY(${scrollY * 0.3}px)`;
    if (layer3) layer3.style.transform = `translateY(${scrollY * 0.5}px)`;
    if (layer4) layer4.style.transform = `translateY(${scrollY * 0.7}px)`;
  });
  