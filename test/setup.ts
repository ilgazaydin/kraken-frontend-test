import '@testing-library/jest-dom';
import { mockRouterHooks } from './mocks';

mockRouterHooks();

global.console = {
  ...console,
  warn: jest.fn(),
  error: jest.fn(),
};

Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: jest.fn().mockImplementation((query) => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: jest.fn(),
    removeListener: jest.fn(),
    addEventListener: jest.fn(),
    removeEventListener: jest.fn(),
    dispatchEvent: jest.fn(),
  })),
});

