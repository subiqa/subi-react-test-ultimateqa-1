import { render, screen } from '@testing-library/react';
import App from './App';

test('URL is correct', () => {
  render(<App />);
  const linkElement = screen.getByText(/react testing/i);
  expect(linkElement.href).toContain("https://reactjs.org");
  expect(linkElement.className).toBe("App-link")
});
