import Api from '../../utils/utils';

import { DEFAULT_ERROR_MESSAGE } from '../MyForm/MyForm.constant';

import { GetWeatherProps } from '../../utils/types';

export const getWeather = async ({
  setWeatherData, 
  setError, 
  setLoading, 
  city, country}: GetWeatherProps) => {
  try {
    setError('');
    setLoading(true);
    setWeatherData('');
    
    const response = await Api({url: `weather?q=${city},${country}`});
    
    const description = response.weather[0].description;

    setWeatherData(description);
  } catch (error) {
    setError(DEFAULT_ERROR_MESSAGE);
  } finally {
    setLoading(false);
  }
};