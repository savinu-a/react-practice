
import Navbar from './Navbar';
import Home from './Home';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Create from './Create';
import BlogDetails from './BlogDetails';
import NotFound from './NotFound';
import AddName from './AddName';
import useFetch from './useFetch';


function App() {
  const {data: authorList, isPending} = useFetch('authors');
  return (
    <Router>
    <div className="App">
      <Navbar />
      <div className="content">
        <Switch>
          <Route exact path = '/'>
            <Home />
          </Route>

          <Route path = '/create'>
            {!isPending && <Create authorList={authorList}  />}
          </Route>
          
          <Route path = '/blog/:id'>
            <BlogDetails />
          </Route>

          <Route path = '/name'>
            <AddName />
          </Route>

          <Route path = '*'>
            <NotFound />
          </Route>

        </Switch>
      </div>
    </div>
    </Router>
  );
}

export default App;
