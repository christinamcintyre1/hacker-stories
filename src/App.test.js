import { render, screen } from '@testing-library/react';
import App from './App';

describe('something truthy and falsy', () => {
  it('true to be true', () => {
    expect(true).toBeTruthy();
  });
  it('false to be false', () => {
    expect(false).toBeFalsy();
  });
});
