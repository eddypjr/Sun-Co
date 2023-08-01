import { describe, it } from 'vitest';
import { renderHook } from '@testing-library/react';
import useEnvironmentCheck from './useEnvironmentCheck';

describe('useEnvironmentCheck', () => {
  it('should return true when running in local environment', () => {
    window.location.hostname = 'localhost';

    const { result } = renderHook(() => useEnvironmentCheck());

    expect(result.current).toBe(true);
  });
});
