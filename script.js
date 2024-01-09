// script.js

document.getElementById('contactForm').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent the default form submission

    // Collect form data
    const formData = new FormData(event.target);
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
            
            button.value = 'Enviado'; // Change text to enviado
            button.disabled = true; // Optionally disable the button after clicking
            button.style.cursor = 'not-allowed'; // Cursos
            button.style.backgroundColor = 'lightgrey';
            button.style.color = 'grey';
            button.style.borderColor = 'grey';
            button.style.boxShadow = 'none';
            console.log("Button text updated to 'Enviado'");
            
        }, function (error) {
            console.error("Email send failed:", error);
            // Handle errors here
        });
});

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

// Subnavbar for Sobre Nosotros 

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
  


