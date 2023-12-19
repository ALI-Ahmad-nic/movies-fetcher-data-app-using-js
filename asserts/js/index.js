const APIURL =
    "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1";
const IMGPATH = "https://image.tmdb.org/t/p/w1280";
const SEARCHAPI =
    "https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query=";
const main = document.getElementById("movie-box")
const movieget = async (api) => {
    const response = await fetch(api)
    const data = await response.json();
    console.log(data);
    movieshow(data.results)
}
const movieshow = (data) => {
    //console.log(data);
    main.innerHTML = "";
    data.forEach((item) => {
        console.log(item);
        const newdiv = document.createElement("div")
        newdiv.classList.add("box")
        newdiv.innerHTML = `
        <img src="${IMGPATH + item.poster_path }" alt="">
        <div class="overlay">
            <div class="title">
                <h2>${item.title}</h2>
                <span>${item.vote_average}</span>
            </div>
            <h3>overview</h3>
            <p>${item.overview }</p>
        </div> `;
        main.appendChild(newdiv)
    })

}
document.getElementById("search").addEventListener('keyup', function(event){
    if(event.target.value != ""){
        movieget(SEARCHAPI + event.target.value);
    }
    else{
        movieget(APIURL) 
    }
});

movieget(APIURL)