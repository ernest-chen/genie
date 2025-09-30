# Tech Genie Navigation Component

A shared JavaScript component for consistent navigation across all Tech Genie pages.

## Files

- `navigation.js` - Main navigation component
- `navigation-updater.js` - Utility for updating existing pages
- `../templates/navigation-template.html` - HTML template for new pages

## Usage

### For New Pages

1. Include the navigation script:
```html
<script src="js/navigation.js"></script>
```

2. Add navigation containers to your HTML:
```html
<!-- Top Navigation -->
<div id="top-navigation">
    <!-- Navigation will be injected here -->
</div>

<!-- Your page content here -->

<!-- Footer Navigation -->
<div id="footer-navigation">
    <!-- Footer will be injected here -->
</div>
```

### For Existing Pages

The navigation component can automatically detect and replace existing navigation elements. Simply include the script and it will:

1. Find existing `<nav>` elements and replace them
2. Find existing `<footer>` elements and replace them
3. Automatically detect the current page and highlight the appropriate menu item

## Features

- **Consistent Navigation**: Same navigation structure across all pages
- **Active Page Detection**: Automatically highlights the current page
- **Responsive Design**: Works on mobile, tablet, and desktop
- **Easy Updates**: Change navigation in one place, updates everywhere
- **Auto-initialization**: Works automatically when the page loads

## Navigation Items

The navigation includes the following pages:

1. **Home** (`index.html`)
2. **Cloud Comparison** (`public_clouds.html`)
3. **Data Platform** (`data_platform.html`)
4. **DevSecOps** (`devops.html`)
5. **Design Patterns** (`design_patterns.html`)
6. **API Protocols** (`rest_rpc.html`)
7. **Transformation** (`transformation.html`)
8. **AdTech** (`adtech.html`)
9. **SEO/GEO/AEO** (`seo_geo_aeo.html`)
10. **Companies** (`companies/index.html`)

## Customization

To modify the navigation:

1. Edit the `navigationItems` array in `navigation.js`
2. Update the `generateTopNavigation()` and `generateFooterNavigation()` methods as needed
3. All pages will automatically use the updated navigation

## Browser Support

- Modern browsers with ES6 support
- Internet Explorer 11+ (with polyfills)
- Mobile browsers

## Dependencies

- Font Awesome (for icons)
- Tailwind CSS (for styling)
- No other JavaScript dependencies
