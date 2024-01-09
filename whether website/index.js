let inputvalue = document.querySelector('#cityinput')
let btn = document.querySelector('#add');
let city = document.querySelector('#cityout')
let descrip = document.querySelector('#temp')
let wind = document.querySelector('#wind')
let apik="5d241dd3b409d3fdd163eb665b863412"
function conversion(val)
{
    return (val - 273).toFixed(3)
}

btn.addEventListener('click', function()
{
    fetch('https://api.openweathermap.org/data/2.5/weather?q='+inputvalue.value+'&appid='+apik)
    .then(res => res.json())

    .then(data =>
    {
        let nameval = data['name']
        let descrip = data['weather']['0']['description']
        let tempature = data['main']['temp']
        let wndspeed = data['wind']['speed']

        city.innerHTML= `Weather of <span>${nameval}<span>`
        temp.innerHTML = `Temperature: <span>${conversion(tempature)} c</span>`
        description.innerHTML = `Sky Condtitions: <span>${descrip}<span>`
        wind.innerHTML = `Wind Speed: <span>${wndspeed} km/h<span>`
    })

    .catch(err => alert('You entered Wrong city name'))
})
