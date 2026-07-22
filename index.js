console.log("Rizwan Portfolio Website Loaded Successfully!");

window.addEventListener("load", () => {

    const text = "Full-Stack AI Engineering Intern";
    const typingElement = document.getElementById("typing-text");

    if(typingElement){
        let index = 0;

        function type(){
            if(index < text.length){
                typingElement.textContent += text.charAt(index);
                index++;
                setTimeout(type,70);
            }
        }

        type();
    }

});


// Navbar Mobile Menu

const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");

if(menuBtn){

menuBtn.addEventListener("click",()=>{

    navLinks.classList.toggle("active");

});

}