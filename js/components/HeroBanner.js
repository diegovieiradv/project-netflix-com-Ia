import { generatePoster } from '../utils.js';

export function createHeroBanner(movie) {
    const banner = document.createElement('section');
    banner.className = 'hero-banner';

    const bg = document.createElement('div');
    bg.className = 'hero-background';
    if (movie && movie.img) {
        bg.style.backgroundImage = `url('${movie.img}')`;
        // Validate image URL using Image() object since div error events don't fire
        const img = new Image();
        img.onload = () => { /* URL is valid */ };
        img.onerror = () => {
            bg.style.backgroundImage = `url('${generatePoster(movie.title, movie.color)}')`;
        };
        img.src = movie.img;
    }
    banner.appendChild(bg);

    const content = document.createElement('div');
    content.className = 'hero-content';

    const title = document.createElement('h1');
    title.className = 'hero-title';
    title.textContent = movie?.title || 'Bem-vindo ao FLIXIO';
    content.appendChild(title);

    const desc = document.createElement('p');
    desc.className = 'hero-description';
    desc.textContent = movie
        ? `${movie.title} (${movie.year}) - ${movie.rating}. Uma experiência imperdível no streaming.`
        : 'Aproveite o conteúdo personalizado para este perfil.';
    content.appendChild(desc);

    const buttons = document.createElement('div');
    buttons.className = 'hero-buttons';

    const watchBtn = document.createElement('button');
    watchBtn.className = 'btn btn-primary';
    const playIcon = document.createElement('span');
    playIcon.textContent = '▶ ';
    watchBtn.appendChild(playIcon);
    watchBtn.appendChild(document.createTextNode('Assistir'));
    buttons.appendChild(watchBtn);

    const infoBtn = document.createElement('button');
    infoBtn.className = 'btn btn-secondary';
    const infoIcon = document.createElement('span');
    infoIcon.textContent = 'ℹ ';
    infoBtn.appendChild(infoIcon);
    infoBtn.appendChild(document.createTextNode('Mais Informações'));
    buttons.appendChild(infoBtn);

    content.appendChild(buttons);
    banner.appendChild(content);

    return banner;
}
