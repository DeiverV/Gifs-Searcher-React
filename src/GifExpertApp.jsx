//API Key "NGlhJZzxWSO2n4zLT9wfEC8kRYi22WRr"

import { useState } from "react"
import { AddCategory } from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";

export const GifExpertApp = () => {

    const [categories, setCategories] = useState([ 'Naruto' ]);

    const onAddCategory = (newCategorie) =>{

        if( categories.includes(newCategorie) ) return;

        // setCategories(categories.concat('Lol'))
        setCategories([newCategorie ,...categories])
    } 

  return (
    <>
        <h1>GifExpertApp</h1>

        <AddCategory onAddCategory={ onAddCategory } />

        { categories.map( category => 
            <GifGrid key={category} category={ category } />
        )}

    </>

  )
}
