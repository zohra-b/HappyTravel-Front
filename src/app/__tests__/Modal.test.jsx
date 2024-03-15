import "@testing-library/jest-dom";
import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Modal from '../../components/Modal.jsx';
import 'jest-localstorage-mock';


describe('Modal', () => {
  it('se renderiza correctamente', () => {
    const text = 'Ejemplo de texto en el modal';
    const onClick = jest.fn();
    const { getByText } = render(<Modal text={text} onClick={onClick} />);

    expect(getByText(text)).toBeInTheDocument();
  });

  it('llama a la función onClick cuando se hace clic en el botón de cierre', () => {
    const text = 'Ejemplo de texto en el modal';
    const onClick = jest.fn();
    const { container } = render(<Modal text={text} onClick={onClick} />);

    fireEvent.click(container.querySelector('button'));
    expect(onClick).toHaveBeenCalled();
  });
});