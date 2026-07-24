# Aashish Ply & Interior Fittings - Project Documentation

This project is a single-page website for "Aashish Ply & Interior Fittings", a premium plywood and interior hardware business located in Nanded.

## File Structure & Description

### `index.html`
This is the core structure (markup) of the website. It contains all the content the user sees, divided into logical sections:
- **`<head>`**: Contains metadata for SEO (title, description, keywords), Google Fonts links, Social Sharing (Open Graph) tags, and JSON-LD structured data for local business SEO.
- **Navigation (`<nav>`)**: The top menu containing links to different sections.
- **Floating WhatsApp CTA**: A fixed WhatsApp icon on the bottom right for quick contact.
- **Hero Section (`<header>`)**: The introductory banner with a background image, main headline, and call-to-action buttons.
- **About Section**: Company background and proprietor information.
- **Solutions Section**: A grid of cards showcasing product categories (Plywood, Fittings, Modular Kitchens, etc.).
- **Why Choose Us Section**: Key selling points represented with emojis/icons.
- **Gallery Section**: A masonry grid of inspiration images. Includes a hidden Lightbox structure for enlarging images.
- **Contact Section**: Address, contact details, a Google Maps link, and a custom enquiry form that redirects directly to WhatsApp.
- **Footer**: Bottom links, copyright, and brand summary.

### `style.css`
This file controls the visual appearance, layout, and responsiveness of the website.
- **CSS Variables (`:root`)**: Defines a central theme including colors (Charcoal, Warm Off-White, Elegant Terracotta Accent), typography (Playfair Display for headings, Manrope for body), and spacing.
- **Base Styles**: Resets default browser margins and enables smooth scrolling globally (`scroll-behavior: smooth`).
- **Component Styles**: Specific rules for Buttons (`.btn`), Navigation (including the sticky glass-morphism effect), Cards, Feature grids, and the Lightbox modal.
- **Animations**: Handles the `reveal` class, which hides elements initially and slides/fades them in as they scroll into view.
- **Responsive Media Queries**: Adapts layouts for tablets and mobile devices (e.g., changing grid layouts from multiple columns to a single column, turning the navbar into a hamburger menu).

### `script.js`
This file handles the interactivity and dynamic behavior of the website on the client side.
- **Mobile Menu Toggle**: Listens for clicks on the hamburger icon to open/close the mobile navigation menu.
- **Sticky Navbar**: Listens to the `scroll` event. If the user scrolls down more than 50 pixels, it adds a `scrolled` class to the navbar (which adds a shadow via CSS).
- **Intersection Observer (Scroll Animations)**: Monitors elements with the `.reveal` class. When they scroll into the viewport, it adds an `.active` class, triggering the CSS fade-in animation.
- **Lightbox Gallery Logic**: Makes the gallery images clickable. When clicked, it opens a full-screen modal (lightbox) with the selected image. It includes logic for 'Next'/'Prev' buttons, clicking outside to close, and keyboard navigation (Escape, Arrow keys).
- **Custom WhatsApp Routing**: Intercepts the Contact Form submission, extracts the user's input (Name, Phone, Requirement, Message), formats it into a URL-encoded string, and redirects the user to the WhatsApp API, pre-filling a message for the business owner.

### `assests/` (Folder)
A directory intended to store local media assets like the logo, custom icons, or local images (though currently, the HTML relies on Unsplash placeholders).

---

## How Website Navigation Works (How it moves)

The website uses a **Single-Page Architecture** with **Anchor Link Scrolling**. Here is exactly how the movement works:

1. **Section IDs**: Every major section in the `index.html` has a unique `id` attribute (e.g., `<section id="about">`, `<section id="solutions">`).
2. **Anchor Links**: The links in the navigation bar point directly to these IDs using the hash `#` symbol (e.g., `<a href="#about">About</a>`).
3. **Smooth Scrolling**: When you click a link, instead of jumping instantly to the section, the page glides down smoothly. This is achieved purely through a single line of CSS in the `style.css` file:
   ```css
   html { scroll-behavior: smooth; }
   ```
4. **Sticky Navigation**: As you move down the page, the JavaScript (`script.js`) detects your scroll position. Once you move past 50 pixels, it tells the navigation bar to stick to the top of the screen and adds a subtle drop shadow, so you always have access to the menu no matter where you move on the page.
5. **Scroll Animations**: As you navigate down, sections gently fade and slide up into view. This is done using a JavaScript `IntersectionObserver` that watches where you are on the page and triggers CSS animations when you reach new content.