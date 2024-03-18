let input=document.getElementById("location");
let btn=document.getElementById("btn");
let humidity=document.getElementById("humidvalue");
let temperature=document.getElementById("tempvalue");
let img=document.getElementById("sun")

let checkWeather=async (city)=>{
    let key="d1eee8a4f69f7acce8fc62d0c08bf3d6"
    let url=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}`
    let weather1=await fetch(url)
    let weather2=await weather1.json()
    console.log(weather2);
    let deg=Math.round(weather2.main.temp-273)
    temperature.innerHTML=`${deg} <sup>0</sup> <i>C</i>`
    humidity.innerHTML=`${weather2.main.humidity} <span>g / m <sup>3</sup></span>`
    
    // if(weather2.weather[0].main="Haze"){
    //     img.src="https://png.pngtree.com/thumb_back/fw800/background/20231011/pngtree-ethereal-mist-a-smoke-cloud-enveloped-in-a-dark-textured-background-image_13625971.png"
    // }

    // elseif(weather2.weather[0].main="Clear sky")
    // {
    //     img.src="https://thumbs.dreamstime.com/b/clear-blue-sky-black-white-cloud-clear-blue-sky-black-white-cloud-circular-facula-abstract-background-abstract-151472293.jpg"
    // }

    // elseif(weather2.weather[0].main="Smoke")
    // {
    //     img.src="https://img.freepik.com/premium-photo/dangerous-dark-stormy-sky-with-fire-smoke-nature-background_924727-2020.jpg"
    // }

    // elseif(weather2.weather[0].main="Clouds")
    // {
    //     img.src="https://i.pinimg.com/736x/7d/cd/49/7dcd4936b7f45cbb476b37d406f61583.jpg"
    // }
    switch(weather2.weather[0].main){
        case "Haze":
            img.src="https://png.pngtree.com/thumb_back/fw800/background/20231011/pngtree-ethereal-mist-a-smoke-cloud-enveloped-in-a-dark-textured-background-image_13625971.png"
            break;

        case "Clear sky":
                img.src="https://thumbs.dreamstime.com/b/clear-blue-sky-black-white-cloud-clear-blue-sky-black-white-cloud-circular-facula-abstract-background-abstract-151472293.jpg"
                break;
        case "Smoke":
            img.src="https://img.freepik.com/premium-photo/dangerous-dark-stormy-sky-with-fire-smoke-nature-background_924727-2020.jpg"
            break;
        case "Clouds":
            img.src="https://i.pinimg.com/736x/7d/cd/49/7dcd4936b7f45cbb476b37d406f61583.jpg"
            break;
        // default:
        //     img.src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQM-SDVTb7ubKCYasum6bWjipkAhgQ2o-2OLQ&usqp=CAU"
        //     break;

        
    }
}

btn.addEventListener("click",()=>{
    checkWeather(input.value)
})