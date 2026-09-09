import { createContentCard } from './ContentCard.js';

export function createCarousel(category) {
    const section = document.createElement('div');
    section.className = 'slider-section';

    // Header
    const header = document.createElement('div');
    header.className = 'slider-header';

    const title = document.createElement('h2');
    title.className = 'slider-title';
    title.textContent = category.title;

    const indicators = document.createElement('div');
    indicators.className = 'slider-indicators';

    header.appendChild(title);
    header.appendChild(indicators);
    section.appendChild(header);

    // Movie row
    const row = document.createElement('div');
    row.className = 'movie-row';

    category.items.forEach(item => {
        const card = createContentCard(item);
        row.appendChild(card);
    });

    section.appendChild(row);
    return section;
}
