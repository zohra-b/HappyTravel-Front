import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import NavBar from '../../components/NavBar.jsx';

describe('NavBar Component', () => {
  test('renderiza correctamente las imágenes de los iconos', () => {
    render(<NavBar />);
    
    
    const avatarIcon = screen.getByAltText('Icono avatar');
    expect(avatarIcon).toBeInTheDocument();
    
   
    const homeIcon = screen.getByAltText('Icono home');
    expect(homeIcon).toBeInTheDocument();
  });
});