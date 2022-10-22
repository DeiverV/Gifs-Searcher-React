import { fireEvent, render, screen } from '@testing-library/react';
import { GifItem } from '../../src/components';

describe('Test in GifItem Component', () => {
    
    const title = 'Dragon ball gif';
    const url = 'http://wtfmomento.com/hola.jpg';
    
    test('should render a gif', () => { 
        const { container } = render(<GifItem title={title} url={url}/>);
        expect( container ).toMatchSnapshot();
    })

    test('debe mostrar la imagen con url y alt indicado', () => { 
        render(<GifItem title={title} url={url} />);
        //screen.debug()
        // expect(screen.getByRole('img').src).toBe(url);
        // expect(screen.getByRole('img').alt).toBe(title);
        const  {src, alt} = screen.getByRole('img');
        expect(src).toBe(url);
        expect(alt).toBe(title)
    })

    test('debe de mostrar el titulo del componente', () => { 
        render(<GifItem title={title} url={url}/>);
        expect(screen.getByText(title)).toBeTruthy();
    })
})