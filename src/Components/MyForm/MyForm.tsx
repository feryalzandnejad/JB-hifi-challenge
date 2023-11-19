import { useState, ChangeEvent, useEffect } from "react";
import Alert from '@mui/material/Alert';

import Input from '../Shared/Inputs/Input';
import Button from '../Shared/Button/Button';
import MyCard from '../MyCard/MyCard';

import { getWeather } from './MyForm.helper';
import {MAIN_TITLE, BUTTON_NAME} from './MyForm.constant';
import { MainContainerStyles, ButtonWrapperStyles } from './MyForm.styles';

const MyForm = () : JSX.Element=> {
  const [inputValues, setInputValues] = useState({
    city: '',
    country: '',
  })
  const [weatherData, setWeatherData] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  
  const abortController = new AbortController();
  
  const handleClick = () => {
    getWeather({setWeatherData, setError, setLoading, inputValues, signal: abortController.signal}); 
  };
  
  
  const handleInputValues = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValues({
      ...inputValues,
      [e.target.name]: e.target.value
    })
  }
  
  useEffect(() => {
    return () => {
      abortController.abort();
    }
  }, [inputValues])
  
  return (
    <MainContainerStyles>
      <h1>{MAIN_TITLE}</h1>
      
      <Input 
        label='Country'
        onChange={handleInputValues}
        value={inputValues.country} 
        name='country'/>
      <Input 
        label='City' 
        onChange={handleInputValues} 
        value={inputValues.city} 
        name='city'/>
      
      <ButtonWrapperStyles> 
        <Button onClick={handleClick} disabled={loading}>{BUTTON_NAME}</Button>
      </ButtonWrapperStyles> 
      
      {weatherData ? <MyCard description={weatherData} /> : null}
      
      {loading ? <div>Loading...</div> : null} 
      
      {error ? <Alert severity="error">{error}</Alert> : null}
        
    </MainContainerStyles>
  )
};

export default MyForm;