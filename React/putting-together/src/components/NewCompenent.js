import React, { Component } from 'react';
    
    
class NewCompenent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            age1: this.props.age1
        };
    }
    Getold=()=>{
        this.setState({age1: this.state.age1+1});
    }
    render() {
        return (
            <>
            <div>
            <fieldset>
                <h1>{ this.props.firstName1 },{ this.props.lastName1 }</h1>
                <p>Hair Color:{ this.props.color1 }</p>
                <p>{ this.state.age1 }</p>
                
                    <button onClick={ this.Getold }>Birthday Button for { this.props.firstName1 } { this.props.lastName1 }</button>
                </fieldset>
            </div>
            </>
        );
    }
}
    
export default NewCompenent;