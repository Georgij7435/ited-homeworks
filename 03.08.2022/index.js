fetch('https://kinopoiskapiunofficial.tech/api/v2.2/films/top?type=TOP_250_BEST_FILMS&page=1', {
    method: 'GET',
     headers: {
        'X-API-KEY': '96d858dc-466d-45ed-8a9f-5da266c51ede',
        'Content-Type': 'application/json',
    },
})
    .then(res => res.json())
    .then(
        (arr)=>{
            arr.films.forEach(element => {
                console.log(element)
                document.getElementById("container").innerHTML += `<span style="font-size:20px; font-family: 'Yanone Kaffeesatz', sans-serif;"><img style="width: 400px; border:3px solid black; border-radius:5px;" src = " ${element.posterUrl}"/><br> ${element.nameRu} <br>Время просмотра ${element.filmLength} <br>Рейтинг фильма ${element.rating} <br>Год выхода фильма ${element.year}<br>`
            });
        }
    )
    .catch(err => console.log(err))
    
