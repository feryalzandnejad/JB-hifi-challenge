import { render, screen } from '@testing-library/react';

import Input from './Input';

describe('Input component', () =>{
  const mockOnChange= jest.fn();
  
  it('renders Input with correct title', () => {
    render(<Input label='Country' onChange={mockOnChange} value='country' name='country'/>);
    
    const input = screen.getByRole('textbox');
    expect(input).toBeInTheDocument();
  })
});