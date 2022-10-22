import PropTypes from "prop-types";
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
        <form onSubmit={ onSubmit } aria-label="form">
            <input 
                type='text' 
                placeholder="Buscar Gifs" 
                value={inputValue} 
                onChange={onInputChange} 
            />
        </form>
    )

}

AddCategory.propTypes = {
    onAddCategory: PropTypes.func.isRequired,
}
