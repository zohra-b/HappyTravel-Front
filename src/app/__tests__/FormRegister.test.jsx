import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react';
import FormRegister from '../../components/FormRegister.jsx';
import { registerUser } from '../../services';
import "@testing-library/jest-dom";
import 'jest-localstorage-mock';

jest.mock('next/navigation', () => ({
    useRouter: () => ({
      push: jest.fn(),
    }),
}));

jest.mock('../../services', () => ({
  registerUser: jest.fn(),
}));

describe('FormRegister', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it('renders correctly', () => {
    const { getByText, getByPlaceholderText } = render(<FormRegister />);

    expect(getByText('Registro de usuario')).toBeInTheDocument();
    expect(getByPlaceholderText('Escribe tu nombre...')).toBeInTheDocument();
    expect(getByPlaceholderText('Escribe tu correo electrónico...')).toBeInTheDocument();
    expect(getByPlaceholderText('Escribe tu contraseña...')).toBeInTheDocument();
    expect(getByText('Aceptar')).toBeInTheDocument();
    expect(getByText('Cancelar')).toBeInTheDocument();
  });

  it('calls registerUser when "Aceptar" button is clicked', async () => {
    const mockToken = 'some_token_value'; // Simulamos un token de respuesta
    registerUser.mockResolvedValueOnce({ access_token: mockToken });

    const { getByText, getByPlaceholderText } = render(<FormRegister />);
    const nameInput = getByPlaceholderText('Escribe tu nombre...');
    const emailInput = getByPlaceholderText('Escribe tu correo electrónico...');
    const passwordInput = getByPlaceholderText('Escribe tu contraseña...');

    fireEvent.change(nameInput, { target: { value: 'Test User' } });
    fireEvent.change(emailInput, { target: { value: 'test@example.com' } });
    fireEvent.change(passwordInput, { target: { value: 'password' } });

    fireEvent.click(getByText('Aceptar'));

    // Esperamos a que se complete la solicitud y se obtenga el token
    await waitFor(() => {
      expect(registerUser).toHaveBeenCalledWith({
        name: 'Test User',
        email: 'test@example.com',
        password: 'password',
      });
    });

    // Verificamos que se haya guardado el token en el localStorage
    expect(localStorage.setItem).toHaveBeenCalledWith('token', mockToken);
  });

  it('displays error messages when registration fails', async () => {
    registerUser.mockRejectedValueOnce({
      response: {
        data: {
          errors: {
            name: 'Name is required',
            email: 'Email is invalid',
            password: 'Password must be at least 6 characters long',
          },
        },
      },
    });

    const { getByText } = render(<FormRegister />);
    fireEvent.click(getByText('Aceptar'));

    await waitFor(() => {
      expect(getByText(/Name is required/)).toBeInTheDocument();
      expect(getByText(/Email is invalid/)).toBeInTheDocument();
      expect(getByText(/Password must be at least 6 characters long/)).toBeInTheDocument();
    });
  });
});