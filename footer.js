// footer.js - SSAANZ Site Footer Component
document.addEventListener("DOMContentLoaded", () => {
    const footerHTML = `
        <style>
            .site-footer {
                background-color: var(--color-white);
                color: var(--color-navy);
                padding: 4rem 0 2rem 0;
                border-top: 1px solid var(--color-silver);
            }
            .footer-grid {
                display: grid;
                grid-template-columns: 1fr;
                gap: 2rem;
            }
            @media(min-width: 768px) {
                .footer-grid { grid-template-columns: 2fr 1fr 1fr; }
            }
            .footer-brand img {
                max-width: 250px;
                margin-bottom: 1rem;
            }
            .footer-links { list-style: none; }
            .footer-links li { margin-bottom: 0.5rem; }
            .footer-links a { color: var(--color-navy); }
            .footer-links a:hover { color: var(--color-earth); }
            
            .social-icon {
                display: inline-block;
                width: 32px;
                height: 32px;
                fill: var(--color-navy);
                margin-top: 1rem;
                transition: fill 0.2s ease;
            }
            .social-icon:hover { fill: var(--color-earth); }
            .footer-bottom {
                margin-top: 3rem;
                text-align: center;
                font-size: 0.85rem;
                color: #666;
            }
            .footer-bottom a {
                color: var(--color-earth);
                font-weight: 600;
            }
            .footer-bottom a:hover {
                color: var(--color-navy);
            }
            /* Semantic Address Styling */
            address {
                font-style: normal;
                line-height: 1.6;
            }
        </style>
        <footer class="site-footer">
            <div class="container footer-grid">
                <div class="footer-brand">
                    <img src="images/ssaanz-logo-header.jpg" alt="SSAANZ Logo">
                    
                    <address>
                        <strong>Lake Coleridge, NZ</strong><br>
                        +64 21 725 481<br>
                        <a href="mailto:info@ssaanz.co.nz">info@ssaanz.co.nz</a>
                    </address>
                    
                    <a href="https://www.facebook.com/SoldiersSailorsandAirmensAssocNZ" target="_blank" aria-label="Facebook">
                        <svg class="social-icon" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z"/>
                        </svg>
                    </a>
                </div>
                
                <div>
                    <h3>Quick Links</h3>
                    <ul class="footer-links">
                        <li><a href="shop.html">Shop</a></li>
                        <li><a href="about.html">About</a></li>
                        <li><a href="events.html">Events</a></li>
                    </ul>
                </div>
                
                <div>
                    <h3>Connect</h3>
                    <ul class="footer-links">
                        <li><a href="contact.html">Contact</a></li>
                        <li><a href="support.html">Supporters</a></li>
                        <li><a href="join-us.html">Join Us</a></li>
                    </ul>
                </div>
            </div>
            <div class="container footer-bottom">
                <p>&copy; 2026 Soldiers, Sailors and Airmens Association of New Zealand. By Veterans, For Veterans.</p>
                <p>Designed by <a href="https://creativestartupnz.com" target="_blank" rel="noopener noreferrer">Creative Start-up NZ</a></p>
            </div>
        </footer>
    `;
    
    document.getElementById('site-footer').innerHTML = footerHTML;
});