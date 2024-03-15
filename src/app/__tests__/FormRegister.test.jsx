// FormRegister.test.jsx
import React from 'react';
import { render, fireEvent, waitFor} from '@testing-library/react';
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
      const { getByText, getByPlaceholderText } = render(<FormRegister />);
      const nameInput = getByPlaceholderText('Escribe tu nombre...');
      const emailInput = getByPlaceholderText('Escribe tu correo electrónico...');
      const passwordInput = getByPlaceholderText('Escribe tu contraseña...');
  
      fireEvent.change(nameInput, { target: { value: 'Test User' } });
      fireEvent.change(emailInput, { target: { value: 'test@example.com' } });
      fireEvent.change(passwordInput, { target: { value: 'password' } });
  
      fireEvent.click(getByText('Aceptar'));
  
      expect(registerUser).toHaveBeenCalledWith({
        name: 'Test User',
        email: 'test@example.com',
        password: 'password',
      });
    });
  
    jest.mock('../../services');

describe('FormRegister', () => {
  afterEach(() => {
    jest.clearAllMocks();
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
  })