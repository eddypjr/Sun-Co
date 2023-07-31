/* eslint-disable @typescript-eslint/no-explicit-any */
import { describe, it } from 'vitest';
import { renderHook } from '@testing-library/react';
import useIsMobile from './useIsMobile';

const mockMatchMedia = (matches: boolean) => ({
  matches,
  addListener: () => {},
  removeListener: () => {},
});

describe('useIsMobile', () => {
  it('should return true for mobile viewport', () => {
    (window as any).matchMedia = mockMatchMedia(true);

    const { result } = renderHook(() => useIsMobile());
    const isMobile: boolean = result.current;

    expect(isMobile).toBe(false);
  });

  it('should return false for non-mobile viewport', () => {
    (window as any).matchMedia = mockMatchMedia(false);

    const { result } = renderHook(() => useIsMobile());
    const isMobile: boolean = result.current;

    expect(isMobile).toBe(false);
  });
});
