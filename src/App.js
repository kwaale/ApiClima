import './App.css';
import Nav from './components/Nav';
import Cards from './components/Cards';
import React, { useState } from 'react';

function App() {
  const [cities, setCities] = useState([]);
  function onSearch(ciudad){
    const apiKey = '5b709346262108a1389e88c72facf8e6';
    //http://api.openweathermap.org/data/2.5/weather?q=cuy&units=metric&appid=5b709346262108a1389e88c72facf8e6
    console.log('ciudad',ciudad)
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${ciudad}&units=metric&appid=${apiKey}`)
    .then(r=>r.json())
      .then((recurso) => {
        if (recurso.main !== undefined) {
          const ciudad = {
            min: Math.round(recurso.main.temp_min),
            max: Math.round(recurso.main.temp_max),
            img: recurso.weather[0].icon,
            id: recurso.id,
            wind: recurso.wind.speed,
            temp: recurso.main.temp,
            name: recurso.name,
            weather: recurso.weather[0].main,
            clouds: recurso.clouds.all,
            latitud: recurso.coord.lat,
            longitud: recurso.coord.lon
          }
          setCities(oldCities=>[...oldCities, ciudad]);
        }else{alert(ciudad + " no se encuentra")}
      })
  }
  return (
    <div className="App">
      <h1>App del Clima</h1>
      <p>Escriba alguna ciudad en el buscador para conocer la temperatura.</p>
      <Nav onSearch={onSearch}/>
      <Cards cities={cities} onClose={onClose}/>
    </div>
  );
  function onClose(id){
    setCities(oldCities=>oldCities.filter(c=> c.id !== id));
  }
}
export default App;