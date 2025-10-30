// Navigation functionality
document.addEventListener('DOMContentLoaded', function() {
    // Navigation dropdown functionality
    const navItems = document.querySelectorAll('.nav-item');
    
    navItems.forEach(item => {
        const btn = item.querySelector('.nav-btn');
        
        btn.addEventListener('click', function() {
            // Close all other nav items
            navItems.forEach(otherItem => {
                if (otherItem !== item) {
                    otherItem.classList.remove('active');
                }
            });
            
            // Toggle current item
            item.classList.toggle('active');
        });
    });
    
    // Close nav dropdowns when clicking outside
    document.addEventListener('click', function(e) {
        if (!e.target.closest('.nav-item')) {
            navItems.forEach(item => {
                item.classList.remove('active');
            });
        }
    });
    
    // Animation for mission/vision cards on scroll
    const observerOptions = {
        threshold: 0.2,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-card');
            }
        });
    }, observerOptions);
    
    const cards = document.querySelectorAll('.mv-card');
    cards.forEach(card => {
        observer.observe(card);
    });
});

// Common utility functions
function formatDate(dateString) {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
        year: 'numeric', 
        month: 'short', 
        day: 'numeric' 
    });
}

function showMessage(text, type, container) {
    const messageDiv = document.createElement('div');
    messageDiv.className = `message ${type}`;
    messageDiv.textContent = text;
    messageDiv.style.cssText = `
        padding: 12px;
        border-radius: 6px;
        margin-bottom: 20px;
        text-align: center;
    `;
    
    if (type === 'error') {
        messageDiv.style.backgroundColor = '#ffebee';
        messageDiv.style.color = '#c62828';
        messageDiv.style.border = '1px solid #ffcdd2';
    } else if (type === 'success') {
        messageDiv.style.backgroundColor = '#e8f5e9';
        messageDiv.style.color = '#2e7d32';
        messageDiv.style.border = '1px solid #c8e6c9';
    }
    
    container.insertBefore(messageDiv, container.firstChild);
    
    // Remove message after 5 seconds
    setTimeout(() => {
        messageDiv.remove();
    }, 5000);
}