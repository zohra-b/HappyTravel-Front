import "@testing-library/jest-dom";
import React from "react";
import { render, fireEvent, waitFor } from "@testing-library/react";
import Login from "../../components/Login.jsx";
import { loginUser } from "../../services";
import 'jest-localstorage-mock';


jest.mock("next/navigation", () => ({
  useRouter: () => ({
    push: jest.fn(),
  }),
}));

jest.mock("../../services", () => ({
  loginUser: jest.fn(),
}));

describe("Login Component Integration Test", () => {
  it("Iniciar sesión con credenciales válidas", async () => {
    const mockResponse = { access_token: "token_de_prueba" };
    loginUser.mockResolvedValueOnce(mockResponse);

    const { getByPlaceholderText, getByText, queryByText } = render(<Login />);

    fireEvent.change(getByPlaceholderText("Escribe tu correo ..."), {
      target: { value: "correo@ejemplo.com" },
    });
    
    fireEvent.change(getByPlaceholderText("Escribe tu contraseña"), {
      target: { value: "contraseña123" },
    });

    fireEvent.click(getByText("Aceptar"));

    await waitFor(() => {
      expect(localStorage.setItem).toHaveBeenCalledWith(
        "token",
        "token_de_prueba"
      );

      expect(queryByText("Incicio de sesion correcto")).toBeInTheDocument();
    });
  });
});