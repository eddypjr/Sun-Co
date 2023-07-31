import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import AddToCartButton from './add-to-cart-button';
import type { CartItem } from '../../contexts/cart.context';
import { BrowserRouter } from 'react-router-dom';

const exampleProduct: CartItem = {
  id: '1',
  brand: 'Off-White',
  name: "Out of Office 'Ooo' sneakers",
  description:
    'Energize your look with a fresh take on heritage adidas style. The adidas Daily 3.0 Shoes cut a classic profile with a modern suede upper. Your walk across campus or commute across town has never looked or felt this good.',
  price: 775,
  image: 'src/assets/images/products/thumbnails/1.png',
  quantity: 1,
};

describe('Button test', () => {
  it('Should redirect to "/" when clicked', () => {
    render(
      <BrowserRouter>
        <AddToCartButton
          product={exampleProduct}
          quantity={1}
        ></AddToCartButton>
      </BrowserRouter>
    );

    expect(screen.queryByText('Add to Cart')).toBeInTheDocument();
    expect(screen.getByRole('link')).toHaveAttribute('href', '/');
  });
});
