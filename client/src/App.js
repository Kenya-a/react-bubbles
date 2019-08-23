import React from "react";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";

import Login from "./components/Login";

import BubblesPage from './components/BubblePage';

import "./styles.scss";


const ProtectedRoute = ({component: Component, ...rest}) => {
  return <Route {...rest} render={props => {
    if (localStorage.getItem('token')) {
      return <Component {...props} />;
    } else {
      return <Redirect to="/login"/>;
    }
  }}/>;
};

function App() {
  return (
    <Router>
      <div className="App">
        <Route exact path="/" component={Login} />
        <ProtectedRoute path = '/api/colors' component = {BubblesPage}/>
        {/* <Route path="/api/colors" component={ProtectedColors}/> */}

      </div>
      {/* <BubblesPage/> */}
    </Router>
  );
}

export default App;
