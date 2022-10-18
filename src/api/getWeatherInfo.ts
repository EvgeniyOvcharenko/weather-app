const URL = 'https://api.openweathermap.org/data/2.5/';
const API_KEY = 'fee1c5a62d0f8e766797ffe2432a45b1';

export const getCurrentWeather = async (city: string) => {
  const response = await fetch(
    `${URL}weather?q=${city}&units=metric&appid=${API_KEY}`,
  );
  return await response.json();
};

export const getWeekWeather = async (city: string) => {
  const response = await fetch(
    `${URL}forecast?q=${city}&units=metric&cnt=40&appid=${API_KEY}`,
  );
  return await response.json();
};
