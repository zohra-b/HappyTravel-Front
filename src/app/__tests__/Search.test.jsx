import "@testing-library/jest-dom";
import React from "react";
import { render, fireEvent, waitFor } from "@testing-library/react";
import Search from "../../components/Search.jsx";
import { useRouter } from "next/navigation";
import "jest-localstorage-mock";

jest.mock("next/navigation", () => ({
  useRouter: jest.fn(),
}));

describe("Pruebas de Integración del Componente Search", () => {
  it("envía el formulario correctamente al hacer clic en el icono de búsqueda", async () => {
    const mockPush = jest.fn();
    useRouter.mockImplementation(() => ({
      push: mockPush,
    }));

    const { getByAltText, getByPlaceholderText } = render(<Search />);
    const inputElement = getByPlaceholderText("Search...");
    const searchIcon = getByAltText("Icono buscar");

    fireEvent.change(inputElement, { target: { value: "test" } });

    fireEvent.click(searchIcon);

    await waitFor(() => {
      expect(mockPush).toHaveBeenCalledWith("/?search=test");
    });
  });

  it("envía el formulario correctamente al presionar Enter en el input", async () => {
    // Mockear la función push del router para simular la navegación
    const mockPush = jest.fn();
    useRouter.mockImplementation(() => ({
      push: mockPush,
    }));

    const { getByPlaceholderText } = render(<Search />);
    const inputElement = getByPlaceholderText("Search...");

    fireEvent.change(inputElement, { target: { value: "test" } });

    fireEvent.keyPress(inputElement, { key: "Enter", code: 13, charCode: 13 });

    await waitFor(() => {
      expect(mockPush).toHaveBeenCalledWith("/?search=test");
    });
  });

  it("envía el formulario correctamente al realizar una búsqueda", async () => {
    const mockPush = jest.fn();
    useRouter.mockImplementation(() => ({
      push: mockPush,
    }));

    const { getByPlaceholderText } = render(<Search />);
    const inputElement = getByPlaceholderText("Search...");

    fireEvent.change(inputElement, { target: { value: "test" } });
    fireEvent.submit(inputElement);

    await waitFor(() => {
      expect(mockPush).toHaveBeenCalledWith("/?search=test");
    });
  });
});
