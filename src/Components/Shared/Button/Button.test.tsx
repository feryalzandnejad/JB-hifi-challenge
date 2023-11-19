import { render, screen, fireEvent, waitFor } from '@testing-library/react';

import Button from './Button';

import { BUTTON_NAME } from '../../MyForm/MyForm.constant';

describe('Button', () => {
  const mockOnClick = jest.fn();
  
  it('renders button with correct text and call onclick function when click on button', async () => {
    render(<Button onClick={mockOnClick} disabled={false}>{BUTTON_NAME}</Button>);
    
    const button = screen.getByText(BUTTON_NAME)
    
    expect(button).toBeInTheDocument();
    
    fireEvent.click(button);
    
    await waitFor(() => {
      expect(mockOnClick).toHaveBeenCalled();
    })
  })
})