import { useEffect, useState } from "react";

import { GifItem } from "./GifItem";

import { getGifs } from "../helpers/getGifs";

export const GifGrid = ({category}) => {

    const [images, setImages] = useState([]);

    const getImages = async() => {
        const newImages = await getGifs(category);
        setImages(newImages);
    } 

    // Si se deja el UseEffect con el segundo parametro vacio 
    //solo se ejecuta la primera vez de creacion del componente
    useEffect( ()=>{
        getImages();
    }, [])

    return (
        <>
            <h3>{ category }</h3>
            <div className="card-grid">
                {
                    images.map((image) => (
                        <GifItem key={image.id} {...image}/>
                    ))
                }
            </div>
        </>
    )

}
