import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Header from '../../components/Header.jsx';

describe('Header Component', () => {
  test('renderiza correctamente el logo, el campo de búsqueda y los elementos de navegación', () => {
    render(<Header />);
    
    
    const logoElement = screen.getByAltText('Logo');
    expect(logoElement).toBeInTheDocument();

    
    const searchElement = screen.getByPlaceholderText('Search...');
    expect(searchElement).toBeInTheDocument();

    
    const navBarElement = screen.getByRole('navigation');
    expect(navBarElement).toBeInTheDocument();
  });
});