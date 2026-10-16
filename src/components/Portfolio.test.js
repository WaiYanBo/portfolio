import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { MemoryRouter } from 'react-router-dom';
import Hero from './Hero';
import Skills from './Skills';
import Navbar from './Navbar';

beforeAll(() => {
  window.matchMedia = () => ({ matches: true, addListener() {}, removeListener() {}, addEventListener() {}, removeEventListener() {} });
  window.IntersectionObserver = class { observe() {} unobserve() {} disconnect() {} };
});
const mount = component => render(<MemoryRouter>{component}</MemoryRouter>);
test('focus selectors expose the selected CV evidence', async () => {
  mount(<Hero />);
  fireEvent.click(screen.getByRole('button', { name: /Risk & compliance/ }));
  expect(screen.getByRole('button', { name: /Risk & compliance/ })).toHaveAttribute('aria-pressed', 'true');
  expect(await screen.findByText('Making risk understandable.')).toBeInTheDocument();
  expect(screen.getByRole('link', { name: /Download CV/ })).toHaveAttribute('download', 'Wai-Yan-Bo-CV.pdf');
});
test('skills search handles matching, empty, and reset states', async () => {
  mount(<Skills />);
  fireEvent.change(screen.getByRole('searchbox'), { target: { value: 'Python' } });
  expect(screen.getByRole('status')).toHaveTextContent('1 skills matching');
  fireEvent.change(screen.getByRole('searchbox'), { target: { value: 'nonexistent' } });
  expect(screen.getByText(/No skills match/)).toBeInTheDocument();
  fireEvent.click(screen.getByRole('button', { name: 'Clear search' }));
  expect(screen.getByRole('searchbox')).toHaveValue('');
  expect(screen.getByRole('status')).toHaveTextContent('27 skills');
});
test('mobile navigation closes with Escape and route selection', () => {
  mount(<Navbar />);
  fireEvent.click(screen.getByRole('button', { name: 'Open menu' }));
  expect(screen.getByRole('button', { name: 'Close menu' })).toHaveAttribute('aria-expanded', 'true');
  fireEvent.keyDown(window, { key: 'Escape' });
  expect(screen.getByRole('button', { name: 'Open menu' })).toHaveAttribute('aria-expanded', 'false');
  fireEvent.click(screen.getByRole('button', { name: 'Open menu' }));
  fireEvent.click(screen.getAllByRole('link', { name: 'About' }).pop());
  expect(screen.getByRole('button', { name: 'Open menu' })).toHaveAttribute('aria-expanded', 'false');
});
