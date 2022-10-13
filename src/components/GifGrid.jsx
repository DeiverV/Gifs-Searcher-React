import { GifItem, LoadingMessage } from "./";

import { useFetchGifs } from "../hooks/useFetchGifs";

export const GifGrid = ({category, onDeleteCategory}) => {

    const {images, isLoading} = useFetchGifs(category);

    const deleteCategory = (event) => onDeleteCategory(category);

    return (
        <>
            <h3>{ category }</h3>
            <LoadingMessage isLoading={isLoading}/>
            <button onClick={deleteCategory}>delete</button>
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
