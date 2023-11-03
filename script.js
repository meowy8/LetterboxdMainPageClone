const trendingFilmPoster = document.querySelectorAll('.trending-film');
const signInBtn = document.getElementById('sign-in-btn');
const signInContainer = document.getElementById('sign-in-container');
const navRight = document.getElementById('nav-right');
const mainImageHeader = document.getElementById('main-image-header');
const trendingFilmPosterOverlay = document.querySelectorAll('.trending-film-overlay');

const signInDropdown = () => {
  signInContainer.style.display = 'flex';
  nav.style.display = 'none'
}

const closeDropdown = () => {
  signInContainer.style.display = 'none';
  nav.style.display = 'flex';
}

const fetchFilmPoster = () => {
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4ZmRhYmU3YmQ5NzFiYWQ2ZWM4NjU4YTRjMGVmN2JhNSIsInN1YiI6IjYxM2UzMTYxYWFmODk3MDAyYWZjYWUwMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.LLUybn1kgL2YjqYl7J92g_KBsO0p3hRjbSVErGVFlEc'
    }
  };
  
  fetch('https://api.themoviedb.org/3/movie/popular?language=en-US&page=1', options)
    .then(response => response.json())
    .then(response => {
      console.log(response)
      headerPath = response.results[0].backdrop_path
      mainImageHeader.src = `https://image.tmdb.org/t/p/original${headerPath}`
      trendingFilmPoster.forEach((div, index) => {
        const posterPath = response.results[index].poster_path;
        const posterImg = document.createElement('img');
        posterImg.src = `https://image.tmdb.org/t/p/original${posterPath}`
        div.appendChild(posterImg);
      });
      trendingFilmPosterOverlay.forEach((div, index) => {
        const rating = document.createElement('p');
        const ratingData = response.results[index].vote_average
        rating.innerHTML = `${ratingData.toFixed(1)}/10`
        div.appendChild(rating)
      })
    })
    .catch(err => console.error(err));
}

fetchFilmPoster();