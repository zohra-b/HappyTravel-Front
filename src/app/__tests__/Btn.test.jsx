import "@testing-library/jest-dom";
import { render, fireEvent } from "@testing-library/react";
import Btn from "../../components/Btn.jsx";

describe("Componente Btn", () => {
  test("renderiza con el texto correcto", () => {
    const { getByText } = render(<Btn text="Haz clic" />);
    expect(getByText("Haz clic")).toBeInTheDocument();
  });

  test("dispara el evento onClick", () => {
    const handleClick = jest.fn();
    const { getByText } = render(<Btn text="Haz clic" onClick={handleClick} />);
    fireEvent.click(getByText("Haz clic"));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  test("tiene las clases de estilo adecuadas", () => {
    const { container } = render(<Btn text="Haz clic" color="bg-blue-500" />);
    const button = container.firstChild;
    expect(button).toHaveClass("bg-blue-500");
  });

  test("no dispara el evento onClick si no se proporciona ninguna función", () => {
    const { getByText } = render(<Btn text="Haz clic" />);
    fireEvent.click(getByText("Haz clic"));
  });

});
