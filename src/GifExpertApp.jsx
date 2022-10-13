import { useState } from "react"
import { AddCategory, GifGrid} from "./components";

export const GifExpertApp = () => {

    const [categories, setCategories] = useState([ 'Naruto' ]);

    const onAddCategory = (newCategorie) =>{
        if( categories.includes(newCategorie) ) return;
        setCategories([newCategorie ,...categories])
    } 

    const onDeleteCategory = (categorieToDelete) =>{
      setCategories(categories.filter( categorie => categorie !== categorieToDelete))
    } 

  return (
    <>
        <h1>GifExpertApp</h1>
        <AddCategory onAddCategory={ onAddCategory } />
        { categories.map( category => 
            <GifGrid key={category} category={ category } onDeleteCategory={onDeleteCategory} />
        )}
    </>

  )
}
