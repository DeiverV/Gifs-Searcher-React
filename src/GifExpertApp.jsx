//API Key "NGlhJZzxWSO2n4zLT9wfEC8kRYi22WRr"

import { useState } from "react"
import { AddCategory } from "./components/AddCategory";

export const GifExpertApp = () => {

    const [categories, setCategories] = useState([ 'One Punch','Naruto' ]);

    const onAddCategory = (newCategorie) =>{

        if( categories.includes(newCategorie) ) return;

        // setCategories(categories.concat('Lol'))
        setCategories([newCategorie ,...categories])
    } 

  return (
    <>
        {/* Titulo */}
        <h1>GifExpertApp</h1>

        {/* Input */}
        {/* <AddCategory setCategories={ setCategories } categories={categories} /> */}
        <AddCategory onAddCategory={ onAddCategory } />
        {/* Listado de Gif*/}
        <ol>
            { categories.map( category => {
                return <li key={ category }>{ category }</li>
            })}
        </ol>
            {/* Gif Item */}

    </>

  )
}
