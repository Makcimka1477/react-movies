import { useState } from "react";

const useFetch = () => {
    const API_KEY = 'apikey=78584b3c';
    const [loader,setLoader] = useState(true);
    const [error,setError] = useState(false);


    const getFilmData = async (film,type = 'all') => {
        const url = `http://www.omdbapi.com/?${API_KEY}${`&s=${film}`}${type !== 'all' ? `&type=${type}` : ''}`;
        setLoader(true);
        try {
            const response = await fetch(url);

            const data = await response.json();
            let dataArr = data.Search;
            setLoader(false);
            return dataArr;
        } catch (err) {
            setLoader(false);
            setError('Fetch error: ',err);
            throw new Error('Error',err);
        }
    }

    function formatFetchRequest (data) {
        return data.map(el => {
            return {
                id: el.id,
                title: el.title,
                pageCount: el.pageCount,
                img: el.thumbnail.path + el.thumbnail.extension,
                description: !el.description ? 'I have nothing to say...' : el.description
            }
        })
    }

    return {
        loader,
        error,
        getFilmData
    }
}

export default useFetch;