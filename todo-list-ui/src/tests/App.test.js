/* eslint-disable no-undef */
import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import App from '../App.jsx';
import Provider from '../context/provider';


test('Teste GET Front-End, renderizando lista de tarefas na tela', async () => {
  render(<Provider><App /></Provider>);
  const linkElement = await screen.findByRole('heading', {
    name: /terminar o desafio da blitz/i
  })

  await waitFor(() => expect(linkElement).toBeInTheDocument())
});