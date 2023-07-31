import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import ProductList from './product-list';
import { BrowserRouter } from 'react-router-dom';

describe('ProductList Component', () => {
  it('Renders properly', () => {
    render(
      <BrowserRouter>
        <ProductList />
      </BrowserRouter>
    );

    expect(screen.getByText('Explore the latest drops')).toBeInTheDocument();
  });
});
