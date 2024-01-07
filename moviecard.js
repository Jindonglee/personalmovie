
let apiKey = config.apikey

const popularUrl = `https://api.themoviedb.org/3/movie/popular?language=ko-KR&page=1&api_key=${apiKey}`;

//영화 데이터
const movieFetch = async (url) => {
    let response = await fetch(url)
    const data = await response.json(); // json() 은 api 정보를 자바스크립트에서 쓸 수 있는 오브젝트로 만들어준다.
    //await console.log(data.results) // console 창에서 출력이 잘되었는지 확인해보는 용도 
    return data['results']// results는 가져온 값의 속성이다.
};




let makeCards = async function (datas) {
    const movieCard = document.getElementById("mycards");
    movieCard.innerHTML = ' '

    datas.forEach(data => {

        // 불러온 정보의 키 값을 변수에 할당했다.
        // 자바스크립트 객체{key:value,key:value...}가 되었으므로 따로 변환하거나 하지 않았다.
        // 키 값은 콘솔로 출력해 보거나 tmdb 사이트에서 확인 가능
        let poster_path = data.poster_path;
        let title = data.title;
        let overview = data.overview;
        let vote_average = data.vote_average;
        let id = data.id  
        // temp_html에 템플릿 리터럴(백틱)으로 html에 구현할 카드 내용을 쓴다.
        // 위에 선언한 변수를 ${}로 할당한다.
        let temp_html =
            `<div class="col">
                    <div class="card h-100" onclick = alert('영화id=${id}')>
                        <img src= "https://image.tmdb.org/t/p/w500/${poster_path}"
                            class="card-img-top" alt="...">
                        <div class="card-body">
                            <h5 class="card-title">${title}</h5>
                            <p class="card-text">${overview}</p>
                            <p class="card-text">평점: ${vote_average}</p>
                        </div>
                    </div>
                </div>`;
        // 제이쿼리를 쓸 수 없어서 html문서에 id가 "mycards"인 div를 불러왔다.
        // insertAdjacentHTML같은 경우에는 append()가 죽어도 안먹혀서 검색해보다가 따와서 쓴건데
        // 뭔 domtree와 관련된 내용인것 같은데 5주차 내용이라 다음에 공부해오겠습니다.      

        movieCard.insertAdjacentHTML('beforeend', temp_html);
    });
}
// 이제 데이터를 불러와서 카드를 만들 함수를 선언해 준다.
async function showCards() {
    const movies = await movieFetch(popularUrl); // movieFetch 함수를 호출, data.results 값을 movies라고 정한다.
    makeCards(movies); // movies 인자로 Makecards 함수 실행
}

 showCards(); // showCards 함수를 호출합니다.


