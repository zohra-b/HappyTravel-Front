import React from "react";
import "@testing-library/jest-dom";
import { render, fireEvent } from "@testing-library/react";
import InputForm from "../../components/InputForm.jsx";

describe("InputForm", () => {
  test("renderiza un elemento input con las propiedades proporcionadas", () => {
    const textoPlaceholder = "Ingrese su texto";
    const nombreValor = "inputPrueba";

    const onChange = jest.fn();

    const { getByPlaceholderText, getByTestId } = render(
      <InputForm
        type="text"
        placeholder={textoPlaceholder}
        name={nombreValor}
        onChange={onChange}
      />
    );

    const elementoInput = getByPlaceholderText(textoPlaceholder);

    expect(elementoInput).toBeInTheDocument();

    expect(elementoInput).toHaveAttribute("name", nombreValor);
    expect(elementoInput).toHaveAttribute("type", "text");

    fireEvent.change(elementoInput, { target: { value: "texto de prueba" } });

    expect(onChange).toHaveBeenCalledTimes(1);
  });
});
