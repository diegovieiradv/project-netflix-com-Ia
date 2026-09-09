import { registerRoute, initRouter } from './js/router.js';
import { renderProfileScreen } from './js/components/ProfileScreen.js';
import { renderCatalogScreen } from './js/components/CatalogScreen.js';

document.addEventListener('DOMContentLoaded', () => {
    const app = document.getElementById('app');
    if (!app) return;

    // Register routes
    registerRoute('#profiles', (container) => {
        renderProfileScreen(container);
    });

    registerRoute('#catalog', (container) => {
        renderCatalogScreen(container);
    });

    // Initialize router
    initRouter();
});
