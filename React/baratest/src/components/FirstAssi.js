import React, {Component} from 'react';



class FirstAssi extends Component{
    render(){
        return(
            <div>
              <h1>{this.props.firstName } ,{this.props.scondName} </h1>
              <p>{this.props.age}</p>
              <p>{this.props.hair}</p>

            </div>
        );
    }
}

export default FirstAssi;