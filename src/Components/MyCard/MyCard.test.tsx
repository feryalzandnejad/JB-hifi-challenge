import { render, screen } from '@testing-library/react';

import MyCard from './MyCard';
import { CARD_TITLE } from './MyCard.constant';

describe('MyCard Component', () => {
  it('renders with correct title and description ', async () => {
    render(<MyCard description='This is a test description' />);

    const title = screen.getByText(CARD_TITLE);
    const testDescription = screen.getByText(`Description: This is a test description`);
    
    expect(title).toBeInTheDocument();
    expect(testDescription).toBeInTheDocument();
  })
});