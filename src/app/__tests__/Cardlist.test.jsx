import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import CardList from '../../components/Cardlist.jsx';

jest.mock('../../services/index.jsx', () => ({
  getTripsByPage: jest.fn().mockResolvedValue([{ id: 1, title: 'Trip 1', location: 'Location 1' }])
}));

describe('Cardlist Component', () => {
  test('renderiza correctamente y muestra la lista de viajes', async () => {
    render(<CardList />);
    await screen.findByText('Trip 1');
    expect(screen.getByText('Trip 1')).toBeInTheDocument();
    expect(screen.getByText('Location 1')).toBeInTheDocument();
  });

  test('cambia de página al hacer clic en la paginación', async () => {
    render(<CardList />);
    await screen.findByText('Trip 1');
    
    
    userEvent.click(screen.getAllByRole('button')[1]);
    
    await screen.findByText('Trip 1');
    expect(screen.getByText('Trip 1')).toBeInTheDocument();
    
    
    await screen.findByText('Location 1');
    expect(screen.queryByText('Location 2')).not.toBeInTheDocument();
  });
});