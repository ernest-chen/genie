/**
 * Tech Genie Navigation Component
 * Shared navigation component for consistent navigation across all pages
 */

class TechGenieNavigation {
    constructor() {
        this.baseNavigationItems = [
            {
                href: 'index.html',
                icon: 'fas fa-home',
                text: 'Home',
                isHome: true
            },
            {
                href: 'public_clouds.html',
                icon: 'fas fa-cloud',
                text: 'Cloud Comparison'
            },
            {
                href: 'data_platform.html',
                icon: 'fas fa-database',
                text: 'Data Platform'
            },
            {
                href: 'devops.html',
                icon: 'fas fa-cogs',
                text: 'DevSecOps'
            },
            {
                href: 'design_patterns.html',
                icon: 'fas fa-code',
                text: 'Design Patterns'
            },
            {
                href: 'ai_engineering.html',
                icon: 'fas fa-robot',
                text: 'AI Engineering'
            },
            {
                href: 'ai_intro.html',
                icon: 'fas fa-brain',
                text: 'AI Introduction'
            },
            {
                href: 'rest_rpc.html',
                icon: 'fas fa-exchange-alt',
                text: 'API Protocols'
            },
            {
                href: 'transformation.html',
                icon: 'fas fa-rocket',
                text: 'Transformation'
            },
            {
                href: 'adtech.html',
                icon: 'fas fa-bullhorn',
                text: 'AdTech'
            },
            {
                href: 'seo_geo_aeo.html',
                icon: 'fas fa-search',
                text: 'SEO/GEO/AEO'
            },
            {
                href: 'companies/index.html',
                icon: 'fas fa-building',
                text: 'Companies'
            }
        ];
        
        // Determine if we're in a subdirectory and adjust paths accordingly
        this.isSubdirectory = this.detectSubdirectory();
        this.navigationItems = this.adjustPaths();
    }

    /**
     * Detect if we're in a subdirectory
     * @returns {boolean}
     */
    detectSubdirectory() {
        const currentPath = window.location.pathname;
        const pathSegments = currentPath.split('/').filter(segment => segment !== '');
        
        // Check if we're in a subdirectory (more than just the filename)
        return pathSegments.length > 1;
    }

    /**
     * Adjust navigation paths based on current location
     * @returns {Array}
     */
    adjustPaths() {
        if (!this.isSubdirectory) {
            return this.baseNavigationItems;
        }

        return this.baseNavigationItems.map(item => {
            const adjustedItem = { ...item };
            
            // For subdirectories, add ../ prefix to all paths except the current directory
            if (item.href.startsWith('companies/')) {
                // Keep companies path as is if we're in companies directory
                adjustedItem.href = item.href;
            } else {
                // Add ../ prefix for all other paths
                adjustedItem.href = '../' + item.href;
            }
            
            return adjustedItem;
        });
    }

    /**
     * Generate top navigation HTML
     * @param {string} currentPage - Current page identifier
     * @returns {string} HTML string for top navigation
     */
    generateTopNavigation(currentPage = '') {
        const currentPath = this.getCurrentPagePath();
        const isHomePage = currentPath === 'index.html' || currentPath === '';
        
        return `
            <nav class="bg-white shadow-lg sticky top-0 z-50">
                <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div class="flex justify-between items-center h-16">
                        <div class="flex items-center">
                            <a href="https://github.com/ernest-chen/genie" target="_blank" rel="noopener noreferrer" class="mr-4 hover:scale-110 transition-transform duration-300">
                                <img src="https://avatars.githubusercontent.com/u/29280406?s=48&v=4" alt="Tech Genie Logo" class="w-10 h-10 rounded-full border-2 border-gray-200 shadow-md hover:shadow-lg transition-shadow duration-300">
                            </a>
                            <h1 class="text-xl font-bold text-gray-800">Tech Genie</h1>
                        </div>
                        <div class="flex space-x-6">
                            ${this.navigationItems.map(item => {
                                const isActive = this.isActivePage(item.href, currentPath);
                                const activeClass = isActive ? 'text-[#007AFF] border-b-2 border-[#007AFF]' : 'text-[#425466] hover:text-[#007AFF]';
                                return `
                                    <a href="${item.href}" class="${activeClass} px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200">
                                        <i class="${item.icon} mr-2"></i>${item.text}
                                    </a>
                                `;
                            }).join('')}
                        </div>
                    </div>
                </div>
            </nav>
        `;
    }

