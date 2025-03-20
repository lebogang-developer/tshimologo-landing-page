window.addEventListener('scroll', function () {
  let navbar = document.getElementById('navbar');

  // Add border after scrolling down for a few seconds
  if (window.scrollY > 100) {
    setTimeout(() => {
      navbar.classList.add('border-b-2', 'border-gray-300');
    }, 2000); // 2-second delay
  } else {
    navbar.classList.remove('border-b-2', 'border-gray-300');
  }
});

// Mobile menu toggle
document.getElementById('menu-btn').addEventListener('click', function () {
  document.getElementById('menu').classList.toggle('hidden');
});

// Back to Top Button
const backToTopButton = document.getElementById('backToTop');
window.addEventListener('scroll', function () {
  if (window.scrollY > 300) {
    backToTopButton.classList.remove('hidden');
  } else {
    backToTopButton.classList.add('hidden');
  }
});

backToTopButton.addEventListener('click', function () {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// ach card appears one after the other when the user scrolls to the Services Section.
document.addEventListener('DOMContentLoaded', function () {
  const serviceCards = document.querySelectorAll('.service-card');

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const delay = entry.target.getAttribute('data-delay');
          entry.target.classList.add('animate__fadeInUp');
          entry.target.style.animationDelay = `${delay}ms`;
        }
      });
    },
    { threshold: 0.3 }
  );

  serviceCards.forEach((card) => observer.observe(card));
});

// Form Validation
document
  .getElementById('contact-form')
  .addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent form submission

    // Form Fields
    const firstName = document.getElementById('first-name').value.trim();
    const lastName = document.getElementById('last-name').value.trim();
    const email = document.getElementById('email').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const service = document.getElementById('service').value.trim();
    const message = document.getElementById('message').value.trim();

    // Error Elements
    const errors = {
      firstName: document.getElementById('error-first-name'),
      lastName: document.getElementById('error-last-name'),
      email: document.getElementById('error-email'),
      phone: document.getElementById('error-phone'),
      service: document.getElementById('error-service'),
      message: document.getElementById('error-message'),
    };

    let isValid = true;

    // Reset error messages
    Object.values(errors).forEach((error) => {
      error.classList.add('hidden');
      error.textContent = '';
    });

    // Validation Checks
    if (firstName === '') {
      errors.firstName.textContent = 'First name is required.';
      errors.firstName.classList.remove('hidden');
      isValid = false;
    }

    if (lastName === '') {
      errors.lastName.textContent = 'Last name is required.';
      errors.lastName.classList.remove('hidden');
      isValid = false;
    }

    if (email === '' || !/^\S+@\S+\.\S+$/.test(email)) {
      errors.email.textContent = 'Please enter a valid email address.';
      errors.email.classList.remove('hidden');
      isValid = false;
    }

    if (phone === '' || !/^\+?[0-9\s-]{8,15}$/.test(phone)) {
      errors.phone.textContent = 'Please enter a valid phone number.';
      errors.phone.classList.remove('hidden');
      isValid = false;
    }

    if (service === '') {
      errors.service.textContent = 'Please select a service.';
      errors.service.classList.remove('hidden');
      isValid = false;
    }

    if (message.length < 10) {
      errors.message.textContent = 'Message must be at least 10 characters.';
      errors.message.classList.remove('hidden');
      isValid = false;
    }

    // Submit if valid
    if (isValid) {
      alert('Form submitted successfully!'); // Replace with actual form submission logic
      this.reset(); // Reset form fields
    }
  });
