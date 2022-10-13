import { useState } from "react"

export const AddCategory = ({onAddCategory}) => {

    const [inputValue, setInputValue] = useState('')

    const onInputChange = ({target}) => {
        setInputValue(target.value);
    }

    const onSubmit = (event) => {
        event.preventDefault();
        
        const newCategorieValue = inputValue.trim();
        if(newCategorieValue.length<=1) return;

        onAddCategory(newCategorieValue);
        setInputValue('');
    }

    return (
        <form onSubmit={ onSubmit }>
            <input 
                type='text' 
                placeholder="Buscar Gifs" 
                value={inputValue} 
                onChange={onInputChange} 
            />
        </form>
    )

}
