import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import CartItems from './cart-items';
import type { CartItem } from '../../contexts/cart.context';

const exampleProduct: CartItem = {
  id: '1',
  brand: 'Off-White',
  name: "Out of Office 'Ooo' Sneakers",
  description:
    'Energize your look with a fresh take on heritage adidas style. The adidas Daily 3.0 Shoes cut a classic profile with a modern suede upper. Your walk across campus or commute across town has never looked or felt this good.',
  price: 775,
  image: 'src/assets/images/products/thumbnails/1.png',
  quantity: 1,
};

describe('Cart Items component in the Cart page', () => {
  it('Should render with the correct product data', () => {
    render(<CartItems item={exampleProduct} />);

    expect(screen.getByText('Remove')).toBeInTheDocument();
    expect(screen.getByText('$775')).toBeInTheDocument();
  });
});
