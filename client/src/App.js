import React, { useState } from "react";
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

const protectRoute = Component => props => {
  if (localStorage.getItem('token')) {
    return <Component {...props} />;
  } else {
    return <Redirect to="/login"/>;
  }
};

const ProtectedColors = protectRoute(BubblesPage);


function App() {
  const [colorList, setColorList] = useState([]);
  return (
    <Router>
      <div className="App">
        <Route exact path="/" component={Login} />
        <ProtectedRoute path = '/api/colors' component = {BubblesPage}/>
      </div>
    </Router>
  );
}

export default App;
