import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import Banner from './banner';
import { BrowserRouter } from 'react-router-dom';

describe('Banner in Home page', () => {
  it('Should render with the correct link', () => {
    render(
      <BrowserRouter>
        <Banner />
      </BrowserRouter>
    );

    expect(screen.getByText('25% OFF')).toBeInTheDocument();
    expect(screen.getByRole('link')).toHaveAttribute('href', '/cart');
  });
});
