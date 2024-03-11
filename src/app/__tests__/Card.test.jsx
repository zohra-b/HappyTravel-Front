import '@testing-library/jest-dom'
import React from 'react';
import { render, screen } from '@testing-library/react';
import Card from '../../components/Card.jsx';

describe('Card Component', () => {
    test('renderiza correctamente con los datos proporcionados', () => {
    const trip = {
        title: 'Vacaciones en Isla Ejemplo',
        location: 'Isla Ejemplo'
    };
    render(<Card trip={trip} />);
    
    
    const titleElement = screen.getByText('Vacaciones en Isla Ejemplo');
    expect(titleElement).toBeInTheDocument();

    const locationElement = screen.getByText('Isla Ejemplo');
    expect(locationElement).toBeInTheDocument();
    });
});