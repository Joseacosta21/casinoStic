// script.js

// Event listener for submit button 
document.getElementById('contactForm').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent the default form submission
    handleFormSubmission();
});

// Add event listener for "keydown" on the form
document.getElementById('contactForm').addEventListener('keydown', function (event) {
    // Check if the key pressed is "Enter"
    if (event.key === 'Enter') {
        // Prevent the default form submission
        event.preventDefault();
        handleFormSubmission();
    }
});

// Form submission function
function handleFormSubmission() {
    // Collect form data
    const formData = new FormData(document.getElementById('contactForm'));
    const data = {};
    formData.forEach((value, key) => {
        data[key] = value;
    });

    // Initialize Email.js with your user ID
    emailjs.init("knFF7WO7GqcIeYPth");

    // Use Email.js to send the email
    emailjs.send("service_bshxlcw", "template_rbkw3r2", data)
        .then(function (response) {
            console.log("Email sent:", response);

            var button = document.getElementById('submitButton');

            button.value = 'Enviado'; // Change text to Enviado
            button.disabled = true; // Optionally disable the button after clicking
            button.style.cursor = 'not-allowed'; // Cursor
            button.style.backgroundColor = 'lightgrey';
            button.style.color = 'grey';
            button.style.borderColor = 'grey';
            button.style.boxShadow = 'none';
            console.log("Button text updated to 'Enviado'");

        }, function (error) {
            console.error("Email send failed:", error);
            // Handle errors here
        });
}


// FAQs revealing feature
function toggleAnswer(id) {
    var answer = document.getElementById(id);
    var arrow = document.getElementById('arrow-' + id);

    if (answer.style.display === 'block') {
        answer.style.display = 'none';
        arrow.innerHTML = '&#9660;'; // Downward-pointing chevron
    } else {
        answer.style.display = 'block';
        arrow.innerHTML = '&#9650;'; // Upward-pointing chevron
    }
}

// Video JS 
// Pause the video initially (autoplay will start it)
document.getElementById('myVideo').pause();

// Play the video on click
document.getElementById('myVideo').addEventListener('click', function() {
  this.play();
});

// Subnavbar for Sobre Nosotros 
// TODO 

// Add this to your existing JavaScript file
document.addEventListener("DOMContentLoaded", function () {
    const subNavbar = document.querySelector('.sub-navbar');
    let prevScrollPos = window.pageYOffset;
  
    window.onscroll = function () {
      const currentScrollPos = window.pageYOffset;
  
      if (prevScrollPos > currentScrollPos) {
        subNavbar.classList.add('show');
      } else {
        subNavbar.classList.remove('show');
      }
  
      prevScrollPos = currentScrollPos;
    };
  });

  // Dynamic Burger style navbar
  function toggleMenu() {
    const navLinks = document.querySelector('.navbar ul');
    navLinks.classList.toggle('show');

    const navbar = document.querySelector('.navbar');

    // Weird thing
    // navbar.style.position = (navbar.style.position === 'fixed') ? 'absolute' : 'fixed';


    // Check the current mix blend mode and toggle it
    navbar.style.mixBlendMode = (navbar.style.mixBlendMode === 'normal') ? 'inherit' : 'normal';

    // Check the current background color and toggle it
    navbar.style.backgroundColor = (navbar.style.backgroundColor === 'rgba(0, 0, 0, 0.7)') ? 'inherit' : 'rgba(0, 0, 0, 0.7)';

 }
  
  // Close the menu when a link is clicked (optional)
  document.querySelectorAll('.navbar li a').forEach(link => {
    link.addEventListener('click', () => {
      const navLinks = document.querySelector('.navbar ul');
      navLinks.classList.remove('show');
    });
  });

  
  


