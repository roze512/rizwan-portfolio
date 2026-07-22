// Portfolio website loaded
console.log("Rizwan Portfolio Website Loaded Successfully!");

window.addEventListener("load", () => {
    const text = "Full-Stack AI Engineering Intern";
    const typingElement = document.getElementById("typing-text");

    if (!typingElement) return;

    let index = 0;

    function type() {
        if (index < text.length) {
            typingElement.textContent += text.charAt(index);
            index++;
            setTimeout(type, 70);
        }
    }

    type();
});
// ===== Navbar Scroll Blur Effect =====

window.addEventListener("scroll", () => {

    const navbar = document.querySelector(".navbar");

    if (window.scrollY > 50) {
        navbar.classList.add("scrolled");
    } 
    else {
        navbar.classList.remove("scrolled");
    }

});