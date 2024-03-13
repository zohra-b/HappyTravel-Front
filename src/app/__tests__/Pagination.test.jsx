import '@testing-library/jest-dom';
import { render, screen, fireEvent } from '@testing-library/react';
import Pagination from '../../components/Pagination.jsx';

describe('Pagination Component', () => {
  test('renderiza correctamente y permite la paginación', () => {
  
    const handlePaginationMock = jest.fn();

    
    render(<Pagination handlePagination={handlePaginationMock} currentPage={3} />);

    
    const prevButton = screen.getByRole('button', { name: 'icono previus' });
    expect(prevButton).toBeInTheDocument();


    const nextButton = screen.getByAltText('icono next');
    expect(nextButton).toBeInTheDocument();

  
    const currentPageElement = screen.getByText('3');
    expect(currentPageElement).toBeInTheDocument();

   
    fireEvent.click(prevButton);

  
    expect(handlePaginationMock).toHaveBeenCalledWith(2);

   
    fireEvent.click(nextButton);

  
    expect(handlePaginationMock).toHaveBeenCalledWith(4);
  });

  test('deshabilita el botón de retroceso en la primera página', () => {

    const handlePaginationMock = jest.fn();

    render(<Pagination handlePagination={handlePaginationMock} currentPage={1} />);


    const prevButton = screen.getByRole('button', { name: 'icono previus' });
    expect(prevButton).toBeInTheDocument();


    expect(prevButton).toBeDisabled();
  });
});