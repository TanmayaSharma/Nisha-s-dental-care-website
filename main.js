// Smooth scrolling effect for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// Highlighting active navigation link based on scroll position
window.addEventListener('scroll', () => {
    const scrollDistance = window.scrollY;

    // Get all section elements
    document.querySelectorAll('section').forEach((section, index) => {
        const navHeight = document.querySelector('nav').offsetHeight;
        const offsetTop = section.offsetTop - navHeight;
        const offsetBottom = offsetTop + section.offsetHeight;

        // Highlight the corresponding nav link when scrolling near the section
        if (scrollDistance >= offsetTop && scrollDistance < offsetBottom) {
            const currentId = section.getAttribute('id');
            document.querySelectorAll('nav a').forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${currentId}`) {
                    link.classList.add('active');
                }
            });
        }
    });
});

function redirectToNewPage() {
    // Replace 'newpage.html' with the URL of the page you want to redirect to
    window.location.href = 'newpage.html';
}

// Event listener to trigger the redirection when the button is clicked
document.addEventListener('DOMContentLoaded', function() {
    // Select the button by its ID or any other suitable selector
    var button = document.getElementById('redirectButton');

    // Add click event listener to the button
    button.addEventListener('click', function() {
        redirectToNewPage();
    });
});