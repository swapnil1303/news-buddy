import './App.css';
import React, { Component } from 'react'
import NavBar from './components/navbar';
import News from './components/News';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

export default class App extends Component {
  apiKey='3f12de0f9a97431d8c214c8a88f8ec9f';
  render() {
    
    return (
      <Router>
      <div>
        <NavBar/>
        <Routes>
        <Route exact path="/" element={<News key="general" pageSize={10} apiKey={this.apiKey}  country={"in"} category={"general"}/>}/>
        <Route exact path="/business" element={<News key="business" pageSize={10} apiKey={this.apiKey}  country={"in"} category={"business"}/>}/>
        <Route exact path="/entertainment" element={<News key="entertainment"pageSize={10} apiKey={this.apiKey}  country={"in"} category={"entertainment"}/>}/>
        <Route exact path="/general" element={<News key="general"pageSize={10} apiKey={this.apiKey}  country={"in"} category={"general"}/>}/>
        <Route exact path="/health" element={<News key="health"pageSize={10} apiKey={this.apiKey}  country={"in"} category={"health"}/>}/>
        <Route exact path="/science" element={<News key="science"pageSize={10} apiKey={this.apiKey}  country={"in"} category={"science"}/>}/>
        <Route exact path="/sports" element={<News key="sports"pageSize={10} apiKey={this.apiKey}  country={"in"} category={"sports"}/>}/>
        <Route exact path="/technology" element={<News key="technology"pageSize={10} apiKey={this.apiKey}  country={"in"} category={"technology"}/>}/>
        </Routes>
      </div>
      </Router>
    )
  }
  
}
