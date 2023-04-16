
let input = document.querySelector('input')
let button = document.querySelector('button')
let searchinputbox = document.querySelector('button')
let body = document.querySelector('body')
let form = document.querySelector('form')
let API_KEY = `2f5d4bdaf1cc4038aaf113411231304`;


const getData = async (e) => {
    e.preventDefault()

    try {
        const response = await fetch(`https://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${input.value}&aqi=yes`)
        const data = await response.json()
        let city = document.getElementById('city');
        city.innerText = `${data.location.name} ${data.location.country}`;
        let temperature = document.getElementById('temp');
        temperature.innerHTML = `${Math.round(data.current.temp_c)}&deg;c`
        let weatherType = document.getElementById('weather');
        weatherType.innerText = `${data.current.condition.text}`;
        body.style.background = 'url(https://source.unsplash.com/random/900×700/?weather)';
    } catch (error) {
        window.alert("Please enter valid city name")

    }
    form.reset()
}
button.addEventListener('click', getData)