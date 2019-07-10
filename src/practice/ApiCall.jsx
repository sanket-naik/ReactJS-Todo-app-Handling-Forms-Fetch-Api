import React from 'react'

class ApiCall extends React.Component {
    state = { 
        data:{}
     }


    componentDidMount(){
        fetch('https://swapi.co/api/people/1')
         .then(response=>response.json())
         .then(data=>{
             this.setState({data})
         })
    }

    render() { 
        return ( 
            <div>
                {this.state.data.name?this.state.data.name:"Loading api..."}
            </div>
         );
    }
}
 
export default ApiCall;