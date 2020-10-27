import React, { Component } from 'react';
import './style.css'

class Menu extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div className="nav-menu" onClick={this.props.goToPage}>
                {this.props.text}
            </div>
         );
    }
}
 
export default Menu;