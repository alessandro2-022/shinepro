document.addEventListener('DOMContentLoaded', () => {
  // --- Testimonials Carousel Logic ---
  const slides = document.querySelectorAll('.testimonial-slide');
  const dots = document.querySelectorAll('.testimonial-dot');
  const prevButton = document.getElementById('prev-testimonial');
  const nextButton = document.getElementById('next-testimonial');
  
  let currentIndex = 0;
  let autoPlayInterval;

  function showSlide(index) {
    // Hide current slide
    slides[currentIndex].classList.remove('opacity-100');
    
    // Deactivate current dot
    dots[currentIndex].classList.remove('bg-shinepro-gold');
    dots[currentIndex].classList.add('bg-gray-600');
    
    // Update index
    currentIndex = index;
    
    // Show new slide
    slides[currentIndex].classList.add('opacity-100');
    
    // Activate new dot
    dots[currentIndex].classList.add('bg-shinepro-gold');
    dots[currentIndex].classList.remove('bg-gray-600');
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

  // Initialize
  if (slides.length > 0) {
    showSlide(0); // Show the first slide initially
    startAutoPlay();
  }

  // --- Footer Copyright Year ---
  const yearSpan = document.getElementById('current-year');
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }
});
