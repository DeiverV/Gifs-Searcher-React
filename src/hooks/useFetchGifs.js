import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifs";


export const useFetchGifs = (category) => {

    const [images, setImages] = useState([]);
    const [isLoading, setIsLoading] = useState( true );

    const getImages = async() => {
        const newImages = await getGifs(category);
        setImages(newImages);
        setIsLoading(false)
    } 

    // Si se deja el UseEffect con el segundo parametro vacio 
    // solo se ejecuta la primera vez de creacion del componente
    useEffect( ()=>{
        getImages();
    }, [])

    return {
        images,
        isLoading,
    }

}
