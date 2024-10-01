// Select all links with the class "scroll-link"
const links = document.querySelectorAll('.scroll-link');

// Add click event listener to each link
links.forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault(); // Prevent default anchor click behavior
        const targetId = this.getAttribute('href'); // Get the target element's ID
        const targetElement = document.querySelector(targetId); // Select the target element

        // Scroll to the target element minus 20px offset
        const targetPosition = targetElement.getBoundingClientRect().top + window.scrollY - 100;
        window.scrollTo({
            top: targetPosition,
            behavior: 'smooth' // Smooth scrolling
        });
    });
});

window.onscroll = function() {
    const nav = document.querySelector('.navhigh');
    if (window.scrollY > 1) { // Change '50' to the scroll position where you want the class to be added
        console.log(window.scrollY);
        nav.classList.add('bg-white');
        nav.classList.remove('navbar-dark');
        nav.classList.add('navbar-light');
        nav.classList.add('border-bottom');
    } else {
        nav.classList.remove('bg-white');
        nav.classList.add('navbar-dark');
        nav.classList.remove('navbar-light');
        nav.classList.remove('border-bottom');
    }
};