// header.js - SSAANZ Site Header Component
document.addEventListener("DOMContentLoaded", () => {
    const headerHTML = `
        <style>
            .site-nav {
                background-color: var(--color-white);
                box-shadow: 0 2px 10px rgba(0,0,0,0.05);
                position: sticky;
                top: 0;
                z-index: 1000;
            }
            .nav-container {
                display: flex;
                justify-content: space-between;
                align-items: center;
                padding: 1rem 0;
            }
            .nav-logo img {
                max-height: 70px;
                width: auto;
                display: block;
            }
            .nav-links {
                display: none;
                list-style: none;
                gap: 2rem;
            }
            .nav-links a {
                color: var(--color-navy);
                font-weight: 600;
                font-size: 0.95rem;
                text-transform: uppercase;
            }
            .nav-links a:hover {
                color: var(--color-earth);
            }
            /* Basic Mobile Menu Toggle for future implementation */
            .mobile-menu-btn {
                display: block;
                background: none;
                border: none;
                font-size: 1.5rem;
                color: var(--color-navy);
                cursor: pointer;
            }
            @media(min-width: 850px) {
                .nav-links { display: flex; }
                .mobile-menu-btn { display: none; }
            }
        </style>
        <nav class="site-nav">
            <div class="container nav-container">
                <a href="index.html" class="nav-logo" aria-label="SSAANZ Homepage">
                    <img src="images/ssaanz-logo-header.jpg" alt="SSAANZ Logo">
                </a>
                <button class="mobile-menu-btn" aria-label="Open Menu">☰</button>
                <ul class="nav-links">
                    <li><a href="index.html">Home</a></li>
                    <li><a href="about.html">About</a></li>
                    <li><a href="membership.html">Memberships</a></li>
                    <li><a href="events.html">Events</a></li>
                    <li><a href="shop.html">Shop</a></li>
                    <li><a href="donate.html">Donate</a></li>
                    <li><a href="contact.html">Contact</a></li>
                </ul>
            </div>
        </nav>
    `;
    
    document.getElementById('site-header').innerHTML = headerHTML;
});