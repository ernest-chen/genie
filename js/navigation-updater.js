/**
 * Navigation Updater Utility
 * Script to help update existing pages with consistent navigation
 */

class NavigationUpdater {
    constructor() {
        this.navigation = new TechGenieNavigation();
    }

    /**
     * Update a specific page with new navigation
     * @param {string} pagePath - Path to the page to update
     */
    updatePage(pagePath) {
        console.log(`Updating navigation for: ${pagePath}`);
        
        // This would typically be used in a build process
        // For now, it provides the structure for manual updates
        const topNav = this.navigation.generateTopNavigation();
        const footerNav = this.navigation.generateFooterNavigation();
        
        return {
            topNavigation: topNav,
            footerNavigation: footerNav
        };
    }

    /**
     * Get navigation HTML for manual replacement
     * @param {string} currentPage - Current page identifier
     * @returns {object} Navigation HTML objects
     */
    getNavigationHTML(currentPage = '') {
        return {
            topNavigation: this.navigation.generateTopNavigation(currentPage),
            footerNavigation: this.navigation.generateFooterNavigation()
        };
    }

    /**
     * Generate navigation update instructions
     * @returns {string} Instructions for updating navigation
     */
    getUpdateInstructions() {
        return `
# Navigation Update Instructions

## For each HTML page, replace the navigation sections:

### 1. Top Navigation
Replace the existing <nav> element with:
```html
<div id="top-navigation">
    <!-- Navigation will be injected here -->
</div>
```

### 2. Footer Navigation  
Replace the existing <footer> element with:
```html
<div id="footer-navigation">
    <!-- Footer will be injected here -->
</div>
```

### 3. Include Navigation Script
Add this script tag before the closing </body> tag:
```html
<script src="js/navigation.js"></script>
```

### 4. Current Page Detection
The navigation will automatically detect the current page and highlight the appropriate menu item.

## Files to Update:
- index.html
- public_clouds.html
- data_platform.html
- devops.html
- design_patterns.html
- rest_rpc.html
- transformation.html
- adtech.html
- seo_geo_aeo.html
- companies/index.html
        `;
    }
}

// Export for use
window.NavigationUpdater = NavigationUpdater;
