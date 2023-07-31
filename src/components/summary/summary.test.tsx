import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';
import Summary from './summary';
import { BrowserRouter } from 'react-router-dom';

describe('Summary Component', () => {
  it('Renders properly', () => {
    const { getByTestId } = render(
      <BrowserRouter>
        <Summary cartTotal={400} />
      </BrowserRouter>
    );
    const finalPrice = getByTestId("finalPrice")

    expect(finalPrice).toHaveTextContent('414');
  });
});
