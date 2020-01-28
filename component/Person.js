import React from 'react';
import {Link} from 'react-router-dom'
class Person extends React.Component{
constructor(props){
  super(props)
}

  render(){
    return(<div>
    
     {this.props.match.params.id}
    </div>)
  }
}

export default Person;
