import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import AddToCartButton from './add-to-cart-button';
import { BrowserRouter } from 'react-router-dom';
import type { CartItem } from '../../contexts/cart.context';

describe('Button test', () => {
  it('Should redirect to "/" when clicked', () => {
    const exampleProduct: CartItem = {
      id: '1',
      brand: 'Off-White',
      category: 'Sneakers',
      name: "Out of Office 'Ooo' Sneakers",
      description:
        'Energize your look with a fresh take on heritage adidas style. The adidas Daily 3.0 Shoes cut a classic profile with a modern suede upper. Your walk across campus or commute across town has never looked or felt this good.',
      price: 775,
      image: 'src/assets/images/products/thumbnails/1.png',
      quantity: 1,
    };

    render(
      <BrowserRouter>
        <AddToCartButton
          product={exampleProduct}
          quantity={1}
        ></AddToCartButton>
      </BrowserRouter>
    );

    expect(screen.queryByText('Add to Cart')).toBeInTheDocument();
  });
});
