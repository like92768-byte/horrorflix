/* ========================================================
   🎬 HORRORFLIX - LOGIKA WEBSITE
   (Jangan ubah kecuali paham JavaScript)
   ======================================================== */

let currentFilter = 'semua';
let favorites = JSON.parse(localStorage.getItem('horrorflix_favorites') || '[]');
let currentMovie = null;
let heroIndex = 0;
let heroInterval = null;

document.addEventListener('DOMContentLoaded', () => {
    renderMovies(MOVIES);
    setupHero();
    setupNavbar();
});

// 🖼️ HERO SECTION
function setupHero() {
    updateHero();
    heroInterval = setInterval(() => {
        heroIndex = (heroIndex + 1) % MOVIES.length;
        updateHero();
    }, 8000);
}

function updateHero() {
    const movie = MOVIES[heroIndex];
    const heroBg = document.getElementById('heroBg');
    const heroContent = document.getElementById('heroContent');

    heroBg.style.backgroundImage = `url(${movie.backdrop})`;
    heroBg.style.opacity = '0';
    setTimeout(() => { heroBg.style.opacity = '1'; }, 50);

    heroContent.innerHTML = `
        <div class="hero-badge">🔥 FEATURED</div>
        <h1 class="hero-title">${movie.judul}</h1>
        <div class="hero-meta">
            <span>📅 ${movie.tahun}</span>
            <span>${movie.rating}</span>
            <span>⏱ ${movie.durasi}</span>
            <span>🏷 ${movie.kategori}</span>
        </div>
        <p class="hero-desc">${movie.deskripsi}</p>
        <div class="hero-buttons">
            <a href="${movie.videoUrl}" target="_blank" class="btn-hero btn-hero-primary">▶ Tonton Sekarang</a>
            <button class="btn-hero btn-hero-secondary" onclick="openModal(${movie.id})">ℹ️ Detail</button>
        </div>
    `;
}

// 🎬 RENDER MOVIES
function renderMovies(moviesToRender) {
    const grid = document.getElementById('movieGrid');
    const noResults = document.getElementById('noResults');

    if (!moviesToRender.length) {
        grid.innerHTML = '';
        noResults.style.display = 'block';
        return;
    }
    noResults.style.display = 'none';

    grid.innerHTML = moviesToRender.map((movie, i) => `
        <div class="movie-card" onclick="openModal(${movie.id})" style="animation-delay: ${i * 0.05}s">
            <div class="card-poster">
                <img src="${movie.poster}" alt="${movie.judul}" loading="lazy"
                     onerror="this.src='https://via.placeholder.com/300x450/1a1a2e/e50914?text=${encodeURIComponent(movie.judul)}'">
                <div class="card-overlay">
                    <div class="card-play-icon"><svg viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg></div>
                </div>
                <span class="card-category-tag">${movie.kategori}</span>
                <span class="card-quality">${movie.kualitas}</span>
            </div>
            <div class="card-info">
                <h3 class="card-title">${movie.judul}</h3>
                <div class="card-meta">
                    <span class="card-rating">${movie.rating}</span>
                    <span class="card-year">${movie.tahun}</span>
                </div>
            </div>
        </div>
    `).join('');
}

// 📂 FILTER KATEGORI
function filterCategory(category) {
    currentFilter = category;
    document.querySelectorAll('.cat-btn').forEach(btn => btn.classList.remove('active'));
    event.target.classList.add('active');

    let filtered = category === 'semua' ? MOVIES : MOVIES.filter(m => m.kategori === category);
    document.getElementById('sectionTitleText').textContent = 
        category === 'semua' ? 'Semua Film Horror' : `Film ${category.charAt(0).toUpperCase() + category.slice(1)}`;
    renderMovies(filtered);
}

// 🔍 SEARCH
function searchMovies(query) {
    query = query.toLowerCase().trim();
    let filtered = MOVIES.filter(m => 
        m.judul.toLowerCase().includes(query) || 
        m.kategori.toLowerCase().includes(query) || 
        m.deskripsi.toLowerCase().includes(query) || 
        m.tahun.toString().includes(query)
    );
    if (currentFilter !== 'semua') filtered = filtered.filter(m => m.kategori === currentFilter);
    document.getElementById('sectionTitleText').textContent = query ? `Hasil pencarian "${query}"` : 'Semua Film Horror';
    renderMovies(filtered);
}

// 📋 MODAL DETAIL
function openModal(movieId) {
    currentMovie = MOVIES.find(m => m.id === movieId);
    if (!currentMovie) return;

    document.getElementById('modalHeroImg').src = currentMovie.backdrop;
    document.getElementById('modalTitle').textContent = currentMovie.judul;
    document.getElementById('modalYear').textContent = `📅 ${currentMovie.tahun}`;
    document.getElementById('modalRating').textContent = currentMovie.rating;
    document.getElementById('modalDuration').textContent = `⏱ ${currentMovie.durasi}`;
    document.getElementById('modalCategory').textContent = `🏷 ${currentMovie.kategori}`;
    document.getElementById('modalDescription').textContent = currentMovie.deskripsi;
    document.getElementById('modalSinopsis').textContent = currentMovie.sinopsis;
    document.getElementById('modalVideoThumb').src = currentMovie.backdrop;
    document.getElementById('modalTrailerLink').href = currentMovie.trailerUrl;
    document.getElementById('modalWatchLink').href = currentMovie.videoUrl;
    
    updateFavBtn();
    document.getElementById('modalOverlay').classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeModal(e) {
    if (e && e.target !== document.getElementById('modalOverlay')) return;
    document.getElementById('modalOverlay').classList.remove('active');
    document.body.style.overflow = '';
    currentMovie = null;
}
document.addEventListener('keydown', e => { if (e.key === 'Escape') closeModal(); });

// ❤️ FAVORIT
function toggleFavorite() {
    const idx = favorites.indexOf(currentMovie.id);
    idx > -1 ? favorites.splice(idx, 1) : favorites.push(currentMovie.id);
    localStorage.setItem('horrorflix_favorites', JSON.stringify(favorites));
    updateFavBtn();
}
function updateFavBtn() {
    const btn = document.getElementById('modalFavBtn');
    if (favorites.includes(currentMovie?.id)) {
        btn.classList.add('favorited');
        btn.textContent = '❤️ Difavoritkan';
    } else {
        btn.classList.remove('favorited');
        btn.textContent = '🤍 Tambah Favorit';
    }
}
function showFavorites() {
    renderMovies(MOVIES.filter(m => favorites.includes(m.id)));
}

// 📄 SECTIONS
function showSection(section) {
    currentSection = section;
    document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
    event.target.classList.add('active');
    if (section === 'home') {
        document.getElementById('heroSection').style.display = 'flex';
        document.getElementById('categoriesBar').style.display = 'flex';
        document.getElementById('sectionTitleText').textContent = 'Semua Film Horror';
        renderMovies(MOVIES);
    } else {
        document.getElementById('heroSection').style.display = 'none';
        document.getElementById('categoriesBar').style.display = 'none';
        document.getElementById('sectionTitleText').textContent = '❤️ Film Favorit';
        showFavorites();
    }
}

// 🧭 NAVBAR SCROLL
function setupNavbar() {
    window.addEventListener('scroll', () => {
        document.getElementById('navbar').classList.toggle('scrolled', window.scrollY > 50);
    });
}