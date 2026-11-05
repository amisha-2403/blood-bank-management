document.addEventListener('DOMContentLoaded', () => {
  const navToggle = document.querySelector('.nav-toggle');
  const navLinks = document.querySelector('.nav-links');

  if (navToggle && navLinks) {
    navToggle.addEventListener('click', () => {
      navLinks.classList.toggle('open');
    });
  }

  const contactForm = document.querySelector('.contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', (event) => {
      event.preventDefault();
      alert('Thank you. Your message has been submitted.');
    });
  }

  const authForms = document.querySelectorAll('.auth-form');
  authForms.forEach((form) => {
    form.addEventListener('submit', (event) => {
      event.preventDefault();

      if (form.getAttribute('class').includes('auth-form')) {
        const email = form.querySelector('input[type="email"]')?.value;
        const password = form.querySelector('input[type="password"]')?.value;

        if (form.querySelector('#register-email')) {
          const payload = {
            firstName: form.querySelector('#first-name')?.value,
            lastName: form.querySelector('#last-name')?.value,
            email,
            phone: form.querySelector('#phone')?.value,
            bloodType: form.querySelector('#blood-type')?.value,
            password
          };

          if (window.BloodBankAuth) {
            const result = window.BloodBankAuth.register(payload);
            alert(result.message);
          }
        } else {
          if (window.BloodBankAuth) {
            const result = window.BloodBankAuth.login(email, password);
            alert(result.message);
          }
        }
      }
    });
  });
});
