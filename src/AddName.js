import { useState } from "react";
import {addDoc, collection} from 'firebase/firestore';
import {db} from './firebase';
import {useHistory} from 'react-router-dom';




const AddName = ({authorList}) => {
    const [name, setName] = useState('');
    // const [nameList, setNameList] = useState([]);
    const history = useHistory();
    let nameList = authorList.map((author) => author.name);
    // console.log(nameList);

    // const grabData = async () => {
    //     const tempData = await getDocs(collection(db, "authors"));
    //     setDataRes(tempData);
    //     setFetched(true);
    //     // console.log('data fetched', dataRes); 
        
    //     if(dataRes !== null){
    //         setFetched(false);
    //         const names = dataRes.docs.map((doc) => ({...doc.data(), id: doc.id}));
    //         const onlyNames = names.map((name) => name.name);
    //         nameList = onlyNames;
    //         // console.log(nameList, "second fetch", onlyNames);
    //         setFetched(true);
            
    //     };
        
    // }; 

    


    

    
    
    const createPost = async () => {
        const authorsList = collection(db, 'authors');
        await addDoc(authorsList, {name});
    };

    const handleClick = () => {
        
           
        // console.log(name);
        // console.log(nameList);
        if(( nameList.includes(name))){
            alert('Name already exists');
            
            
        }else if(nameList !== null){
            createPost().then(() => {
                console.log('new name added');
                history.push('/create');
            }); 
        }; 
        
      
    };

   

    return ( 
        <div className="add-name">
            <label >Name:</label>
            <input
                type="text" 
                required
                value = {name}
                onChange={(e) => setName(e.target.value)}
            ></input> 
            <button onClick={handleClick} >Add Name</button>
         
        </div>
     );
};
 
export default AddName;