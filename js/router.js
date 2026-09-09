var routes = {};
var currentRoute = null;
var routeTransitionTimeout = null;
var keyHandlers = [];

export function registerRoute(hash, renderFn) {
    routes[hash] = renderFn;
}

export function registerKeyHandler(fn) {
    keyHandlers.push(fn);
}

export function clearKeyHandlers() {
    keyHandlers.length = 0;
}

export function scrollRow(row, direction) {
    var scrollAmount = 400;
    row.scrollBy({
        left: direction === 'next' ? scrollAmount : -scrollAmount,
        behavior: 'smooth'
    });
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

    var hash = getHash();
    var renderFn = routes[hash];

    if (!renderFn) {
        window.location.replace('#profiles');
        return;
    }

    if (currentRoute === hash) return;
    currentRoute = hash;

    clearKeyHandlers();

    var app = document.getElementById('app');
    if (!app) return;

    // Fade out
    app.style.opacity = '0';

    routeTransitionTimeout = setTimeout(function() {
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
        requestAnimationFrame(function() {
            app.style.opacity = '1';
        });
    }, 300);
}

export function navigateTo(hash) {
    window.location.hash = hash;
}

export function initRouter() {
    window.addEventListener('hashchange', handleRouteChange);

    window.addEventListener('keydown', function(e) {
        keyHandlers.forEach(function(fn) {
            try { fn(e); } catch(err) { console.error('Key handler error:', err); }
        });
    });

    if (!window.location.hash) {
        window.location.replace('#profiles');
    }

    handleRouteChange();
}
