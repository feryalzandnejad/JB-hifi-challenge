import { useState, ChangeEvent } from "react";
import Alert from '@mui/material/Alert';

import TextFields from '../Shared/Inputs/Input';
import Buttons from '../Shared/Button/Button';
import MyCard from '../MyCard/MyCard';

import { getWeather } from './MyForm.helper';
import {MAIN_TITLE, BUTTON_NAME} from './MyForm.constant';
import { MainContainerStyles, ButtonWrapperStyles } from './MyForm.styles';

const MyForm = () : JSX.Element=> {
  const [city, setCity] = useState('');
  const [country, setCountry] = useState('');
  const [weatherData, setWeatherData] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  
  const handleClick = () => {
    getWeather({city,country,setWeatherData, setError, setLoading}); 
  };
  
  const handleCityChange = (e: ChangeEvent<HTMLInputElement>) => {
    setCity(e.target.value);
  };
  
  const handleCountryChange = (e: ChangeEvent<HTMLInputElement>) => {
    setCountry(e.target.value);
  };
  
  return (
    <MainContainerStyles>
      <h1>{MAIN_TITLE}</h1>
      <TextFields label={'Country'} onChange={handleCountryChange} value={country}/>
      <TextFields label={'City'} onChange={handleCityChange} value={city}/>
      
      <ButtonWrapperStyles> 
        <Buttons onClick={handleClick} disabled={loading}>{BUTTON_NAME}</Buttons>
      </ButtonWrapperStyles> 
      
      {weatherData ?  <MyCard description={weatherData} /> : null}
      
      {loading ? <div>Loading....</div> : null} 
      
      
      {error ? <Alert severity="error"> {error} </Alert> : null}
        
    </MainContainerStyles>
  )
};

export default MyForm;