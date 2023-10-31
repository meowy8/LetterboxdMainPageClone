const trendingFilmPoster = document.querySelectorAll('.trending-film');
const signInBtn = document.getElementById('sign-in-btn');

const signInDropdown = () => {
  
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
      trendingFilmPoster.forEach((div, index) => {
        const posterPath = response.results[index].poster_path;
        const posterImg = document.createElement('img');
        posterImg.src = `https://image.tmdb.org/t/p/original${posterPath}`
        div.appendChild(posterImg);
      });
    })
    .catch(err => console.error(err));
}

fetchFilmPoster();