    /**
     * Generate footer navigation HTML
     * @returns {string} HTML string for footer navigation
     */
    generateFooterNavigation() {
        return `
            <footer class="bg-gray-800 text-white py-12">
                <div class="container mx-auto px-4 text-center">
                    <div class="mb-8">
                        <h3 class="text-2xl font-bold mb-4">
                            <i class="fas fa-magic mr-2"></i>Tech Genie
                        </h3>
                        <p class="text-gray-400 max-w-2xl mx-auto">
                            Empowering developers, architects, and teams with comprehensive knowledge 
                            and practical insights for modern technology adoption.
                        </p>
                    </div>
                    <div class="border-t border-gray-700 pt-8">
                        <div class="flex justify-center space-x-6 mb-4">
                            ${this.navigationItems.filter(item => !item.isHome).map(item => `
                                <a href="${item.href}" class="text-gray-400 hover:text-white transition-colors">
                                    <i class="${item.icon} mr-2"></i>${item.text}
                                </a>
                            `).join('')}
                        </div>
                        <p class="text-gray-500 text-sm">© 2025 Tech Genie. Built with ❤️ for the developer community.</p>
                    </div>
                </div>
            </footer>
        `;
    }

    /**
     * Get current page path
     * @returns {string} Current page path
     */
    getCurrentPagePath() {
        const pathname = window.location.pathname;
        const pathSegments = pathname.split('/').filter(segment => segment !== '');
        
        if (pathSegments.length === 0) {
            return 'index.html';
        }
        
        // If we're in a subdirectory, return the full relative path
        if (pathSegments.length > 1) {
            return pathSegments.join('/');
        }
        
        // If we're in the root directory, return just the filename
        return pathSegments[0];
    }

    /**
     * Check if a navigation item is the active page
     * @param {string} itemHref - Navigation item href
     * @param {string} currentPath - Current page path
     * @returns {boolean} True if active
     */
    isActivePage(itemHref, currentPath) {
        // Handle home page
        if (itemHref === 'index.html' && (currentPath === 'index.html' || currentPath === '')) {
            return true;
        }
        
        // Handle companies directory
        if (itemHref === 'companies/index.html' && currentPath.startsWith('companies/')) {
            return true;
        }
        
        // Handle subdirectory paths
        if (this.isSubdirectory) {
            // Remove ../ prefix for comparison
            const cleanItemHref = itemHref.replace('../', '');
            return cleanItemHref === currentPath;
        }
        
        // Default comparison
        return itemHref === currentPath;
    }

    /**
     * Initialize navigation on page load
     * @param {string} currentPage - Current page identifier
     */
    init(currentPage = '') {
        // Replace top navigation
        const topNavContainer = document.getElementById('top-navigation');
        if (topNavContainer) {
            topNavContainer.innerHTML = this.generateTopNavigation(currentPage);
        }

        // Replace footer navigation
        const footerContainer = document.getElementById('footer-navigation');
        if (footerContainer) {
            footerContainer.innerHTML = this.generateFooterNavigation();
        }
    }

    /**
     * Add navigation to existing page structure
     * This method can be called to inject navigation into existing pages
     */
    injectNavigation() {
        // Find and replace existing navigation
        const existingNav = document.querySelector('nav');
        if (existingNav) {
            existingNav.outerHTML = this.generateTopNavigation();
        }

        // Find and replace existing footer
        const existingFooter = document.querySelector('footer');
        if (existingFooter) {
            existingFooter.outerHTML = this.generateFooterNavigation();
        }
    }
}

// Auto-initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    const navigation = new TechGenieNavigation();
    
    // Auto-inject navigation if containers exist
    if (document.getElementById('top-navigation') || document.getElementById('footer-navigation')) {
        navigation.init();
    } else {
        // Try to inject into existing structure
        navigation.injectNavigation();
    }
});

// Export for manual initialization
window.TechGenieNavigation = TechGenieNavigation;
