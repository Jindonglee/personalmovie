



function searchMovies() {
   
    const searchInput = document.getElementById("Input");
    const searchValue = searchInput.value.toLowerCase(); //입력한 값을 모두 소문자로 바꿔준다.

    if (searchValue.trim() === '') {
        alert('검색어를 입력해주세요.');
        return;
    } //아무것도 검색하지 않을 시 검색어를 경고창을 띄워준다.
    //url은 한국어 검색 결과를 불러오도록 해주었다.
    const searchUrl = `https://api.themoviedb.org/3/search/movie?query=${searchValue}&api_key=${apiKey}&language=ko-KR`;
    //moviecard.js에서 선언해준 함수를 불러 온다. 
    movieFetch(searchUrl)
        .then(movies => {
            if (movies.length === 0){
                alert('검색결과가 없습니다!') //검색 결과가 없을 시 팝업되는 경고창
            }else{
            makeCards(movies);}
        })
        .catch(error => console.error(error));
}
