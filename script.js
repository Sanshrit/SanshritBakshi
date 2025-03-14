// Navigation and scroll effects
document.addEventListener('DOMContentLoaded', function() {
    // Mobile navigation toggle
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    
    hamburger.addEventListener('click', function() {
        navLinks.classList.toggle('active');
        hamburger.classList.toggle('active');
    });
    
    // Close mobile menu when clicking a link
    const navItems = document.querySelectorAll('.nav-links a');
    navItems.forEach(item => {
        item.addEventListener('click', function() {
            if (navLinks.classList.contains('active')) {
                navLinks.classList.remove('active');
                hamburger.classList.remove('active');
            }
        });
    });
    
    // Sticky navbar
    const navbar = document.getElementById('navbar');
    const heroSection = document.querySelector('.hero');
    let heroHeight = heroSection.offsetHeight;
    
    function updateNavbar() {
        if (window.scrollY > 50) {
            navbar.style.padding = '10px 0';
            navbar.style.boxShadow = '0 5px 15px rgba(0, 0, 0, 0.1)';
        } else {
            navbar.style.padding = '20px 0';
            navbar.style.boxShadow = 'none';
        }
    }
    
    // Active navigation link based on scroll position
    const sections = document.querySelectorAll('section');
    
    function setActiveLink() {
        let current = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop - 100;
            const sectionHeight = section.offsetHeight;
            
            if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
                current = section.getAttribute('id');
            }
        });
        
        navItems.forEach(item => {
            item.classList.remove('active');
            if (item.getAttribute('href') === `#${current}`) {
                item.classList.add('active');
            }
        });
    }
    
    // Scroll animations
    const scrollElements = document.querySelectorAll('.timeline-item, .project-card, .skill-category, .research-item');
    
    function addScrollAnimation() {
        scrollElements.forEach(element => {
            element.classList.add('scroll-animation');
        });
    }
    
    function checkScrollAnimation() {
        scrollElements.forEach(element => {
            const elementPosition = element.getBoundingClientRect().top;
            const screenPosition = window.innerHeight * 0.85;
            
            if (elementPosition < screenPosition) {
                element.classList.add('active');
            }
        });
    }
    
    // Contact form handling
    const contactForm = document.getElementById('contactForm');
    
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form data
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const subject = document.getElementById('subject').value;
        const message = document.getElementById('message').value;
        
        // In a real implementation, you would send this data to a server
        // For GitHub Pages, you could use a service like FormSpree
        
        // For now, just show an alert
        alert(`Thank you for your message, ${name}! Since this is hosted on GitHub Pages, this form doesn't actually send an email. In a real implementation, you would integrate with a form service like FormSpree or Netlify Forms.`);
        
        // Reset the form
        contactForm.reset();
    });
    
    // TypeWriter effect for the hero section
    const typeWriter = function() {
        const heroTitle = document.querySelector('.hero h1');
        const heroSubtitle = document.querySelector('.hero h2');
        const heroParagraph = document.querySelector('.hero p');
        const heroButtons = document.querySelector('.hero-buttons');
        const socialLinks = document.querySelector('.social-links');
        
        setTimeout(() => {
            heroTitle.classList.add('fade-in');
        }, 300);
        
        setTimeout(() => {
            heroSubtitle.classList.add('fade-in');
        }, 800);
        
        setTimeout(() => {
            heroParagraph.classList.add('fade-in');
        }, 1300);
        
        setTimeout(() => {
            heroButtons.classList.add('fade-in');
        }, 1800);
        
        setTimeout(() => {
            socialLinks.classList.add('fade-in');
        }, 2300);
    };
    
    // Theme toggler implementation
    function setupThemeToggler() {
        // Create the theme toggle button
        const toggleBtn = document.createElement('button');
        toggleBtn.classList.add('theme-toggle');
        toggleBtn.innerHTML = '<i class="fas fa-moon"></i>';
        toggleBtn.setAttribute('title', 'Toggle dark/light mode');
        document.body.appendChild(toggleBtn);
        
        // Check for saved user preference
        const currentTheme = localStorage.getItem('theme');
        
        if (currentTheme) {
            document.documentElement.setAttribute('data-theme', currentTheme);
            
            if (currentTheme === 'dark') {
                toggleBtn.innerHTML = '<i class="fas fa-sun"></i>';
            }
        }
        
        // Theme toggle functionality
        toggleBtn.addEventListener('click', function() {
            let theme = document.documentElement.getAttribute('data-theme');
            
            if (theme === 'dark') {
                document.documentElement.setAttribute('data-theme', 'light');
                toggleBtn.innerHTML = '<i class="fas fa-moon"></i>';
                localStorage.setItem('theme', 'light');
            } else {
                document.documentElement.setAttribute('data-theme', 'dark');
                toggleBtn.innerHTML = '<i class="fas fa-sun"></i>';
                localStorage.setItem('theme', 'dark');
            }
        });
    }
    
    // Init functions
    updateNavbar();
    setActiveLink();
    addScrollAnimation();
    checkScrollAnimation();
    typeWriter();
    setupThemeToggler(); // This will now create and add the theme toggle button
    
    // Event listeners
    window.addEventListener('scroll', function() {
        updateNavbar();
        setActiveLink();
        checkScrollAnimation();
    });
    
    window.addEventListener('resize', function() {
        heroHeight = heroSection.offsetHeight;
    });
});