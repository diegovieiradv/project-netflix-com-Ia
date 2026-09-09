const routes = {};
let currentRoute = null;
let routeTransitionTimeout = null;

export function registerRoute(hash, renderFn) {
    routes[hash] = renderFn;
}

function getHash() {
    return window.location.hash || '#profiles';
}

function handleRouteChange() {
    // Clear any pending transition to prevent race conditions
    if (routeTransitionTimeout !== null) {
        clearTimeout(routeTransitionTimeout);
        routeTransitionTimeout = null;
    }

    const hash = getHash();
    const renderFn = routes[hash];

    if (!renderFn) {
        window.location.replace('#profiles');
        return;
    }

    if (currentRoute === hash) return;
    currentRoute = hash;

    const app = document.getElementById('app');
    if (!app) return;

    // Fade out
    app.style.opacity = '0';

    routeTransitionTimeout = setTimeout(() => {
        routeTransitionTimeout = null;
        // Clear and render new content
        while (app.firstChild) {
            app.removeChild(app.firstChild);
        }
        try {
            renderFn(app);
        } catch (err) {
            console.error('Router render error:', err);
            app.style.opacity = '1';
            return;
        }

        // Fade in
        requestAnimationFrame(() => {
            app.style.opacity = '1';
        });
    }, 300);
}

export function navigateTo(hash) {
    window.location.hash = hash;
}

export function initRouter() {
    window.addEventListener('hashchange', handleRouteChange);

    if (!window.location.hash) {
        window.location.replace('#profiles');
    }

    handleRouteChange();
}
