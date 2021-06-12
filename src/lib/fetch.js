import axios from 'axios';
import { useEffect, useState } from 'react';
import { API_BASIC, API_KEY } from '../lib/constants';

const URL = API_BASIC;
const KEY = API_KEY;

export const fetchWeather = async (type, cities) => {
  const { data } = await axios.get(`${URL}/${type}`, {
    params: {
      id: cities,
      units: 'metric',
      APPID: KEY,
    },
  });
  return data;
};

export const fetchFiveDaysData = async (type, city) => {
  const { data } = await axios.get(`${URL}/${type}`, {
    params: {
      id: city,
      cnt: 5,
      APPID: KEY,
    },
  });
  return data;
};

//custom hooks for handling error and loading
export const useFetch = (type, cities) => {
  const [weatherData, setWeatherData] = useState([]);
  const [error, setError] = useState();
  const [loading, setLoading] = useState(true);

  const fetchWeather = async () => {
    setLoading(true);
    const { data } = await axios.get(`${URL}/${type}`, {
      params: {
        id: cities,
        units: 'metric',
        APPID: KEY,
      },
    });
    if (data) setWeatherData(data);
    else setError('Cannot get the data from server.');
  };
  useEffect(fetchWeather);
  return { fetchWeather, weatherData, error, loading };
};
