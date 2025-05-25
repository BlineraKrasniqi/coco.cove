document.addEventListener('DOMContentLoaded', function () {
  

 
    var highlightsSlider = document.getElementById('highlights-slider');
    if (highlightsSlider) {
        new Splide(highlightsSlider, {
            type: 'loop', 
            perPage: 3, 
            perMove: 1, 
            gap: '1.5rem', 
            autoplay: true,
            interval: 3000,
            pauseOnHover: true,
            pagination: true, 
            arrows: false, 
            breakpoints: {
                1023: { 
                    perPage: 2,
                    gap: '1rem',
                },
                639: { 
                    perPage: 1,
                    gap: '0.5rem',
                }
            }
        }).mount();
    }

  
    var gallerySlider = document.getElementById('gallery-slider');
    if (gallerySlider) {
        new Splide(gallerySlider, {
            type: 'fade',
            rewind: true, 
            perPage: 1,
            autoplay: true,
            interval: 4000,
            pagination: true, 
            arrows: true,
            heightRatio: 0.5625, 
         
        }).mount();
    }

  
    var testimonialsSlider = document.getElementById('testimonials-slider');
    if (testimonialsSlider) {
        new Splide(testimonialsSlider, {
            type: 'loop',
            perPage: 1,
            autoplay: true,
            interval: 5000,
            pagination: true,
            arrows: false, 
        }).mount();
    }

  
    var foodCarousel = document.getElementById('food-carousel');
    if (foodCarousel) {
        new Splide(foodCarousel, {
            type: 'loop',
            perPage: 4,
            perMove: 1,
            gap: '1rem',
            autoplay: true,
            interval: 2500,
            pagination: true,
            arrows: false,
            breakpoints: {
                1023: { perPage: 3 },
                767: { perPage: 2 },
                639: { perPage: 1.5, gap: '0.5rem', focus: 'center' } 
            }
        }).mount();
    }

    
    const roomCards = document.querySelectorAll('.room-card');
    const modal = document.getElementById('roomModal');
    const closeModalBtn = document.getElementById('closeModal');
    const modalRoomImage = document.getElementById('modalRoomImage');
    const modalRoomTitle = document.getElementById('modalRoomTitle');
    const modalRoomDetails = document.getElementById('modalRoomDetails');

    roomCards.forEach(card => {
        card.addEventListener('click', () => {
            modalRoomImage.src = card.dataset.roomImage;
            modalRoomImage.alt = card.dataset.roomTitle;
            modalRoomTitle.textContent = card.dataset.roomTitle;
            modalRoomDetails.textContent = card.dataset.roomDetails;
            modal.classList.remove('opacity-0', 'invisible');
            modal.classList.add('opacity-100', 'visible');
            document.body.style.overflow = 'hidden';
        });
    });

    if (closeModalBtn) {
        closeModalBtn.addEventListener('click', () => {
            modal.classList.add('opacity-0', 'invisible');
            modal.classList.remove('opacity-100', 'visible');
            document.body.style.overflow = 'auto';
        });
    }
    if (modal) {
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                modal.classList.add('opacity-0', 'invisible');
                modal.classList.remove('opacity-100', 'visible');
                document.body.style.overflow = 'auto';
            }
        });
    }

    
    const newsletterForm = document.getElementById('newsletterForm');
    const newsletterEmailInput = document.getElementById('newsletterEmail');
    const newsletterMessage = document.getElementById('newsletterMessage');

    if (newsletterForm) {
        newsletterForm.addEventListener('submit', function (e) {
            e.preventDefault();
            const email = newsletterEmailInput.value;
            newsletterMessage.textContent = '';

            if (!validateEmail(email)) {
                newsletterMessage.textContent = 'Please enter a valid email address.';
                newsletterMessage.classList.remove('text-green-300');
                newsletterMessage.classList.add('text-orange-300');
                newsletterEmailInput.focus();
                return;
            }

            newsletterMessage.textContent = 'Thank you for subscribing!';
            newsletterMessage.classList.remove('text-orange-300');
            newsletterMessage.classList.add('text-green-300');
            newsletterEmailInput.value = '';

            setTimeout(() => {
                newsletterMessage.textContent = '';
            }, 3000);
        });
    }

    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(String(email).toLowerCase());
    }

    // --- Scroll-to-Top Button ---
    const scrollToTopBtn = document.getElementById('scrollToTopBtn');
    if (scrollToTopBtn) {
        window.addEventListener('scroll', () => {
            if (window.pageYOffset > 300) {
                scrollToTopBtn.classList.remove('opacity-0', 'invisible');
                scrollToTopBtn.classList.add('opacity-100', 'visible');
            } else {
                scrollToTopBtn.classList.add('opacity-0', 'invisible');
                scrollToTopBtn.classList.remove('opacity-100', 'visible');
            }
        });

        scrollToTopBtn.addEventListener('click', () => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }

    const pricingToggle = document.getElementById('pricingToggle');
    const prices = document.querySelectorAll('.price');
    const pricePeriods = document.querySelectorAll('.price-period');

    if (pricingToggle) {
        pricingToggle.addEventListener('change', function () {
            const isWeekly = this.checked;
            prices.forEach(priceEl => {
                priceEl.textContent = isWeekly ? priceEl.dataset.weekly : priceEl.dataset.daily;
            });
            pricePeriods.forEach(periodEl => {
                periodEl.textContent = isWeekly ? '/week' : '/night';
            });
        });
    }

   
   const playButton = document.getElementById('playVideoButton');
  const videoContainer = document.getElementById('videoContainer');

  playButton.addEventListener('click', () => {
    videoContainer.innerHTML = `
      <video src="JaleBeach.mp4" class="w-full h-full object-cover" autoplay controls playsinline></video>
    `;
  });


    // --- Interactive Map Pop-up ---
    const mapHighlightBtn = document.getElementById('mapHighlightBtn');
    const mapHighlightPopup = document.getElementById('mapHighlightPopup');
    if (mapHighlightBtn && mapHighlightPopup) {
        mapHighlightBtn.addEventListener('mouseenter', () => {
            mapHighlightPopup.classList.remove('hidden');
        });
        mapHighlightBtn.addEventListener('mouseleave', () => {
            setTimeout(() => {
                if (!mapHighlightPopup.matches(':hover')) {
                    mapHighlightPopup.classList.add('hidden');
                }
            }, 200);
        });
        mapHighlightPopup.addEventListener('mouseleave', () => {
            mapHighlightPopup.classList.add('hidden');
        });
    }

    
    const currentYearSpan = document.getElementById('currentYear');
    if (currentYearSpan) {
        currentYearSpan.textContent = new Date().getFullYear();
    }

   
    const animatedElements = document.querySelectorAll('[data-aos]');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('aos-animate');
                entry.target.style.opacity = 1;
                if (entry.target.dataset.aos === 'fade-up') entry.target.style.transform = 'translateY(0)';
                else if (entry.target.dataset.aos === 'fade-right') entry.target.style.transform = 'translateX(0)';
                else if (entry.target.dataset.aos === 'fade-left') entry.target.style.transform = 'translateX(0)';
                else entry.target.style.transform = 'none';

                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    animatedElements.forEach(el => {
        el.style.opacity = 0;
        if (el.dataset.aos === 'fade-up') el.style.transform = 'translateY(20px)';
        else if (el.dataset.aos === 'fade-right') el.style.transform = 'translateX(-20px)';
        else if (el.dataset.aos === 'fade-left') el.style.transform = 'translateX(20px)';
        el.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
        observer.observe(el);
    });

});