import { useState, useEffect } from 'react';
import {getDocs, collection} from 'firebase/firestore';
import {db} from './firebase';


const useFetch = (dbName) => {

    const [data, setData] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [error , setError] = useState(null);

    const getData = async (dbName) => {
        const dataRes = await getDocs(collection(db, dbName));
        const rawData = dataRes.docs.map((doc) => ({...doc.data(), id: doc.id}));
        setData(rawData); 
        
    };
    

    useEffect(() => {

        getData(dbName)
                .then( () => {
                    
                    console.log('data fetched');
                    
                })
                .catch(err => {
                    setError(err.message);
                    setIsPending(false);
                    
                })
        
        
        // setTimeout(() => {
        //     fetch(url)
        //         .then(res => {
        //             if(!res.ok){
        //                 throw Error('could not fetch the data for that resource');
        //             }else{
        //             return res.json();
        //             }
        //         })
        //         .then(data => {
        //             setError(null);
        //             setData(data);
        //             setIsPending(false);
        //         })
        //         .catch(err => {
        //             setError(err.message);
        //             setIsPending(false);
                    
        //         })

        // }, 1000); 
       
    } , [dbName]);

return {data, isPending, error};
}

export default useFetch;