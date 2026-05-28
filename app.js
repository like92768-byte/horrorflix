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
// --- GANTI SELURUH BAGIAN HERO CODE DI BAWAH INI ---

function setupHero() {
    // Tampilkan hero pertama kali saat web dibuka (ambil semua film)
    updateHero(MOVIES);

    // Set interval otomatis ganti banner setiap 8 detik
    setInterval(() => {
        let currentList;
        if (currentFilter === 'semua') {
            currentList = MOVIES;
        } else {
            // Ambil hanya film yang sesuai filter saat ini
            currentList = MOVIES.filter(m => {
                if (Array.isArray(m.kategori)) return m.kategori.includes(currentFilter);
                return m.kategori === currentFilter;
            });
        }
        
        // Jika ada film di kategori ini, update hero
        if (currentList.length > 0) {
            updateHero(currentList);
        }
    }, 8000);
}

function updateHero(movieList) {
    const heroBg = document.getElementById('heroBg');
    const heroContent = document.getElementById('heroContent');

    // Jika list kosong (misal filter "Zombie" tidak ada filmnya), sembunyikan hero
    if (!movieList || movieList.length === 0) {
        if (heroBg) heroBg.style.opacity = '0';
        return;
    }

    // Pilih film acak dari list yang tersedia
    const randomIndex = Math.floor(Math.random() * movieList.length);
    const movie = movieList[randomIndex];

    if (heroBg && heroContent) {
        heroBg.style.backgroundImage = `url(${movie.backdrop})`;
        heroBg.style.opacity = '1';
        
        // Format kategori untuk ditampilkan (handle array & string)
        const katDisplay = Array.isArray(movie.kategori) 
            ? movie.kategori.map(k => k.charAt(0).toUpperCase() + k.slice(1)).join(', ') 
            : movie.kategori;

        heroContent.innerHTML = `
            <div class="hero-badge">🔥 FEATURED</div>
            <h1 class="hero-title">${movie.judul}</h1>
            <div class="hero-meta">
                <span>📅 ${movie.tahun}</span>
                <span>${movie.rating}</span>
                <span> ${movie.durasi}</span>
                <span>🏷 ${katDisplay}</span>
            </div>
            <p class="hero-desc">${movie.deskripsi}</p>
            <div class="hero-buttons">
                <a href="${movie.videoUrl}" target="_blank" class="btn-hero btn-hero-primary">▶ Tonton Sekarang</a>
                <button class="btn-hero btn-hero-secondary" onclick="openModal(${movie.id})">ℹ️ Detail</button>
            </div>
        `;
    }
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
                <span class="card-category-tag">
                ${Array.isArray(movie.kategori) ? movie.kategori[0].toUpperCase() : movie.kategori.toUpperCase()}
                </span>
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

    // 1. Update tampilan tombol aktif
    document.querySelectorAll('.cat-btn').forEach(btn => btn.classList.remove('active'));
    event.target.classList.add('active');

    // 2. Filter data film
    let filteredMovies;
    if (category === 'semua') {
        filteredMovies = MOVIES;
        document.getElementById('sectionTitleText').textContent = 'Semua Film Horror';
    } else {
        filteredMovies = MOVIES.filter(m => {
            // Cek support array (multiple genre) dan string biasa
            if (Array.isArray(m.kategori)) {
                return m.kategori.includes(category);
            }
            return m.kategori === category;
        });
        document.getElementById('sectionTitleText').textContent = 
            `Film ${category.charAt(0).toUpperCase() + category.slice(1)}`;
    }

    // 3. Render grid film
    renderMovies(filteredMovies);

    // 4. UPDATE HERO SECTION: Pilih film acak DARI hasil filter
    updateHero(filteredMovies);
}

// 🔍 SEARCH
function searchMovies(query) {
    query = query.toLowerCase().trim();
    
    // Filter utama berdasarkan pencarian
    let filtered = MOVIES.filter(movie => {
        const matchJudul = movie.judul.toLowerCase().includes(query);
        const matchDeskripsi = movie.deskripsi.toLowerCase().includes(query);
        const matchTahun = movie.tahun.toString().includes(query);
        
        // Cek kategori (support ARRAY & STRING)
        let matchKategori = false;
        if (Array.isArray(movie.kategori)) {
            matchKategori = movie.kategori.some(k => k.toLowerCase().includes(query));
        } else {
            matchKategori = movie.kategori.toLowerCase().includes(query);
        }

        return matchJudul || matchDeskripsi || matchTahun || matchKategori;
    });

    // Jika ada filter kategori aktif, gabungkan dengan hasil pencarian
    if (currentFilter !== 'semua') {
        filtered = filtered.filter(m => {
            if (Array.isArray(m.kategori)) return m.kategori.includes(currentFilter);
            return m.kategori === currentFilter;
        });
    }

    // Update judul section & render
    const titleText = query 
        ? `Hasil pencarian "${query}"` 
        : (currentFilter === 'semua' ? 'Semua Film Horror' : `Film ${currentFilter.charAt(0).toUpperCase() + currentFilter.slice(1)}`);
    
    document.getElementById('sectionTitleText').textContent = titleText;
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