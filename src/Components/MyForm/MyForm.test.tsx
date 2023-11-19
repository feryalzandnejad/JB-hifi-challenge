import { render, screen, waitFor, act } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';

import MyForm from './MyForm';
import {MAIN_TITLE, BUTTON_NAME, DEFAULT_ERROR_MESSAGE} from './MyForm.constant';

import { CARD_TITLE } from '../MyCard/MyCard.constant';
import Api from '../../utils/utils';

jest.mock('../../utils/utils');

describe('MyForm Component', () => {
  it('should display main title, inputs and button', () => {
    render(<MyForm />);
    
    const title = screen.getByText(MAIN_TITLE);
    const inputCity = screen.getByRole('textbox', {name: 'City'});
    const inputCountry = screen.getByRole('textbox', {name: 'Country'});
    const getWeatherBtn = screen.getByRole('button', {name: BUTTON_NAME});
    
    expect(title).toBeInTheDocument();
    expect(inputCity).toBeInTheDocument();
    expect(inputCountry).toBeInTheDocument();
    expect(getWeatherBtn).toBeInTheDocument();
  });
  
  it('should show expected weather for london', async () => {
    (Api as jest.Mock).mockResolvedValue({
      weather: [
        {
          description: 'scattered clouds'
        }
      ]
    });
    
    render(<MyForm />);
    
    const inputCountry =  screen.getByLabelText('Country');
    const inputCity = screen.getByRole('textbox', {name: 'City'});
    const getWeatherBtn = screen.getByRole('button', {name: BUTTON_NAME});
    
    userEvent.type(inputCountry, 'uk');
    userEvent.type(inputCity, 'london');
    
    expect(inputCountry).toHaveValue('uk');
    expect(inputCity).toHaveValue('london');
    
    act(() => {
      userEvent.click(getWeatherBtn);
    })
    
    expect(screen.getByText('Loading...')).toBeInTheDocument();
    
    await waitFor(() => {
      expect(screen.getByText(CARD_TITLE)).toBeInTheDocument();
      
      expect(screen.queryByText('Loading...')).not.toBeInTheDocument();
      expect(screen.getByText('Description: scattered clouds')).toBeInTheDocument();
    })
  });
  
  it('display error toast when api call failed', async () => {
    (Api as jest.Mock).mockResolvedValue(Promise.reject({}));
    
    render(<MyForm />);
    
    const inputCountry =  screen.getByLabelText('Country');
    const inputCity = screen.getByRole('textbox', {name: 'City'});
    const getWeatherBtn = screen.getByRole('button', {name: BUTTON_NAME});
    
    userEvent.type(inputCountry, 'uk');
    userEvent.type(inputCity, 'london');
    
    act(() => {
      userEvent.click(getWeatherBtn);
    })
    
    await waitFor(() => {
      expect(screen.getByText(DEFAULT_ERROR_MESSAGE)).toBeInTheDocument();
    })
  });
  
  it(`don't set data if component unmounted before api call fetches`, async () => {
    (Api as jest.Mock).mockResolvedValue({
      weather: [
        {
          description: 'scattered clouds'
        }
      ]
    });
    
    const { unmount } = render(<MyForm />);
    
    const inputCountry =  screen.getByLabelText('Country');
    const inputCity = screen.getByRole('textbox', {name: 'City'});
    const getWeatherBtn = screen.getByRole('button', {name: BUTTON_NAME});
    
    userEvent.type(inputCountry, 'uk');
    userEvent.type(inputCity, 'london');
    
    act(() => {
      userEvent.click(getWeatherBtn);
    })
    
    unmount();
    
    await waitFor(() => {
      expect(screen.queryByText(CARD_TITLE)).not.toBeInTheDocument();
      expect(screen.queryByText('Description: scattered clouds')).not.toBeInTheDocument();
    })
  });
});
