import { getYouTubeId, getMatchScore, getDuration, getRandomAgeBadge, generatePoster } from '../utils.js';
import { State, Toast } from '../state.js';

export function createContentCard(item) {
    const card = document.createElement('div');
    card.className = 'movie-card';
    card.setAttribute('role', 'button');
    card.setAttribute('tabindex', '0');
    if (item.progress) {
        card.classList.add('has-progress');
    }

    // Image
    const img = document.createElement('img');
    img.src = item.img || generatePoster(item.title, item.color);
    img.alt = item.title || 'Filme';
    img.loading = 'lazy';
    img.decoding = 'async';
    img.addEventListener('error', () => {
        img.src = generatePoster(item.title, item.color);
    });

    // Iframe for YouTube preview
    const iframe = document.createElement('iframe');
    iframe.frameBorder = '0';
    iframe.allow = 'autoplay; encrypted-media';
    iframe.setAttribute('sandbox', 'allow-scripts allow-same-origin');

    const videoId = getYouTubeId(item.youtube);

    // Card details section (bottom panel on hover)
    const ageBadge = getRandomAgeBadge();
    const details = document.createElement('div');
    details.className = 'card-details';

    // Buttons row
    const buttonsRow = document.createElement('div');
    buttonsRow.className = 'details-buttons';

    const leftBtns = document.createElement('div');
    leftBtns.className = 'left-buttons';

    const playBtn = document.createElement('button');
    playBtn.className = 'btn-icon btn-play-icon';
    playBtn.setAttribute('aria-label', 'Reproduzir');
    const playI = document.createElement('i');
    playI.className = 'fas fa-play';
    playI.style.marginLeft = '2px';
    playBtn.appendChild(playI);
    playBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        document.dispatchEvent(new CustomEvent('open:video', { detail: item }));
    });
    leftBtns.appendChild(playBtn);

    const addBtn = document.createElement('button');
    addBtn.className = 'btn-icon';
    addBtn.setAttribute('aria-label', 'Adicionar à lista');
    const addI = document.createElement('i');
    addI.className = 'fas fa-plus';
    addBtn.appendChild(addI);
    // Check if already favorited
    const currentProfile = State.getCurrentProfile();
    if (currentProfile && State.isFavorite(currentProfile.id, item.title)) {
        addI.className = 'fas fa-check';
        addBtn.setAttribute('aria-label', 'Adicionado');
    }
    addBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        const profile = State.getCurrentProfile();
        if (!profile) return;
        const result = State.toggleFavorite(profile.id, item.title);
        if (result && result.includes(item.title)) {
            addI.className = 'fas fa-check';
            addBtn.setAttribute('aria-label', 'Adicionado');
            Toast.success('Adicionado à Minha Lista');
        } else {
            addI.className = 'fas fa-plus';
            addBtn.setAttribute('aria-label', 'Adicionar à lista');
            Toast.info('Removido da Minha Lista');
        }
    });
    leftBtns.appendChild(addBtn);

    const likeBtn = document.createElement('button');
    likeBtn.className = 'btn-icon';
    likeBtn.setAttribute('aria-label', 'Curtir');
    const likeI = document.createElement('i');
    likeI.className = 'fas fa-thumbs-up';
    likeBtn.appendChild(likeI);
    leftBtns.appendChild(likeBtn);

    const rightBtns = document.createElement('div');
    rightBtns.className = 'right-buttons';

    const expandBtn = document.createElement('button');
    expandBtn.className = 'btn-icon';
    expandBtn.setAttribute('aria-label', 'Expandir');
    const expandI = document.createElement('i');
    expandI.className = 'fas fa-chevron-down';
    expandBtn.appendChild(expandI);
    expandBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        document.dispatchEvent(new CustomEvent('open:details', { detail: item }));
    });
    rightBtns.appendChild(expandBtn);

    buttonsRow.appendChild(leftBtns);
    buttonsRow.appendChild(rightBtns);
    details.appendChild(buttonsRow);

    // Info row
    const infoRow = document.createElement('div');
    infoRow.className = 'details-info';

    const matchScore = document.createElement('span');
    matchScore.className = 'match-score';
    matchScore.textContent = getMatchScore(item.title) + '% relevante';
    infoRow.appendChild(matchScore);

    const age = document.createElement('span');
    age.className = 'age-badge ' + ageBadge.class;
    age.textContent = ageBadge.text;
    infoRow.appendChild(age);

    const duration = document.createElement('span');
    duration.className = 'duration';
    duration.textContent = getDuration(item);
    infoRow.appendChild(duration);

    const hd = document.createElement('span');
    hd.className = 'resolution';
    hd.textContent = 'HD';
    infoRow.appendChild(hd);

    details.appendChild(infoRow);

    // Tags row - dynamic from genres
    const tagsRow = document.createElement('div');
    tagsRow.className = 'details-tags';
    const genres = item.genres || ['Filme'];
    genres.slice(0, 3).forEach((genre, idx) => {
        const tag = document.createElement('span');
        tag.textContent = genre;
        tagsRow.appendChild(tag);
    });
    details.appendChild(tagsRow);

    // Assemble card (details first so img/iframe are on top)
    card.appendChild(iframe);
    card.appendChild(img);
    card.appendChild(details);

    // Top 10 badge
    if (item.top10) {
        const badge = document.createElement('div');
        badge.className = 'badge-top10';
        const topSpan = document.createElement('span');
        topSpan.className = 'top';
        topSpan.textContent = 'TOP';
        badge.appendChild(topSpan);
        const numSpan = document.createElement('span');
        numSpan.className = 'number';
        numSpan.textContent = '10';
        badge.appendChild(numSpan);
        card.appendChild(badge);
    }

    // Bottom badge
    if (item.badge) {
        const badgeBottom = document.createElement('div');
        badgeBottom.className = 'badge-bottom ' + (item.badgeColor === 'red' ? 'red' : 'white');
        badgeBottom.textContent = item.badge;
        card.appendChild(badgeBottom);
    }

    // Progress bar
    if (item.progress) {
        const pbContainer = document.createElement('div');
        pbContainer.className = 'progress-bar-container';
        const pbValue = document.createElement('div');
        pbValue.className = 'progress-value';
        pbValue.style.width = item.progress + '%';
        pbContainer.appendChild(pbValue);
        card.appendChild(pbContainer);
    }

    // Hover handlers
    let playTimeout;
    card.addEventListener('mouseenter', () => {
        const rect = card.getBoundingClientRect();
        const windowWidth = window.innerWidth;

        if (rect.left < 100) {
            card.classList.add('origin-left');
        } else if (rect.right > windowWidth - 100) {
            card.classList.add('origin-right');
        }

        playTimeout = setTimeout(() => {
            if (videoId) {
                iframe.src = 'https://www.youtube.com/embed/' + videoId + '?autoplay=1&mute=1&controls=0&modestbranding=1&loop=1&playlist=' + videoId;
                iframe.classList.add('playing');
                img.classList.add('playing-video');
            }
        }, 600);
    });

    card.addEventListener('mouseleave', () => {
        clearTimeout(playTimeout);
        iframe.classList.remove('playing');
        img.classList.remove('playing-video');
        iframe.src = '';
        card.classList.remove('origin-left');
        card.classList.remove('origin-right');
    });

    // Keyboard accessibility
    card.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            document.dispatchEvent(new CustomEvent('open:video', { detail: item }));
        }
    });

    return card;
}
