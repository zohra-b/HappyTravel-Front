import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import ModalDelete from '../../components/ModalDelete.jsx';
import 'jest-localstorage-mock';
import "@testing-library/jest-dom";

describe('ModalDelete', () => {
  it('se renderiza correctamente', () => {
    const handleCloseModal = jest.fn();
    const handleDelete = jest.fn();
    const { getByText } = render(
      <ModalDelete handleCloseModal={handleCloseModal} handleDelete={handleDelete} />
    );

    expect(getByText('¿Quieres eliminar este destino?')).toBeInTheDocument();
    expect(getByText('Aceptar')).toBeInTheDocument();
    expect(getByText('Cancelar')).toBeInTheDocument();
  });

  it('llama a handleCloseModal cuando se hace clic en el botón "Cancelar"', () => {
    const handleCloseModal = jest.fn();
    const handleDelete = jest.fn();
    const { getByText } = render(
      <ModalDelete handleCloseModal={handleCloseModal} handleDelete={handleDelete} />
    );

    fireEvent.click(getByText('Cancelar'));
    expect(handleCloseModal).toHaveBeenCalled();
  });

  it('llama a handleDelete cuando se hace clic en el botón "Aceptar"', () => {
    const handleCloseModal = jest.fn();
    const handleDelete = jest.fn();
    const { getByText } = render(
      <ModalDelete handleCloseModal={handleCloseModal} handleDelete={handleDelete} />
    );

    fireEvent.click(getByText('Aceptar'));
    expect(handleDelete).toHaveBeenCalled();
  });
})