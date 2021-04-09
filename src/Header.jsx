import React, { Component } from 'react';

class Header extends Component {
    Constructor(){
        super()
        this.state = {
            firstName: '',
            lastName: '',
            count: 0 
        };

        handleInputChange = event => {
            this.setState({
                [event.target.name]: event.target.value
            })
        }
    }

    render(){
        return(
            <>
            
            </>
        )
    }
}

export default Header
