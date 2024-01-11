const apiKey = config.apikey;

const popularUrl = `https://api.themoviedb.org/3/movie/popular?language=ko-KR&page=1&api_key=${apiKey}`;
const topratedUrl = `https://api.themoviedb.org/3/movie/top_rated?language=ko-KR&page=1&api_key=${apiKey}`;
const upcomingUrl = `https://api.themoviedb.org/3/movie/upcoming?language=ko-KR&page=1&api_key=${apiKey}`;

// 영화 데이터
const movieFetch = async url => {
  let response = await fetch(url);
  const data = await response.json();
  return data["results"]; // results는 가져온 값의 속성이다.
};

// 카드 만들기
let makeCards = async function (datas) {
  const movieCard = document.getElementById("mycards");
  movieCard.innerHTML = " ";

  datas.forEach(data => {
    let poster_path = data.poster_path;
    let title = data.title;
    let overview = data.overview;
    let vote_average = data.vote_average;
    let id = data.id;

    let temp_html = `<div class="col">
                    <div class="card h-100" onclick = alert('영화id=${id}')>
                        <img src= "https://image.tmdb.org/t/p/w500/${poster_path}"
                            class="card-img-top" alt="이미지 없음">
                        <div class="card-body">
                            <h5 class="card-title">${title}</h5>
                            <p class="card-text">${overview}</p>
                            <p class="card-text">평점: ${vote_average}</p>
                        </div>
                    </div>
                </div>`;

    movieCard.insertAdjacentHTML("beforeend", temp_html);
  });
};
// 이제 데이터를 불러와서 카드를 만들 함수를 선언해 준다.
async function showCards() {
  const movies = await movieFetch(popularUrl);
  makeCards(movies);
}
async function topRatedCards() {
  const movies = await movieFetch(topratedUrl);
  makeCards(movies);
}
async function upComingCards() {
  const movies = await movieFetch(upcomingUrl);
  makeCards(movies);
}

showCards(); // showCards 함수를 호출합니다.
