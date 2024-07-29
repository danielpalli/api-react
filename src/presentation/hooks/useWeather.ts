import axios from 'axios';
import { useMemo, useState } from 'react';
import { z } from 'zod';

export interface Search {
  city: string;
  country: string;
}

const Weather = z.object({
  name: z.string(),
  main: z.object({
    temp: z.number(),
    temp_min: z.number(),
    temp_max: z.number(),
  }),
});

export type Weather = z.infer<typeof Weather>;

const initialState = {
  name: '',
  main: {
    temp: 0,
    temp_max: 0,
    temp_min: 0,
  },
};

export const useWeather = () => {
  const [weather, setWeather] = useState<Weather>(initialState);
  const [notFound, setNotFound] = useState(false);

  const fetchWeather = async (search: Search) => {
    const appId = import.meta.env.VITE_API_KEY;
    setWeather(initialState);
    try {
      const geoUrl = `https://api.openweathermap.org/geo/1.0/direct?q=${search.city},${search.country}&appid=${appId}`;
      const geoResponse = await axios(geoUrl);

      if (!geoResponse.data.length) {
        console.log('City not found');
        setNotFound(true);
        return;
      }

      const { lat, lon } = geoResponse.data[0];
      const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${appId}`;
      const weatherResponse = await axios(weatherUrl);
      const result = Weather.safeParse(weatherResponse.data);

      if (result.success) {
        setWeather(result.data);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const hasWeatherData = useMemo(() => weather.name, [weather]);

  return { weather, fetchWeather, hasWeatherData, notFound };
};
