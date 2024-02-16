/**
 * @vitest-environment jsdom
 */

import { describe, expect, test } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import Main from '../components/Main';

describe('Main Component', () => {
  test('form submission shows thank you message', async () => {
    render(<Main />);
    userEvent.type(screen.getByLabelText(/name:/i), 'John Doe');
    userEvent.type(screen.getByLabelText(/email:/i), 'john@example.com');
    userEvent.click(screen.getByRole('button', { name: /try now/i }));

    expect(await screen.findByText(/gracias John Doe/i)).toBeInTheDocument();
  });

  test('Slogan has correct background image', () => {
    render(<Main />);
    const sloganElement = screen.getByRole('heading', {
      name: /unlock your service's potential/i,
    });
    expect(sloganElement).toHaveStyle(
      `background-image: url(https://usercontent.one/wp/www.rendimientomaximo.com/wp-content/uploads/2023/05/Diseno-sin-titulo-3-1024x1024.jpg)`
    );
  });

  test('List has correct background image', () => {
    render(<Main />);
    const listElement = screen.getByText(/supercharge your online presence/i);
    expect(listElement).toHaveStyle(
      `background-image: url(https://cdn.pixabay.com/photo/2022/08/08/14/45/smartphone-7372865_640.jpg)`
    );
  });

  test('MainStyled changes style on scroll', () => {
    render(<Main />);
    // Mockea el valor de scrollY para simular el efecto del scroll
    window.scrollY = 500; // Asume que este valor de scroll debería cambiar el estilo
    window.dispatchEvent(new Event('scroll')); // Dispara el evento de scroll

    const mainStyledElement = screen.getByTestId('main-styled'); // Asegúrate de añadir `data-testid="main-styled"` a tu componente MainStyled

    // Verifica que el estilo del componente ha cambiado como se espera
    // Este paso depende de cómo esperas que cambie el estilo. Por ejemplo:
    expect(mainStyledElement).toHaveStyle(`background: ...`); // Completa con el estilo esperado
  });

  test('Form becomes visible after subtitle "Take the Next Step"', async () => {
    render(<Main />);

    userEvent.click(screen.getByRole('button', { name: /GO/i }));


    // Verifica que el texto esté en el documento
    const textBeforeForm = screen.getByText(/Take the Next Step/i);
    expect(textBeforeForm).toBeInTheDocument();

    // Verifica que el input (y por lo tanto, el formulario) es visible
    const nameInput = screen.getByLabelText(/name:/i);
    expect(nameInput).toBeVisible();
  });
});
