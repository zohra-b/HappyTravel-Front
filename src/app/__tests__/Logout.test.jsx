
import "@testing-library/jest-dom";
import { render, fireEvent, waitFor } from "@testing-library/react";
import Logout from "../../components/Logout.jsx";
import 'jest-localstorage-mock';
import { useRouter } from "next/navigation";

jest.mock("next/navigation", () => ({
    useRouter: jest.fn(),
  }));
  
  describe("Pruebas de Integración del Componente Logout", () => {
    it("redirige al usuario a la página de inicio de sesión después de hacer clic en 'Logout'", async () => {
      const mockPush = jest.fn();
      useRouter.mockImplementation(() => ({
        push: mockPush,
      }));
  
      const { getByText } = render(<Logout />);
  
      const logoutButton = getByText("Logout deslogarse");
      fireEvent.click(logoutButton);
  
      await waitFor(() => {
        expect(mockPush).toHaveBeenCalledWith("/login");
      });
    });
  
    it("elimina el token del localStorage al hacer clic en 'Logout'", () => {
      const mockRemoveItem = jest.spyOn(window.localStorage, "removeItem");
      mockRemoveItem.mockImplementation(() => {});
  
      const { getByText } = render(<Logout />);
  
      const logoutButton = getByText("Logout deslogarse");
      fireEvent.click(logoutButton);
  
      expect(mockRemoveItem).toHaveBeenCalledWith("token");
    });
});