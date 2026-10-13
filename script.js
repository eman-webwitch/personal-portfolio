// Eman's portfolio JavaScript
// This file adds two small interactions: mobile navigation and a demo form message.

// 1. Select the menu button and the navigation list from the HTML.
const menuToggle = document.querySelector("#menu-toggle");
const navLinks = document.querySelector("#nav-links");

// 2. When the menu button is clicked, show or hide the navigation on small screens.
menuToggle.addEventListener("click", function () {
  const menuIsOpen = navLinks.classList.toggle("is-open");
  menuToggle.setAttribute("aria-expanded", menuIsOpen);
});

// Close the mobile menu after a navigation link is clicked.
navLinks.querySelectorAll("a").forEach(function (link) {
  link.addEventListener("click", function () {
    navLinks.classList.remove("is-open");
    menuToggle.setAttribute("aria-expanded", "false");
  });
});

// 3. Select the contact form and the empty paragraph used for feedback.
const contactForm = document.querySelector("#contact-form");
const formResponse = document.querySelector("#form-response");

contactForm.addEventListener("submit", function (event) {
  // Stop the browser from reloading the page when the form is submitted.
  event.preventDefault();

  // Read the name entered in the form.
  const nameInput = document.querySelector("#name");
  const visitorName = nameInput.value.trim();

  // textContent inserts plain text safely into the page.
  formResponse.textContent =
    "Thanks, " + visitorName + "! Your demo form worked. This practice form does not send a real email.";

  // Clear the fields after displaying the confirmation.
  contactForm.reset();
});
