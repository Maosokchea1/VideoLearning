import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the Video Learning logo', () => {
  render(<App />);
  expect(screen.getByRole('img', { name: /video learning logo/i })).toBeInTheDocument();
});
