import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Search from '../../components/Search.jsx';

describe('Search Component', () => {
  test('renderiza correctamente el campo de búsqueda y la imagen del icono', () => {
    render(<Search />);
    
    const inputElement = screen.getByPlaceholderText('Search...');
    expect(inputElement).toBeInTheDocument();

    
    const iconElement = screen.getByAltText('Icono buscar');
    expect(iconElement).toBeInTheDocument();
  });
});