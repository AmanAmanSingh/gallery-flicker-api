import { useContext, useEffect, useState } from "react";
import { photoContext } from "../photoscontext";
import "./photo.css"

const API_KEY = "key=c0bc49802798a9137e258bbef3aa3383";
const URL = `https://www.flickr.com/services/rest/?method=flickr.photos.getRecent&api_key=c0bc49802798a9137e258bbef3aa3383`

const Gallery = () => {
    const [galleryArray, setGalleryArray] = useState([])
    const galleryContext = useContext(photoContext)

    useEffect(() => {
        callApi()
    }, [galleryContext.inputField])


    const callApi = () => {
        fetch(`${URL}&tag=${galleryContext.inputField}&per_page=10&format=json&nojsoncallback=1`).then(res => {
            return res.json();
        }).then(data => {
            let imageData = data.photos.photo
            setGalleryArray(imageData)
        })
    }

    return (
        <>
            <div className="gallery-container">
                {galleryArray.map((data, index) => {
                    return (
                        <div className="img-container" key={index}>
                            <img src={`https://farm${data.farm}.staticflickr.com/${data.server}/${data.id}_${data.secret}.jpg`} />
                        </div>
                    )
                })
                }
            </div>
        </>
    )
}

export default Gallery;