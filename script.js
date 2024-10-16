document.addEventListener('DOMContentLoaded', function() {
    // Sample project data (you'll need to update this as you complete projects)
    const projects = [
        { id: 1, title: "Responsive Navbar", description: "A mobile-friendly navigation bar", link: "./projects/day-001-syntax-code-box/index.html" },
        { id: 2, title: "To-Do List App", description: "A simple to-do list application", link: "./projects/day-002-toast-notification/index.html" },
        // Add more projects here as you complete them
    ];

    // Function to create project cards
    function createProjectCard(project) {
        const card = document.createElement('div');
        card.className = 'project-card';
        card.innerHTML = `
            <h3>${project.title}</h3>
            <p>${project.description}</p>
        `;
        card.addEventListener('click', () => openPopup(project));
        return card;
    }

    // Populate the project grid
    const projectGrid = document.getElementById('project-grid');
    projects.forEach(project => {
        projectGrid.appendChild(createProjectCard(project));
    });

    // Handle form submission
    const contactForm = document.getElementById('contact-form');
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;

        // Here you would typically send this data to a server
        console.log('Form submitted:', { name, email, message });

        // Clear the form
        contactForm.reset();

        // Show a success message (you might want to improve this)
        alert('Thank you for your message! We\'ll get back to you soon.');
    });

    // Smooth scrolling for navigation
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Popup functionality
    const popupContainer = document.getElementById('popup-container');
    const popupTitle = document.getElementById('popup-title');
    const projectIframe = document.getElementById('project-iframe');
    const closePopup = document.querySelector('.close-popup');

    function openPopup(project) {
        popupTitle.textContent = project.title;
        projectIframe.src = project.link;
        popupContainer.style.display = 'block';
    }

    function closePopupHandler() {
        popupContainer.style.display = 'none';
        projectIframe.src = '';
    }

    closePopup.addEventListener('click', closePopupHandler);
    popupContainer.addEventListener('click', function(e) {
        if (e.target === popupContainer) {
            closePopupHandler();
        }
    });
});