document.addEventListener('DOMContentLoaded', () => {
  // --- About Us Modal Logic ---
  const openAboutButton = document.getElementById('open-about-modal');
  const closeAboutButton = document.getElementById('close-about-modal');
  const aboutModal = document.getElementById('about-modal');

  if (openAboutButton && closeAboutButton && aboutModal) {
    const openModal = () => {
      aboutModal.classList.remove('hidden');
      document.body.style.overflow = 'hidden'; // Prevent body scroll
    };

    const closeModal = () => {
      aboutModal.classList.add('hidden');
      document.body.style.overflow = ''; // Restore body scroll
    };

    openAboutButton.addEventListener('click', openModal);
    closeAboutButton.addEventListener('click', closeModal);
    
    // Close modal when clicking on the overlay
    aboutModal.addEventListener('click', (e) => {
      if (e.target === aboutModal) {
        closeModal();
      }
    });

    // Close modal with Escape key
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && !aboutModal.classList.contains('hidden')) {
        closeModal();
      }
    });
  }

  // --- Testimonials Carousel Logic ---
  const slides = document.querySelectorAll('.testimonial-slide');
  const dots = document.querySelectorAll('.testimonial-dot');
  const prevButton = document.getElementById('prev-testimonial');
  const nextButton = document.getElementById('next-testimonial');
  
  let currentIndex = 0;
  let autoPlayInterval;

  function showSlide(index) {
    // Prevent unnecessary updates if the slide is already active
    if (index === currentIndex && !slides[index].classList.contains('opacity-0')) return;

    // Hide the current slide and deactivate its dot
    if (slides[currentIndex]) {
        slides[currentIndex].classList.remove('opacity-100');
        slides[currentIndex].classList.add('opacity-0');
        dots[currentIndex].classList.remove('bg-shinepro-gold');
        dots[currentIndex].classList.add('bg-gray-600');
    }
    
    // Update index to the new slide
    currentIndex = index;
    
    // Show the new slide and activate its dot
    if (slides[currentIndex]) {
        slides[currentIndex].classList.remove('opacity-0');
        slides[currentIndex].classList.add('opacity-100');
        dots[currentIndex].classList.remove('bg-gray-600');
        dots[currentIndex].classList.add('bg-shinepro-gold');
    }
  }

  function nextSlide() {
    const newIndex = (currentIndex + 1) % slides.length;
    showSlide(newIndex);
  }

  function prevSlide() {
    const newIndex = (currentIndex - 1 + slides.length) % slides.length;
    showSlide(newIndex);
  }

  function startAutoPlay() {
    // Clear any existing interval to prevent duplicates
    clearInterval(autoPlayInterval);
    autoPlayInterval = setInterval(nextSlide, 5000); // Change slide every 5 seconds
  }

  function stopAutoPlay() {
    clearInterval(autoPlayInterval);
  }

  // Event Listeners
  if (nextButton && prevButton) {
    nextButton.addEventListener('click', () => {
        nextSlide();
        stopAutoPlay();
        startAutoPlay(); // Restart timer
    });
  
    prevButton.addEventListener('click', () => {
        prevSlide();
        stopAutoPlay();
        startAutoPlay(); // Restart timer
    });
  }

  dots.forEach(dot => {
    dot.addEventListener('click', (e) => {
      const index = parseInt(e.target.dataset.index, 10);
      showSlide(index);
      stopAutoPlay();
      startAutoPlay(); // Restart timer
    });
  });

  // Initialize Carousel
  if (slides.length > 0) {
    showSlide(0); // Ensure the first slide is visible on load
    startAutoPlay();
  }

  // --- Footer Copyright Year ---
  const yearSpan = document.getElementById('current-year');
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }
});