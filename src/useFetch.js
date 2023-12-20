import { useState, useEffect } from 'react';

const useFetch = (url) => {

    const [data, setData] = useState(null);
    const [isPendoing, setIsPending] = useState(true);
    const [error , setError] = useState(null);


    useEffect(() => {
        
        
        setTimeout(() => {
            fetch(url)
                .then(res => {
                    if(!res.ok){
                        throw Error('could not fetch the data for that resource');
                    }else{
                    return res.json();
                    }
                })
                .then(data => {
                    setError(null);
                    setData(data);
                    setIsPending(false);
                })
                .catch(err => {
                    setError(err.message);
                    setIsPending(false);
                    
                })

        }, 1000); 
       
    } , [url]);

return {data, isPendoing, error};
}

export default useFetch;