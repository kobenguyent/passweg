import '@testing-library/jest-dom';

// Polyfill localStorage in test environment (Node 26 / jsdom)
const createLocalStorageMock = () => {
  let store: Record<string, string> = {};
  return {
    getItem: (key: string) => store[key] || null,
    setItem: (key: string, value: string) => {
      store[key] = value.toString();
    },
    removeItem: (key: string) => {
      delete store[key];
    },
    clear: () => {
      store = {};
    },
    get length() {
      return Object.keys(store).length;
    },
    key: (index: number) => Object.keys(store)[index] || null,
  };
};

const storageMock = createLocalStorageMock();
Object.defineProperty(window, 'localStorage', {
  value: storageMock,
  configurable: true,
  writable: true,
});
Object.defineProperty(globalThis, 'localStorage', {
  value: storageMock,
  configurable: true,
  writable: true,
});

// Mock window.scrollTo
window.scrollTo = () => {};
