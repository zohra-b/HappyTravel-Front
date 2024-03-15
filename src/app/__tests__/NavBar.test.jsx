import "@testing-library/jest-dom";
import React from "react";
import { render, fireEvent, waitFor } from "@testing-library/react";
import NavBar from "../../components/NavBar.jsx";
import "jest-localstorage-mock";

jest.mock("next/navigation", () => ({
  useRouter: jest.fn().mockReturnValue({
    push: jest.fn(),
    prefetch: jest.fn(),
    pathname: "/",
    query: "",
    asPath: "",
    refresh: jest.fn(),
  }),
}));

describe("Prueba de Integración del Componente NavBar", () => {
  it("renderiza la barra de navegación correctamente cuando el usuario está autenticado", () => {});

  it("renderiza la barra de navegación correctamente cuando el usuario no está autenticado", () => {});

  it("cierra la sesión del usuario cuando se hace clic en el botón de cerrar sesión", async () => {
    localStorage.setItem("token", "token_de_prueba");

    const { getByAltText } = render(<NavBar />);

    const logoutButton = getByAltText("Icono logout");
    fireEvent.click(logoutButton);

    await waitFor(() => {
      expect(localStorage.getItem("token")).toBeNull();

      const mockRouter = require("next/navigation").useRouter();
      expect(mockRouter.refresh).toHaveBeenCalled();
    });
  });
});
