import { useState } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import useFetch from "./useFetch";
import { addDoc, collection } from 'firebase/firestore';  
import {db} from './firebase';

const Create = () => {

    const {data: blogData} = useFetch('http://localhost:8000/blogs');

    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [author, setAuthor] = useState('mario');
    const [isPending, setIsPending] = useState(false);
    const history = useHistory();
    let lastID = 0;
    const blogCollection = collection(db, "blog")
    
    const createPost = async () => {
        await addDoc(blogCollection, {title, body, author})

    }

    
    const handleSubmit = (e) => {
        e.preventDefault();
        const blog = {title, body, author};
        
        setIsPending(true);

        createPost().then(() => {
            console.log('new blog added');
            setIsPending(false);
            // lastID = blogData.length + 1;
            // console.log(lastID);
            history.push('/');
        })

        // fetch('http://localhost:8000/blogs/', {
        //     method: 'POST',
        //     headers: {"Content-Type": "application/json"},
        //     body: JSON.stringify(blog)
        // }).then(() => {
        //     console.log('new blog added');
        //     setIsPending(false);
        //     lastID = blogData.length + 1;
        //     console.log(lastID);
        //     history.push('/blog/' + lastID);

        // })
    }

    return ( 
        <div className="create">
            <h2>Add a new blog</h2>
            <form onSubmit={handleSubmit}>
                <label>Blog Title:</label>
                <input 
                    type="text" 
                    required
                    value = {title}
                    onChange={(e) => setTitle(e.target.value)}
                />
                <label>Blog Body:</label>
                <textarea 
                    required
                    value = {body}
                    onChange={(e) => setBody(e.target.value)}
                    onClick={(e) => setBody('Fuck you')}
                >
                </textarea>
                <label>Blog Author:</label>
                <select
                value={author}
                onChange={(e) => setAuthor(e.target.value)}
                >
                    <option value="mario">mario</option>
                    <option value="yoshi">yoshi</option>
                </select>
                {!isPending && <button>Add Blog</button>}
                {isPending && <button disabled>Add Blog...</button>}
                
            </form>
            
        </div>
     );
}
 
export default Create;