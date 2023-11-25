/*====================================*/
/*BUAT NAMBAH POSTER*/
/*====================================*/
const films = [
    { title: "Your Name", poster: "img/yourname.jpg", link: "informasi/yrn.html" },
    { title: "Natsu e no Tunnel", poster: "img/natsu.jpg", link: "informasi/nent.html" },
    { title: "Josee, the Tiger and the Fish", poster: "img/josee.jpg", link: "informasi/josee.html" },
    { title: "Weathering With You", poster: "img/tenki.jpg", link: "informasi/tenki.html" },
    { title: "Suzume no Tojimari", poster: "img/suzume.jpg", link: "informasi/suzume.html" },
]

/*====================================*/
/*ELEMENT POSTER*/
/*====================================*/
const filmList = document.getElementById('film-list');

films.forEach(film => {
    const filmItem = document.createElement('div');
    filmItem.classList.add('film-item');

    const filmPoster = document.createElement('div');
    filmPoster.classList.add('film-poster');
    filmPoster.style.backgroundImage = `url(${film.poster})`;

    const filmTitle = document.createElement('h3');
    filmTitle.textContent = film.title;

    filmPoster.appendChild(filmTitle);
    filmItem.appendChild(filmPoster);

    filmList.appendChild(filmItem);
    filmItem.addEventListener('click', () => {
        window.location.href = film.link;
    });
});

/*====================================*/
/* FOLDER INFORMASI*/
/*====================================*/

function goBack() {
    window.location.href = '../index.html';
  }

/*====================================*/
/* FOLDER PLAY */
/*====================================*/

function goBack() {
    window.location.href = '../../index.html';
  }

/*====================================*/
/* FUNGSI PLAY DI FILE INFOTMASI */
/*====================================*/

function plays() {
    window.location.href = '../../play/yourname.html';
  }

function play() {
    window.location.href = '../../play/natsuo.html';
  }

  function playi() {
    window.location.href = '../../play/josee.html';
  }

  function playn() {
    window.location.href = '../../play/tenki.html';
  }

  function playz() {
    window.location.href = '../../play/suzume.html';
  }

/*====================================*/
/* DUNGSI FOLDER INFORMASI*/
/*====================================*/

  document.addEventListener('DOMContentLoaded', function() {
    const videoTitle = document.querySelector('.video-title');
    const videoDescription = document.querySelector('.video-description');
  });
  
  window.onload = function() {
    const movieTitleElement = document.getElementById('movie-title');
    const selectedMovieTitle = localStorage.getItem('selectedMovieTitle');
    if (selectedMovieTitle) {
        movieTitleElement.textContent = selectedMovieTitle;
    }
};

function goBack() {
    window.location.href = '../index.html';
  }
  
  document.addEventListener('DOMContentLoaded', function() {
    const videoTitle = document.querySelector('.video-title');
    const videoDescription = document.querySelector('.video-description');
  });
  
  window.onload = function() {
    const movieTitleElement = document.getElementById('movie-title');
    const selectedMovieTitle = localStorage.getItem('selectedMovieTitle');
    if (selectedMovieTitle) {
        movieTitleElement.textContent = selectedMovieTitle;
    }
};

