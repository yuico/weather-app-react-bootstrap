import { WEATHER_IMG_LIST } from './constants'

//match icon based on the description
export const matchWeather = (desc) => {
  if(/rain/i.test(desc)) return WEATHER_IMG_LIST.rain;
  if(/snow/i.test(desc)) return WEATHER_IMG_LIST.snow;
  if(/(sun|clear)/i.test(desc)) return WEATHER_IMG_LIST.sun;
  return WEATHER_IMG_LIST.default;
} 