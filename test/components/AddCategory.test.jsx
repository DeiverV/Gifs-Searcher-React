import { fireEvent, render, screen } from "@testing-library/react"
import { AddCategory } from "../../src/components/AddCategory"


describe('Pruebas en AddCategory', () => {  

    test('Debe cambiar el valor de la caja de texto ', () => { 

        render(<AddCategory onAddCategory={ ()=>{} }/>);
        const input = screen.getByRole('textbox');

        fireEvent.input( input, {target: {value:'Saitama'} } );

        expect(input.value).toBe('Saitama');

    })

    test('debe de llamar onAddCategory si el input tiene un valor', () => { 

        const inputValue = 'Saitama';

        const onAddCategory = jest.fn();

        render(<AddCategory onAddCategory={ onAddCategory }/>);

        const input = screen.getByRole('textbox');
        const form = screen.getByRole('form');

        fireEvent.input( input, {target: {value : inputValue} } );
        fireEvent.submit( form );

        expect( input.value ).toBe("");
        expect(onAddCategory).toHaveBeenCalled();
        expect(onAddCategory).toHaveBeenCalledTimes(1);
        expect(onAddCategory).toHaveBeenCalledWith( inputValue );

    })

    test('No debe de llamar el onAddCategory si el input esta vacio', () => { 

        const onAddCategory = jest.fn();
        render(<AddCategory onAddCategory={ onAddCategory }/>);

        const input = screen.getByRole('textbox');
        const form = screen.getByRole('form');

        fireEvent.input( input, {target: {value : ''} } );
        fireEvent.submit( form );

        expect(onAddCategory).not.toHaveBeenCalled();
        // expect(onAddCategory).toHaveBeenCalledTimes(0);

    })

})
