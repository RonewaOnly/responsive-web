import './App.css';
import { Navbar } from './components/Navbar';
//import { Routes, Switch, Route } from "react-router-loading";
import { BrowserRouter as  Router,Switch,Route } from 'react-router-dom';
import  Home        from './components/Pages/Home'
import  Services    from './components/Pages/Services'
import  Products    from './components/Pages/Products'
import  SignUp      from './components/Pages/SignUp'



function App() {
  return (
    <>
      <Router>
        <Navbar/>
        <Switch>
          <Route path='/' exact   component={Home}/>
          <Route path='/services' component={Services}/>
          <Route path='/products' component={Products}/>
          <Route path='/sign-up'  component={SignUp}/>
        </Switch>
      </Router>
    </>
  );
}

export default App;
//npm install react-router-dom@5.2.0