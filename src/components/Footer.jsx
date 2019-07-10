import React from 'react'

class Footer extends React.Component {
    state = { 
        value:''
     }

     handleChange=(event)=>{
         this.setState({value:event.target.value})
     }

     handleSubmit=(event)=>{
        this.props.onSubmit(this.state.value)
        event.preventDefault();
        this.setState({value:''})
     }

    render() { 
        return ( 
            <footer className="navbar navbar-light bg-light" > 
                <div className='form-inline'>
                    <input className='m-2 form-control' type='text' value={this.state.value} onChange={this.handleChange} placeholder="Enter the note..."/>
                    <button className="btn btn-primary" onClick={this.handleSubmit}>Add</button>
                </div>
            </footer>
         );
    }
}
 


export default Footer