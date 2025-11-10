document.addEventListener('DOMContentLoaded', () => {

    // --- DATA ---
    const products = [
      { imgSrc: "image/PRODUCT1.jpg", alt: "Hybrid Seeds", title: "HYBRID SEEDS", description: "High-yielding hybrid seeds for superior crop performance and disease resistance." },
      { imgSrc: "image/PRODUCT6.jpg", alt: "Local Seeds", title: "LOCAL SEEDS", description: "Authentic local seeds, perfectly adapted to regional climate and soil conditions for robust growth." },
      { imgSrc: "image/PRODUCT2.jpg", alt: "Organic Fertilizers", title: "ORGANIC FERTILIZERS", description: "Nourish your soil with our premium organic fertilizers, promoting healthy and sustainable growth." },
      { imgSrc: "image/PRODUCT3.jpg", alt: "Liquid Fertilizers", title: "LIQUID FERTILIZERS", description: "Fast-acting liquid fertilizers for quick nutrient absorption and vibrant plant development." },
      { imgSrc: "image/PRODUCT4.jpg", alt: "Chemical Fertilizers", title: "CHEMICAL FERTILIZERS", description: "Balanced chemical fertilizers designed for optimal growth and maximum crop yield." },
      { imgSrc: "image/PRODUCT5.jpg", alt: "Equipments", title: "EQUIPMENTS", description: "Durable and efficient agricultural equipment to streamline your farming operations." }
    ];

    const services = [
      { id: 1, icon: "🌱", title: "Modern Agriculture Consultancy", description: "आधुनिक कृषि प्रणाली सम्बन्धि सम्पूर्ण सल्लाह, सुझाव तथा परामर्श सेवा।" },
      { id: 2, icon: "👨‍🌾", title: "Plant Pesticide Training", description: "वानस्पतिक विषादीको उत्पादन विधि, प्रयोग गर्ने तरिका तथा व्यवस्थापन सम्बन्धि तालिम सञ्चालन।" },
      { id: 3, icon: "🌾", title: "Advanced Seed Varieties & Consultancy", description: "उन्नत जातका बीउ बिजन उपलब्ध गराउनुका साथै स्थानीय स्तरबाटै बीउ उत्पादन तथा व्यवस्थापन सम्बन्धि परामर्श सेवा।" },
      { id: 4, icon: "🧪", title: "Chemical Fertilizer Guidance", description: "रसायनिक मल उपलब्ध गराउनुका साथै यसको प्रयोग विधि, प्रयोग मात्रा तथा सुरक्षित व्यवस्थापन सम्बन्धि परामर्श सेवा।" },
      { id: 5, icon: "🛡️", title: "Pesticide Awareness Programs", description: "रसायनिक विषादी उपलब्ध गराउनुका साथै यसको प्रयोग विधि, प्रयोग मात्रा, पर्खने अवधि देखि सुरक्षित व्यवस्थापन सम्मका सबै प्रक्रिया बारे जनचेतनामूलक कार्यक्रम सञ्चालन।" },
      { id: 6, icon: "🌿", title: "Organic Fertilizer Support", description: "स्थानीय स्तरमै सहजै उत्पादन हुने प्राङ्गारिक मलको प्रयोग साथै व्यवस्थापन सम्बन्धि सल्लाह तथा सुझावको सुविधा।" },
      { id: 7, icon: "🍎", title: "Healthy Crop Production", description: "स्वच्छ पर्यावरणीय सन्तुलनलाई जोगाउदै स्वस्थ र अर्गानिक बाली तथा फलफूलको उत्पादन मात्रा बढाउने अर्गानिक मल उपलब्ध गराउनुका साथै यसको प्रयोग विधि, प्रयोग मात्रा तथा सुरक्षित व्यवस्थापन सम्बन्धि परामर्श सेवा।" },
      { id: 8, icon: "🚜", title: "Agricultural Equipment Management", description: "कृषि कार्यलाई सहज बनाउन आवश्यक विभिन्न कृषि उपकरणहरुको व्यवस्था।" },
    ];

    const aboutContent = { title: "About Us: Your Trusted Partner in Agriculture", description: "RP Agriculture Store is a leading agricultural hub in Kamal Rural Municipality, Jhapa, Nepal. We provide a comprehensive range of high-quality agricultural products and are committed to empowering local farmers with the tools, knowledge, and modern solutions they need to thrive in today's farming landscape. Our core focus is on providing expert guidance and unwavering support through every stage of the cultivation cycle. We are dedicated to helping our farming community achieve sustainable growth and prosperity.", link: "#about" };
    const ownerContent = { title: "Meet the Founder: Ram Prasad Bhattarai", description: "Hello, I'm Ram Prasad Bhattarai. Raised in a humble farming family, I spent nearly a decade working abroad before returning with a resolve to contribute to my community. I established this business to empower local farmers by enhancing productivity through awareness of fertilizers, quality seeds, and modern equipment. My mission is to support sustainable growth and uplift the livelihoods of those who nurture our land. My philosophy is simple: to blend traditional farming wisdom with modern agricultural advancements. We are more than just a supplier; we are partners in your growth, dedicated to providing personalized advice and reliable products that you can trust. Your success is our success, and together, we can cultivate a thriving agricultural future.", link: "#owner" };


    // --- DYNAMIC CONTENT RENDERING ---
    const productsGrid = document.getElementById('products-grid');
    if (productsGrid) {
        productsGrid.innerHTML = products.map(product => `
            <div class="product-card">
                <div class="product-card-image">
                    <img src="${product.imgSrc}" alt="${product.alt}" />
                </div>
                <div class="product-card-content">
                    <h3>${product.title}</h3>
                    <p>${product.description}</p>
                </div>
            </div>
        `).join('');
    }

    const servicesGrid = document.getElementById('services-grid');
    if (servicesGrid) {
        servicesGrid.innerHTML = services.map(service => `
            <div class="service-card">
                <div class="service-icon">${service.icon}</div>
                <h3>${service.title}</h3>
                <p>${service.description}</p>
            </div>
        `).join('');
    }

    // --- THEME SWITCHER ---
    const themeSwitcherContainer = document.getElementById('theme-switcher-container');
    if (themeSwitcherContainer) {
        themeSwitcherContainer.innerHTML = `
            <div class="theme-switcher">
                <button id="theme-toggle-button" aria-label="Toggle theme">
                    <!-- Icon will be set by JS -->
                </button>
                <ul class="theme-dropdown" id="theme-dropdown">
                    <li><button data-theme-value="light"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line></svg> <span>Light</span></button></li>
                    <li><button data-theme-value="dark"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg> <span>Dark</span></button></li>
                    <li><button data-theme-value="system"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect><line x1="8" y1="21" x2="16" y2="21"></line><line x1="12" y1="17" x2="12" y2="21"></line></svg> <span>System</span></button></li>
                </ul>
            </div>
        `;

        const themeToggleButton = document.getElementById('theme-toggle-button');
        const themeDropdown = document.getElementById('theme-dropdown');
        const themeButtons = document.querySelectorAll('[data-theme-value]');

        const sunIcon = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line></svg>`;
        const moonIcon = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>`;

        const getSystemTheme = () => window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';

        const applyTheme = (theme) => {
            let resolvedTheme = theme;
            if (theme === 'system') {
                resolvedTheme = getSystemTheme();
            }
            document.documentElement.setAttribute('data-theme', resolvedTheme);
            if (themeToggleButton) {
                themeToggleButton.innerHTML = resolvedTheme === 'dark' ? moonIcon : sunIcon;
            }
            themeButtons.forEach(btn => {
                btn.classList.toggle('active', btn.dataset.themeValue === theme);
            });
        };

        let currentTheme = localStorage.getItem('theme') || 'system';
        applyTheme(currentTheme);

        themeToggleButton.addEventListener('click', (e) => {
            e.stopPropagation();
            themeDropdown.classList.toggle('open');
        });

        document.addEventListener('click', () => themeDropdown.classList.remove('open'));

        themeButtons.forEach(button => {
            button.addEventListener('click', () => {
                currentTheme = button.dataset.themeValue;
                localStorage.setItem('theme', currentTheme);
                if (currentTheme === 'system') localStorage.removeItem('theme');
                applyTheme(currentTheme);
                themeDropdown.classList.remove('open');
            });
        });
        
        window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', () => {
            if (currentTheme === 'system') {
                applyTheme('system');
            }
        });
    }


    // --- NAVIGATION & SCROLL ---
    const navBar = document.getElementById('navigation-bar');
    window.addEventListener('scroll', () => {
        navBar.classList.toggle('scrolled', window.scrollY > 50);
    });

    const scrollToTopButton = document.getElementById('scroll-to-top');
    window.addEventListener('scroll', () => {
        scrollToTopButton.classList.toggle('show', window.scrollY > 300);
    });
    scrollToTopButton.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));


    // --- MOBILE MENU ---
    const menuToggle = document.getElementById('menu-toggle');
    const mobileMenu = document.getElementById('mobile-menu');
    const mobileMenuOverlay = document.getElementById('mobile-menu-overlay');
    const hamburgerIcon = menuToggle.querySelector('.hamburger-icon');
    const closeIcon = menuToggle.querySelector('.close-icon');

    const toggleMenu = (open) => {
        const isOpen = typeof open === 'boolean' ? open : !mobileMenu.classList.contains('open');
        mobileMenu.classList.toggle('open', isOpen);
        mobileMenuOverlay.classList.toggle('open', isOpen);
        document.body.style.overflow = isOpen ? 'hidden' : '';
        hamburgerIcon.style.display = isOpen ? 'none' : 'block';
        closeIcon.style.display = isOpen ? 'block' : 'none';
    };

    menuToggle.addEventListener('click', () => toggleMenu());
    mobileMenuOverlay.addEventListener('click', () => toggleMenu(false));
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => toggleMenu(false));
    });

    // --- INTERSECTION OBSERVER FOR ANIMATIONS ---
    const animatedSections = document.querySelectorAll('.animate-on-scroll');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });
    animatedSections.forEach(section => observer.observe(section));


    // --- SEARCH FUNCTIONALITY ---
    const servicesSection = document.getElementById('services');
    const searchResultsSection = document.getElementById('search-results-section');
    const searchResultsContainer = document.getElementById('search-results-container');
    const searchResultsHeading = document.getElementById('search-results-heading');

    const handleSearch = (query) => {
        const lowerCaseQuery = query.toLowerCase();

        if (!lowerCaseQuery.trim()) {
            clearSearch();
            return;
        }

        const serviceResults = services
            .filter(s => s.title.toLowerCase().includes(lowerCaseQuery) || s.description.toLowerCase().includes(lowerCaseQuery))
            .map(s => ({ type: 'service', title: s.title, description: s.description, link: '#services', icon: s.icon }));

        const productResults = products
            .filter(p => p.title.toLowerCase().includes(lowerCaseQuery) || p.description.toLowerCase().includes(lowerCaseQuery))
            .map(p => ({ type: 'product', title: p.title, description: p.description, link: '#products', imgSrc: p.imgSrc }));
        
        const sectionResults = [];
        if (aboutContent.title.toLowerCase().includes(lowerCaseQuery) || aboutContent.description.toLowerCase().includes(lowerCaseQuery)) {
            sectionResults.push({ type: 'section', title: "Match in 'About Us'", description: aboutContent.description.substring(0, 150) + '...', link: aboutContent.link, icon: 'ℹ️' });
        }
        if (ownerContent.title.toLowerCase().includes(lowerCaseQuery) || ownerContent.description.toLowerCase().includes(lowerCaseQuery)) {
            sectionResults.push({ type: 'section', title: "Match in 'Meet the Founder'", description: ownerContent.description.substring(0, 150) + '...', link: ownerContent.link, icon: '👤' });
        }

        const allResults = [...productResults, ...serviceResults, ...sectionResults];
        displayResults(allResults, query);
    };

    const displayResults = (results, query) => {
        servicesSection.style.display = 'none';
        searchResultsSection.style.display = 'block';
        searchResultsHeading.innerHTML = `<h2>Search Results for "${query}"</h2>`;
        
        if (results.length > 0) {
            searchResultsContainer.innerHTML = results.map(result => `
                <div class="result-card">
                    ${result.imgSrc ? `<div class="result-image-container"><img src="${result.imgSrc}" alt="${result.title}" /></div>` : ''}
                    ${result.icon && !result.imgSrc ? `<div class="result-icon-container">${result.icon}</div>` : ''}
                    <span class="result-type-badge">${result.type}</span>
                    <h3>${result.title}</h3>
                    <p>${result.description}</p>
                    <a href="${result.link}" class="btn btn-primary">View Section</a>
                </div>
            `).join('');
        } else {
            searchResultsContainer.innerHTML = `<p style="text-align: center; color: var(--text-secondary); font-size: 1.1em; grid-column: 1 / -1;">No results found for "${query}". Please try another search term.</p>`;
        }
        searchResultsSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    };

    const clearSearch = () => {
        servicesSection.style.display = 'block';
        searchResultsSection.style.display = 'none';
        document.querySelectorAll('.search-form input').forEach(input => input.value = '');
    };

    document.querySelectorAll('.search-form').forEach(form => {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            const input = form.querySelector('input');
            handleSearch(input.value.trim());
            if (mobileMenu.classList.contains('open')) toggleMenu(false);
        });
    });
    
    document.querySelectorAll('.nav-logo, .nav-links a').forEach(link => {
        link.addEventListener('click', (e) => {
            if (e.currentTarget.getAttribute('href').startsWith('#')) {
                clearSearch();
            }
        });
    });

    // --- CONTACT FORM ---
    const contactForm = document.getElementById('contact-form');
    const formContainer = document.getElementById('form-container');
    const successMessage = document.getElementById('form-success-message');
    const resetButton = document.getElementById('reset-form-button');

    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const submitButton = contactForm.querySelector('button');
        submitButton.textContent = 'Sending...';
        submitButton.disabled = true;

        setTimeout(() => {
            formContainer.style.display = 'none';
            successMessage.style.display = 'flex';
        }, 1500);
    });
    
    resetButton.addEventListener('click', () => {
        const submitButton = contactForm.querySelector('button');
        contactForm.reset();
        submitButton.textContent = 'Send Message';
        submitButton.disabled = false;
        formContainer.style.display = 'block';
        successMessage.style.display = 'none';
    });
    
    // --- ADS & SOCIAL WIDGETS ---
    document.querySelectorAll('.ad-banner-section').forEach(adSection => {
        new IntersectionObserver(([entry], obs) => {
            if (entry.isIntersecting) {
                try {
                    (window.adsbygoogle = window.adsbygoogle || []).push({});
                } catch (e) {
                    console.error('AdSense error:', e);
                }
                obs.disconnect(); // Push ad only once
            }
        }, { threshold: 0.1 }).observe(adSection);
    });

    const socialFeedSection = document.getElementById('social-feed');
    if (socialFeedSection) {
        new IntersectionObserver(([entry], obs) => {
            if (entry.isIntersecting) {
                // TikTok
                if (!document.querySelector('script[src="https://www.tiktok.com/embed.js"]')) {
                    const tiktokScript = document.createElement('script');
                    tiktokScript.src = "https://www.tiktok.com/embed.js";
                    tiktokScript.async = true;
                    document.body.appendChild(tiktokScript);
                }
                // Facebook
                if (!document.getElementById('facebook-jssdk')) {
                    const fbScript = document.createElement('script');
                    fbScript.id = 'facebook-jssdk';
                    fbScript.src = "https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v20.0";
                    fbScript.async = true;
                    fbScript.defer = true;
                    fbScript.crossOrigin = 'anonymous';
                    document.body.appendChild(fbScript);
                } else if (window.FB) {
                    window.FB.XFBML.parse();
                }
                obs.disconnect(); // Load scripts only once
            }
        }, { threshold: 0.1 }).observe(socialFeedSection);
    }
});
