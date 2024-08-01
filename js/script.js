document.addEventListener('DOMContentLoaded', () => {
    const animeContainer = document.getElementById('animeContainer');
    const genreButtons = document.querySelectorAll('.genre-button');
    const searchInput = document.getElementById('search');
    const toggleThemeButton = document.getElementById('toggleTheme');

    async function fetchAnimeData() {
        try {
            const response = await fetch('/data/AnimeData.json');
            if (!response.ok) throw new Error('Jaringan tidak merespons dengan baik');
            const data = await response.json();
            return data;
        } catch (error) {
            console.error('Gagal mengambil data anime:', error);
            return [];
        }
    }

    function tampilkanAnime(items) {
        animeContainer.innerHTML = '';
        items.forEach(anime => {
            const animeItem = document.createElement('div');
            animeItem.className = 'anime-item';
            animeItem.innerHTML = `
                <img src="${anime.poster}" alt="${anime.title}" data-link="${anime.link}">
                <div class="anime-info">
                    <h2>${anime.title}</h2>
                    <p><i class="fas fa-film icon"></i> Studio: ${anime.studio}</p>
                    <p><i class="fas fa-tags icon"></i> Genre: ${anime.genre}</p>
                    <p><i class="fas fa-star icon"></i> Rating: ${anime.rating}</p>
                </div>
            `;
            animeContainer.appendChild(animeItem);
        });

        // Menambahkan event listener untuk pengalihan saat klik gambar
        document.querySelectorAll('.anime-item img').forEach(img => {
            img.addEventListener('click', () => {
                const link = img.getAttribute('data-link');
                window.location.href = link;
            });
        });
    }

    function filterAnime(animeData) {
        const searchTerm = searchInput.value.toLowerCase();
        const selectedGenre = document.querySelector('.genre-button.active').getAttribute('data-genre');
        
        const filteredAnime = animeData.filter(anime => {
            const matchesGenre = selectedGenre === 'all' || anime.genre.toLowerCase() === selectedGenre.toLowerCase();
            const matchesSearch = anime.title.toLowerCase().includes(searchTerm);
            return matchesGenre && matchesSearch;
        });

        tampilkanAnime(filteredAnime);
    }

    genreButtons.forEach(button => {
        button.addEventListener('click', () => {
            genreButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
            fetchAnimeData().then(data => filterAnime(data));
        });
    });

    searchInput.addEventListener('input', () => {
        fetchAnimeData().then(data => filterAnime(data));
    });

    // Mode gelap toggle
    toggleThemeButton.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
        const isDarkMode = document.body.classList.contains('dark-mode');
        toggleThemeButton.innerHTML = `<i class="fas fa-${isDarkMode ? 'sun' : 'moon'}"></i>`;
    });

    // Tampilkan awal
    fetchAnimeData().then(data => tampilkanAnime(data));
});
