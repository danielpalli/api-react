import { Form } from '../../components';
import { WeatherDetail } from '../../components/weather/weather/WeatherDetail';
import { useWeather } from '../../hooks/useWeather';

export const WeatherPage = () => {
  const { weather, fetchWeather, hasWeatherData, notFound } = useWeather();

  return (
    <>
      <h1 className="text-3xl drop-shadow-xl font-semibold antialiased">
        Weather
      </h1>
      <Form fetchWeather={fetchWeather} />
      {hasWeatherData && <WeatherDetail weather={weather} />}
      {notFound && <p>City not found</p>}
    </>
  );
};
