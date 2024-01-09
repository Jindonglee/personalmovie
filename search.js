// 검색
function searchMovies() {
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
        return movies.filter(movie => movie.adult === false); //성인 결과가 안나오도록
      }
    })
    .then(filteredMovies => {
      makeCards(filteredMovies);
    })
    .catch(error => console.error(error));
}
