let weather = {
    "apikey":"63a0256ae23b1e0713e6f267e824a657",
    fetchweather : function (city){
        fetch(
            "https://api.openweathermap.org/data/2.5/weather?q=" 
            + city 
            + "&units=metric&appid=" 
            + this.apikey 
        )
         .then((Response)=> Response.json())
         .then((data)=>this.displayWeather(data)); 
    },
    displayWeather : function(data){
        const { name } = data;
        const {icon,description} =data.weather[0];
        const {temp,humidity} = data.main;
        const {speed} = data.wind;
        document.querySelector(".city").innerText = " Weather in " + name;
        document.querySelector(".icon").src = 
          "https://openweathermap.org/img/wn/"+ icon + "@2x.png";
        document.querySelector(".description").innerText = description;
        document.querySelector(".temp").innerText = temp + "°C";
        document.querySelector(".humidity").innerText = "Humidity:" + humidity + "%";
        document.querySelector(".wind").innerText = "Wind speed:" + speed + "km/h";
        document.querySelector(".weather").classList.remove("loading");
       
    },
    search: function (){
        this.fetchweather(document.querySelector(".search-bar").value);
        }

};
document.querySelector(".search button").addEventListener("click",function (){
    weather.search();

});

document.querySelector(".search-bar").addEventListener("keyup",function(event){
    if (event.key == "Enter"){
        weather.search();
    }

});

weather.fetchweather("city");