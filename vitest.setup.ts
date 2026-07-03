import '@testing-library/jest-dom/vitest';

// jsdom doesn't implement IntersectionObserver, but framer-motion's
// whileInView/useInView relies on it. Provide a minimal mock so
// components using scroll-triggered animations can render in tests.
class MockIntersectionObserver {
  observe = () => null;
  unobserve = () => null;
  disconnect = () => null;
}

// @ts-expect-error - partial mock is fine for test purposes
global.IntersectionObserver = MockIntersectionObserver;
