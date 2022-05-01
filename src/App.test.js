import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the header', () => {
  render(<App />);
  const header = screen.getByText(/Chuck Norris/i);
  expect(header).toBeInTheDocument();
});
