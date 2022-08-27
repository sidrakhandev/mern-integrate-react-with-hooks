import React from 'react';
import {BrowserRouter as Router, Route, NavLink,  Routes} from 'react-router-dom';
import './App.css';
import Home from './components/pages/Home';
import ArticleList from './components/articles/ArticleList';
import ArticleInfo from './components/articles/ArticleInfo';
import ArticleAdd from './components/articles/ArticleAdd';
import ArticleEdit from './components/articles/ArticleEdit';

function App() {
  return (
    <div className="App">     
      <Router>
        <Navigation />
        <div className="container">
          <Main />
        </div>
      </Router>
    </div>
  );
}

function Navigation() {
  return(
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark mb-4">
      <div className='container'>
        <ul className="navbar-nav mr-auto">
          <li className="nav-item"><NavLink exact className="nav-link" activeClassName="active" to="/">Home</NavLink></li>
          <li className="nav-item"><NavLink exact className="nav-link" activeClassName="active" to="/articles">Articles</NavLink></li>
        </ul>
      </div>
    </nav>
  );
}

function Main() {
  return(
    < Routes>
      <Route exact path="/" element={<Home/>} />
      <Route exact path="/articles" element={<ArticleList/>} />
      <Route exact path="/articles/new" element={<ArticleAdd/>} />
      <Route exact path="/articles/:_id" element={<ArticleInfo/>} />
      <Route exact path="/articles/:_id/edit" element={<ArticleEdit/>} />
    </ Routes>
  );
}

export default App;