import { useState, useEffect, useCallback } from 'react'
import { MyContext } from './lib/context'
import { fetchWeather } from './lib/fetch';
import Header from './components/Header'
import Section from './components/Section'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.scss'

function App() {
  const [weatherData, setWeatherData] = useState([]);
  const [toggleOn, setToggleOn] = useState(true);
  const CITIES = '6094817,1835848,643492,1850147,6167865,6176823,1522867'

  const callback = useCallback((toggleOn) => {
    setToggleOn(toggleOn);
  }, []);
  
  useEffect(() => {
    const fetchData = async (cities) => {
      const res = await fetchWeather('group', cities)
      setWeatherData(res.list);
    }
    fetchData(CITIES);
  }, [])
  return (
    <MyContext.Provider value={{weatherData, toggleOn}}>
      <Header parentCallback={callback}/>
      {weatherData.length ? <Section /> : <div>There is an error</div>}  
    </MyContext.Provider>
  );
}

export default App;
