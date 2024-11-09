import { useEffect, useState } from 'react'
import { getGifs } from '../helpers/GetGifs';

export const useFetchGifs = ( category ) => {

    const [images, setImages] = useState(['One Punch']);
    const [isLoading, setIsLoading] = useState(true);

    const getImages = async () => {
      const newImages = await getGifs(category);
      setImages(newImages);
      setIsLoading(false);
    };
  
    useEffect(() => {
      getImages();
    }, [ category]);
  


    return {
        images,
        isLoading
    }
    
}