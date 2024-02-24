/**
 * @vitest-environment jsdom
 */

import { describe, expect, test } from 'vitest';
import { render, screen, waitFor, act } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import Main from '../components/Main';

describe('Main Component', () => {
  test('form submission shows thank you message', async () => {
    render(<Main />);
    await userEvent.type(screen.getByLabelText(/Name:/i), 'John Doe');
    await userEvent.type(screen.getByLabelText(/Email:/i), 'john@example.com');
    await act(async () => {
      await userEvent.click(screen.getByRole('button', { name: /Try Now/i }));
    });
    // screen.debug();
  
    // Espera y verifica que el mensaje de agradecimiento aparezca
    await waitFor(() => {
      expect(screen.getByText(/Gracias John Doe, te hemos enviado el eBook y más información a john@example.com/i)).toBeInTheDocument();
    });
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
    const listContainer = screen.getByTestId('list-container');
    expect(listContainer).toHaveStyle(
      `background-image: url(https://cdn.pixabay.com/photo/2022/08/08/14/45/smartphone-7372865_640.jpg)`
    );
  });

  test('está preparado para cambiar de estilo en respuesta al scroll', () => {
    render(<Main />);
    
    const mainStyledElement = screen.getByTestId('main-styled');
    
    expect(mainStyledElement).toBeInTheDocument();
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
