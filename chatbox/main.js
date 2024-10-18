// JavaScript for handling "Learn More" button interaction
document.getElementById("learn-more-btn").addEventListener("click", function() {
    alert("Thank you for your interest! Explore our services and get in touch.");
});

// JavaScript for contact form submission handling
document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form from refreshing the page
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    // Simple validation for empty fields
    if (name === "" || email === "" || message === "") {
        alert("Please fill in all fields.");
    } else {
        alert(`Thank you, ${name}! We have received your message.`);
        // Here, you can add AJAX to submit the form data to the server if required.
        // Reset the form after submission
        document.getElementById("contact-form").reset();
    }
});
