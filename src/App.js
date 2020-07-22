import React from 'react';
import './App.css';
import{ BrowserRouter as Router,
  Link,
  Route,
  Switch,
  useParams,
  useRouteMatch
} from "react-router-dom";

function App() {
  return (
    <div>
<Router>
  <div>
    <ul>
      <li><Link to="/home">Home</Link></li>
      <li><Link to="/accounts">Accounts</Link></li>
    </ul>
    <hr/>
   <Switch>
   <Route exact path="/home"> 
     <Home/>
   </Route>
   <Route path="/accounts"> 
   <Accounts/>
   </Route>
   </Switch>
    </div>
</Router>
    </div>
  );
}
 
function Home() {
  return(
  <div>
    <h2>home page</h2>
  </div>
  );
}

function Accounts(){
  let {path,url} = useRouteMatch();
  return(
   <div>
     <h3>My List Of Accounts</h3>
     <ul>
       <li><Link to={`${url}/netflix`}>Netflix</Link></li>
       <li><Link to={`${url}/123movies`}>123movies</Link></li>
       <li><Link to={`${url}/fmovies`}>fmovies</Link></li>
     </ul>
     <switch>
       <Route exact path={path}>choose one your accounts</Route>
       <Route path={`${path}/:id`}>
         <Account/>
       </Route>
     </switch>
   </div>
  );
}

function Account(){
  let {id} = useParams();
  return(
    <div>
      <h4>{id}</h4>
    </div>
  )
}

export default App;
