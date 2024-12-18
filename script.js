

const WeatherData = async(e)=> {
   e.preventDefault()

   
   try {
    
    let input = document.getElementById('input')
   
    const data =  await fetch(`https://api.weatherapi.com/v1/current.json?key=1424b42f26e54ef6a32100055241612&q=${input.value}&aqi=yes`)
    const realdata = await data.json()

    document.getElementById('result').innerHTML = realdata.location.name 
    document.getElementById('temp').innerHTML = realdata.current.temp_c + "&deg" +"C"
    document.getElementById('prec').innerHTML = realdata.current.precip_mm
    document.getElementById('humi').innerHTML = realdata.current.humidity
    document.getElementById('wind').innerHTML = realdata.current.humidity
    document.getElementById('imgtemp').setAttribute('src',realdata.current.condition.icon )
    document.getElementById('daytime').innerHTML = realdata.location.localtime

   } catch (error) {
    alert('Provide Correct Input');
    input.value = ""
   }

input.reset()

}

function Remove() {
   input.value = ""
}

document.getElementById('btn1').addEventListener('click', WeatherData)
document.getElementById('btn2').addEventListener('click', Remove)