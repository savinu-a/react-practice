
import BlogList from './BlogList';
import useFetch from './useFetch';
import {firebase} from './firebase';
import { addDoc } from 'firebase/firestore';  


const Home = () => {

    const {data: blogs, isPending, error} = useFetch('blog');
 


    return ( 
        <div className="home">
            {error && <div>{error}</div>}
            {isPending && <div>Loading...</div>}
            {blogs && <BlogList blogs={blogs} title="All blogs" />}
            
            
        </div>
     );
}
 
export default Home;