//API
const weather = document.querySelector("[data-weather]")
weather.addEventListener("click", () => {
    loadApi()
    console.log("connect with server")
})

function loadApi() {

    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '32348a8ebdmsha30cfd1267297dfp153226jsn23065234f13e',
            'X-RapidAPI-Host': 'community-open-weather-map.p.rapidapi.com'
        }
    };

    fetch('https://community-open-weather-map.p.rapidapi.com/climate/month?q=San%20Francisco', options)
        .then(response => response.json())
        .then(json => showApi(json))
        .catch(err => console.error(err));

}
function showApi(list) {

    console.log(list.city.name);
    const div = document.createElement("div");
    const divPost = document.createElement("div");
    divPost.innerHTML = `<h2>${list.city.name}</h2>`;
    div.appendChild(divPost);
}
