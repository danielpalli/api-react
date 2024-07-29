import { Weather } from '../../../hooks/useWeather';
import { formatTemperature } from '../../../utils/formatTemperature';

interface Props {
  weather: Weather;
}

export const WeatherDetail = ({ weather }: Props) => {
  return (
    <div>
      <h2>{weather.name}</h2>
      <p>{formatTemperature(weather.main.temp)}°C</p>
      <p>{formatTemperature(weather.main.temp_min)}°C</p>
      <p>{formatTemperature(weather.main.temp_max)}°C</p>
    </div>
  );
};
