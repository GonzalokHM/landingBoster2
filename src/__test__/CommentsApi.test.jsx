/**
 * @vitest-environment jsdom
 */

import { describe, it, expect, beforeEach, vi } from 'vitest';
import { render, screen, waitFor, act } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Comments from '../components/CommentsApi';

// mockear fetch
vi.spyOn(window, 'fetch').mockImplementation(() =>
  Promise.resolve({
    json: () => Promise.resolve([
      { id: 1, email: "user@example.com", body: "Comment 1" },
      { id: 2, email: "user2@example.com", body: "Comment 2" },
    ]),
  })
);

describe('Comments component', () => {
  beforeEach(() => {
    // Limpia las llamadas mock entre tests
    vi.clearAllMocks();
  });

  it('loads and displays initial comments from the API', async () => {
    render(<Comments userEmail="test@example.com" />);

    // Espera a que los comentarios se carguen y se muestren
    // Espera a que los comentarios se carguen
  await waitFor(() => {
    const commentElements = screen.getAllByTestId('comment');
    expect(commentElements.length).toBeGreaterThan(0); // Verifica que hay comentarios

    // Verifica que cada comentario tiene un email y un body renderizado
    commentElements.forEach(commentElement => {
      expect(commentElement).toHaveTextContent(/@/); // Suponiendo que todos los emails contienen '@'
      expect(commentElement).toHaveTextContent(/./); // Verifica que hay algún contenido en 'body'
    });
  });
  
  // Verifica que fetch fue llamado correctamente
  expect(fetch).toHaveBeenCalledTimes(1);
  expect(fetch).toHaveBeenCalledWith('https://jsonplaceholder.typicode.com/comments?_limit=5');
});

  it('adds a new comment and displays it at the top', async () => {
    const newCommentText = "New user comment";

    render(<Comments userEmail="user@example.com" />);

    // Simula la entrada del usuario y el envío del formulario
    await act(async () => {
      await userEvent.type(screen.getByPlaceholderText("Write a review!!"), newCommentText);
      await userEvent.click(screen.getByRole('button', { name: /Send/ }));
    });

    // Verifica que el nuevo comentario se muestra al principio de la lista
    const comments = await screen.findAllByRole('listitem');
    expect(comments[0]).toHaveTextContent(newCommentText);
  });
});
