document.addEventListener('DOMContentLoaded', function () {
    // Initialize AOS (Animate On Scroll)
    AOS.init({
        duration: 800, // Animation duration in milliseconds
        once: false, // Whether animation should happen only once
    });

    // Typing animation
    const typingText = "I'm a chemist who loves coding.";
    const element = document.getElementById("typing-text");
    element.classList.add("typing-effect"); // Add typing effect class
    
    let index = 0;
    const speed = 100; // Speed of typing in milliseconds
    element.textContent = ""; // Clear existing text

    function type() {
        if (index < typingText.length) {
            element.textContent += typingText.charAt(index); // Add one character
            index++;
            setTimeout(type, speed); // Call function again after 'speed' milliseconds
        }
    }

    type(); // Start typing animation
});

