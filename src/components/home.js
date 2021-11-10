import React,{useEffect, useState} from "react";
import './css/style.css';

const Home = () => {

  const [city, setCity] = useState('')
  const [search, setSearch] = useState('london')

  useEffect(() => {
    const fetchApi = async() => {
      const url = `http://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=cb81455da3859180d99a4ed0ca994092`;
      const response = await(fetch(url));
      const resJson = await response.json();
      setCity(resJson.main);
    }
    fetchApi();
  }, [search]);

  return(
    <div className='d'>
      <div className='box'>
        <div className='search-bar'>
          <input type="text" placeholder='Enter City' 
          value={search}
          className='search-input'
          onChange={(event) => {
              setSearch(event.target.value)
          }}/>
        </div>
        {!city ? (
          <p>No Data found</p>
        ) : (
          <>
          <div className='info'>
            <h1><i className="fas fa-street-view"></i> {search}</h1>
            <h2>{city.temp}</h2>
            <h3>Minimum temp: {city.temp_min}</h3>
            <h3>Maximum temp: {city.temp_max}</h3>          
          </div>
        </>
        )}
      </div>
    </div>
  );
};

export default Home;

