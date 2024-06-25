const hamburger = document.querySelector('.hamburger');
const navLink = document.querySelector('.nav__link');

hamburger.addEventListener('click', () => {
  navLink.classList.toggle('hide');
});



document.getElementById('emailButton').addEventListener('click', function() {
  window.location.href = 'mailto:example@example.com';
});

document.getElementById('contactForm').addEventListener('submit', function(event) {
  event.preventDefault();
  // Here you would handle the form submission, like sending an AJAX request or changing the window location.
  alert('Form submitted!');
});
