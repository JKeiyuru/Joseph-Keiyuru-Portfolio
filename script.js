let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick =() =>{
    menuIcon.classList.toggle('bx-x-circle');
   navbar.classList.toggle('active');
}


let sections = document.querySelectorAll('section')
let navlinks =  document.querySelectorAll('header nav a')

window.onscroll = () => {
    sections.forEach(sec =>{
        let top = window.scrollY;
        let offset =sec.offsetTop -150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height){
            navlinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*= ' + id + ']').classList.add('active');
            })
        }
    })
    menuIcon.classList.remove('bx-x-circle');
   navbar.classList.remove('active');
}

window.onload = function() {
    ScrollReveal({
        // reset: true,
        distance: '80px',
        duration: 2000,
        delay: 200
    });

    ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
    ScrollReveal().reveal('.home-img, .services-container, .portfolio-box, .contact form', { origin: 'bottom' });
    ScrollReveal().reveal('.home-content h1, .about-img', { origin: 'left' });
    ScrollReveal().reveal('.home-content p, .about-content', { origin: 'right' });

};



const typed = new Typed('.multiple-text',{
    strings: ['Fullstack Developer','Graphic Designer', 'UI/UX Designer'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});




// Function to toggle the visibility of the additional content
function toggleAboutContent() {
    var moreContent = document.getElementById("more-content");
    var button = document.getElementById("read-more-btn");

    if (moreContent.style.display === "none" || moreContent.style.display === "") {
        moreContent.style.display = "block"; // Show the content
        moreContent.style.opacity = "1"; // Set opacity for fade-in effect
        button.innerText = "Show Less"; // Change button text
    } else {
        moreContent.style.display = "none"; // Hide the content
        moreContent.style.opacity = "0"; // Set opacity for fade-out effect
        button.innerText = "Read More"; // Reset button text
    }
}

// Ensure the additional content is hidden on page load
document.addEventListener("DOMContentLoaded", function() {
    var moreContent = document.getElementById("more-content");
    moreContent.style.display = "none"; // Hide content initially
    moreContent.style.opacity = "0"; // Set opacity to 0 for fade-in effect
});

// Attach the toggle function to the button click event
document.getElementById('read-more-btn').addEventListener('click', toggleAboutContent);


//services
// Function to toggle the hidden content and change button text
function toggleContent(serviceId) {
    var content = document.getElementById("moreContent" + serviceId);
    var button = document.getElementById("toggleButton" + serviceId);

    if (content.style.display === "none" || content.style.display === "") {
        content.style.display = "block";  // Show the content
        button.innerText = "Show Less";  // Change button text
    } else {
        content.style.display = "none";  // Hide the content
        button.innerText = "Learn More";  // Reset button text
    }
}

// Ensure all hidden content is hidden on page load
document.addEventListener("DOMContentLoaded", function() {
    document.querySelectorAll('.hidden').forEach(function(content) {
        content.style.display = "none";  // Hide all hidden sections initially
    });
});

