export function getYouTubeId(url) {
    const defaultId = '7RUA0IOfar8';
    const ytRegex = /^[A-Za-z0-9_-]{11}$/;
    if (!url) return defaultId;
    let id = '';
    if (url.includes('v=')) {
        id = url.split('v=')[1].split('&')[0];
    } else {
        id = url.split('/').pop();
    }
    return ytRegex.test(id) ? id : defaultId;
}

export function getRandomMatchScore() {
    return Math.floor(Math.random() * 20 + 80);
}

export function getRandomDuration(hasProgress) {
    return hasProgress ? '10 temporadas' : '2h ' + Math.floor(Math.random() * 59) + 'm';
}

export function getRandomAgeBadge() {
    return Math.random() > 0.5 ? { text: 'A16', class: 'red-accent' } : { text: '16', class: '' };
}

export function generatePoster(title, color) {
    const safeTitle = encodeURIComponent(title || 'Filme');
    const safeColor = encodeURIComponent(color || '#333');
    return `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 300'%3E%3Crect fill='${safeColor}' width='200' height='300'/%3E%3Ctext x='50%25' y='50%25' font-size='20' fill='white' text-anchor='middle' dominant-baseline='middle'%3E${safeTitle}%3C/text%3E%3C/svg%3E`;
}

export function sanitizeString(str) {
    if (typeof str !== 'string') return '';
    return str.replace(/[<>&"']/g, (c) => {
        const map = { '<': '&lt;', '>': '&gt;', '&': '&amp;', '"': '&quot;', "'": '&#39;' };
        return map[c];
    });
}
