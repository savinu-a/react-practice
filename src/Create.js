import { useState } from "react";
import { Link, useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { addDoc, collection } from 'firebase/firestore';  
import {db} from './firebase';




const Create = ({authorList}) => {

    

    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [author, setAuthor] = useState('mario');
    const [isPending, setIsPending] = useState(false);
    const history = useHistory();
    // let authorList = 
    // [{name: 'Sahan', id: '0PbyDubEO3V5e3J4LAdP'},
    // {name: 'Savinu', id: '17z5QuWibSm6GYzoJLUr'},
    // {name: 'Savinu', id: '3qMsulS1DY83WS0peRz2'},
    // {name: 'Savinu', id: '3xJpOrTdycM4TmBo17jj'},
    // {name: 'Savinu', id: '4sJO46SG0WMgRatN017s'},
    // {name: 'Savinu', id: '4sqv0BOhXY5a3QqZco8Y'},
    // {name: 'Yoshi', id: '4vhK4kmcwG3YU1GwjKJM'},
    // {name: 'Savinu', id: '6mkv3Baau9IatAAaYADt'},
    // {name: 'Savinu', id: '7LnpWmle23iifjVaW3f9'}];
    // let lastID = 0;
    

    const createPost = async () => {
        const blogCollection = collection(db, "blog");
        await addDoc(blogCollection, {title, body, author});

    }
   
    // console.log(authorList, "third fetch");

    
    const handleSubmit = (e) => {
        e.preventDefault();
        // const blog = {title, body, author};
        
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

    // useEffect(() => {
    //     grabData();
    //     console.log(authorList, "first fetch" );
    // }, []); 

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
                    
                >
                </textarea>
                <label>Blog Author:</label>
                <select
                value={author}
                // onClick={grabData}
                onChange={(e) => setAuthor(e.target.value)}
                >   
                    {/* <option value="mario">mario</option> */}
                    {authorList.map((auth) => (
                    <option value={auth.name} key= {auth.id}>{auth.name}</option>
                    
                    ))}
                    
                    
                </select>

                {!isPending && <button>Add Blog</button>}
                {isPending && <button disabled>Add Blog...</button>}
                <p>New Author? click <Link to='/name'>here</Link> to add your name.</p>
            </form>
            
        </div>
     );
}
 
export default Create;