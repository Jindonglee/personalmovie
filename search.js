



function searchMovies() {
   
    const searchInput = document.getElementById("Input");
    const searchValue = searchInput.value.toLowerCase();

    if (searchValue.trim() === '') {
        alert('검색어를 입력해주세요.');
        return;
    }

    const searchUrl = `https://api.themoviedb.org/3/search/movie?query=${searchValue}&api_key=${apiKey}`;
    console.log(searchValue)

    movieFetch(searchUrl)
        .then(moviesArray => {
            const answer = [];

            moviesArray.forEach(movie => {
                
                if (movie["title"].includes('')) {
                    answer.push(movie);
                }
            });

            makeCards(answer);
        })
        .catch(error => console.error(error));
}
const enterKey = (event) => {
    if (event.code === "Enter") {
        searchMovies();
    }
};
