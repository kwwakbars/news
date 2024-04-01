function fetchData(url) {
    return fetch(url)
        .then((response) => response.json())
        .catch((error) => console.error("У тебя ошибка", error));
}
fetchData("https://e2f858bd63da2370.mokky.dev/news").then((data) =>
    renderNews(data)
);
function renderNews(data) {
    let wrapper = document.querySelector(".news__list");
    wrapper.innerHTML = data
        .map((news) => {
            return `
        <div class="news__cards">
            <img src="${news.image}" alt="">
            <div class="news__info">
                <div class="news__info-items">
                    <p class="news__info-date">${news.date}</p>
                    <img class='news__img-png' src="./images/heart (1).png" alt="">
                </div>
                <h3>${news.title}</h3>
                <p class="news__info-date">${news.text}</p>
                    <a href="">Читать дальше>></a>
                    <img src="./images/share.png" alt="">
            </div>
        </div>`
    })
}

