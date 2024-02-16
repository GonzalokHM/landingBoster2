/**
 * @vitest-environment jsdom
 */

import { render, screen } from '@testing-library/react';
import { describe, expect, test } from 'vitest';
import Footer from '../components/Footer';

describe('Footer', () => {
  test('renders the developer link', () => {
    render(<Footer />);
    const linkElement = screen.getByRole('link', { name: /ghmdevs/i });
    expect(linkElement).toBeInTheDocument();
    expect(linkElement).toHaveAttribute('href', 'https://ghmportfolio.netlify.app/home');
  });
});