import React, { Component } from 'react'
import "./Home.css";
import MainContent from './MainContent/MainContent';
import NavBar from './Navbar/Navbar';
 
class HomePage extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    
    render() { 
        return (
            <div>
                <NavBar/>
                <MainContent/>
            </div>  
        );
    }
}
 
export default HomePage;