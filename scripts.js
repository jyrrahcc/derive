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

    let observer;
    function handleIntersect(entries, observer) {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          if (entry.target.dataset.animated !== 'true') {
            triggerAnimation(entry.target);
            entry.target.dataset.animated = 'true';
          }
        } else {
          entry.target.dataset.animated = 'false';
        }
      });
    }

    function triggerAnimation(element) {
      if (element.classList.contains('fade-down')) {
        element.classList.remove('fade-down');
        void element.offsetWidth;
        element.classList.add('fade-down');
      } else if (element.classList.contains('fade-right')) {
        element.classList.remove('fade-right');
        void element.offsetWidth;
        element.classList.add('fade-right');
      } else if (element.classList.contains('fade-left')) {
        element.classList.remove('fade-left');
        void element.offsetWidth;
        element.classList.add('fade-left');
      } else if (element.classList.contains('fade-up')) {
        element.classList.remove('fade-up');
        void element.offsetWidth;
        element.classList.add('fade-up');
      } else {
        element.classList.remove('fade');
        void element.offsetWidth;
        element.classList.add('fade');
      }
    }

    function setupIntersectionObserver() {
      const elements = document.querySelectorAll('.animate');
      const options = {
        root: null,
        rootMargin: '80px',
        threshold: 0.1
      };

      observer = new IntersectionObserver(handleIntersect, options);

      elements.forEach(element => {
        observer.observe(element);
      });
    }
    
    document.addEventListener('DOMContentLoaded', setupIntersectionObserver);


    // Example starter JavaScript for disabling form submissions if there are invalid fields
(function () {
    'use strict'

    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.querySelectorAll('.needs-validation')

    // Loop over them and prevent submission
    Array.prototype.slice.call(forms)
        .forEach(function (form) {
            form.addEventListener('submit', function (event) {
                if (!form.checkValidity()) {
                    event.preventDefault()
                    event.stopPropagation()
                }

                form.classList.add('was-validated')
            }, false)
        })
})()
