// Easescan Website JavaScript

// Mobile Menu Toggle
const mobileMenuBtn = document.getElementById('mobile-menu-btn');
const mobileMenu = document.getElementById('mobile-menu');

if (mobileMenuBtn && mobileMenu) {
    mobileMenuBtn.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
    });
    
    // Close mobile menu when clicking on a link
    const mobileLinks = mobileMenu.querySelectorAll('a');
    mobileLinks.forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu.classList.add('hidden');
        });
    });
}

// FAQ Accordion
const faqQuestions = document.querySelectorAll('.faq-question');

faqQuestions.forEach(question => {
    question.addEventListener('click', () => {
        const answer = question.nextElementSibling;
        const icon = question.querySelector('.faq-icon');
        
        // Toggle current FAQ
        answer.classList.toggle('hidden');
        answer.classList.toggle('show');
        icon.classList.toggle('rotate');
        
        // Close other FAQs (optional - remove if you want multiple open)
        faqQuestions.forEach(otherQuestion => {
            if (otherQuestion !== question) {
                const otherAnswer = otherQuestion.nextElementSibling;
                const otherIcon = otherQuestion.querySelector('.faq-icon');
                otherAnswer.classList.add('hidden');
                otherAnswer.classList.remove('show');
                otherIcon.classList.remove('rotate');
            }
        });
    });
});

// Language Switching
function switchLanguage(lang) {
    const currentFile = window.location.pathname.split('/').pop();
    
    // Map language codes to file names
    const langMap = {
        'en': 'index.html',
        'es': 'es.html',
        'fr': 'fr.html'
    };
    
    const targetFile = langMap[lang];
    
    if (targetFile && currentFile !== targetFile) {
        window.location.href = targetFile;
    }
}

// Contact Form Handling
const contactForm = document.getElementById('contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;
        
        // For HostPapa without database, we'll use mailto link
        const subject = encodeURIComponent('Contact from Easescan Website');
        const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`);
        
        // Open email client
        window.location.href = `mailto:info@easescan.com?subject=${subject}&body=${body}`;
        
        // Show success message
        const successDiv = document.createElement('div');
        successDiv.className = 'form-success show';
        successDiv.textContent = 'Thank you for your message! Your email client should open shortly.';
        contactForm.appendChild(successDiv);
        
        // Reset form
        contactForm.reset();
        
        // Remove success message after 5 seconds
        setTimeout(() => {
            successDiv.remove();
        }, 5000);
    });
}

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const headerOffset = 80;
            const elementPosition = target.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
            
            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// Add active state to navigation based on scroll position
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('nav a[href^="#"]');
    
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (window.pageYOffset >= sectionTop - 100) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('text-blue-600');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('text-blue-600');
        }
    });
});

// Image lazy loading optimization
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.src; // Trigger load
                observer.unobserve(img);
            }
        });
    });
    
    document.querySelectorAll('img').forEach(img => {
        imageObserver.observe(img);
    });
}

// Add loading state to buttons
document.querySelectorAll('button[type="submit"]').forEach(button => {
    button.addEventListener('click', function() {
        const originalText = this.textContent;
        this.innerHTML = '<span class="spinner"></span> Sending...';
        this.disabled = true;
        
        setTimeout(() => {
            this.innerHTML = originalText;
            this.disabled = false;
        }, 3000);
    });
});
