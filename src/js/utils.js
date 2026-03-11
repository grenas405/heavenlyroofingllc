/* src/js/utils.js */

/**
 * Smoothly scrolls to a target element.
 * @param {string} selector - The CSS selector of the target element.
 */
export function smoothScroll(selector) {
    const target = document.querySelector(selector);
    if (target) {
        target.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    }
}

/**
 * Log a themed greeting.
 */
export function printGreeting() {
    console.log("%cHeavenly Roofing LLC %c- Powered by Roberto C. Rodriguez", 
        "color: #3498db; font-size: 20px; font-weight: bold;", 
        "color: #2c3e50; font-style: italic;");
}
