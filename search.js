// 검색
function searchMovies(event) {
  event.preventDefault();
  const searchInput = document.getElementById("Input");
  const searchValue = searchInput.value.toLowerCase();

  if (searchValue.trim() === "") {
    alert("검색어를 입력해주세요.");
    return;
  }

  const searchUrl = `https://api.themoviedb.org/3/search/movie?query=${searchValue}&api_key=${apiKey}&language=ko-KR`;

  movieFetch(searchUrl)
    .then(movies => {
      if (movies.length === 0) {
        alert("검색결과가 없습니다!");
      } else {
        return movies;
      }
    })
    .then(filteredMovies => {
      makeCards(filteredMovies);
    })
    .catch(error => console.error(error));
}
