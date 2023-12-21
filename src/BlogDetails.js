import { useHistory, useParams } from "react-router-dom/cjs/react-router-dom.min";
import useFetch from "./useFetch";
import {getDocs, collection, deleteDoc, doc} from 'firebase/firestore';
import {db} from './firebase';
import { getStorage, ref, deleteObject } from "firebase/storage";
import { useState } from "react";



const BlogDetails = () => {

    const { id } = useParams();
    const currentID = id;
    const { data: blogList, isPending, error } = useFetch("blog");
    const history = useHistory();

    let blog = null;

    if (blogList !== null){       
        blog = blogList.find((blog) => blog.id === id);
        console.log(blog);
    }
    
    const handleDelete = (id) => {
        console.log(currentID);
        const postDoc = doc(db, "blog", currentID);
        deleteDoc(postDoc);
        history.push('/');
    }

    return (  
        <div className="blog-details" >
            
            {isPending && <div> Loading...</div>}
            {error && <div>{error}</div>}
            {blog && (
                <article id={blog.id}>
                    <h2> {blog.title} </h2>
                    <p> Written by {blog.author} </p>
                    <div> {blog.body} </div>
                    <button onClick={handleDelete}>Delete</button>
                </article>
            
            )}


        </div>
    );
}
 
export default BlogDetails;