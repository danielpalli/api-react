interface Search {
    city: string;
    country: string;
}

export const weatherUseCase = async (search: Search) => {
  try {
    const apiKey = import.meta.env.VITE_API_KEY;
    const url = `http://api.openweathermap.org/geo/1.0/direct?q=${search.city},${search.country}&appid=${apiKey}`;
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    const data = await response.json();

    console.log(data);
    return data;
  } catch (error) {
    console.error('There was a problem with your fetch operation:', error);
  }
};
