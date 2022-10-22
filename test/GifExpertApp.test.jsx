import { render, screen, fireEvent } from "@testing-library/react";
import { GifExpertApp } from "../src/GifExpertApp";


describe('Pruebas en GifExpertApp', () => { 

    test('Debe estar solamente Naruto como default en categories ', () => { 

        const { container } = render( <GifExpertApp /> );
        expect(container).toMatchSnapshot();
        expect(screen.getByText('Naruto'));
        
    })

    test('Se debe agregar y eliminar una nueva categoria al dom', () => {  

        render( <GifExpertApp /> );
        const input = screen.getByRole('textbox');
        const form  = screen.getByRole('form');
        
        fireEvent.input( input, { target: { value: 'Chainsaw man' } });
        fireEvent.submit( form );

        expect( screen.getByText('Chainsaw man'));

    })
    

})