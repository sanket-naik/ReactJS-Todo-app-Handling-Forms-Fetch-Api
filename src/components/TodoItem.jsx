import React from 'react'

class TodoItem extends React.Component {
    state={
        fontStyle:'italic',
        color:'#cdcdcd',
        textDecoration:'line-through'
    }
    render() { 
        return ( 
            <div className="m-3"  style={{display:!this.props.todoList.value&&'none'}}>
            <input type='checkbox' className="checkbox" onChange={()=>this.props.onChange(this.props.todoList.id)}  checked={this.props.todoList.complated}/> 
            <span style={this.props.todoList.complated?this.state:null}>Note: {this.props.todoList.value}</span>
            <button className="btn btn-danger m-2" onClick={()=>this.props.deleteItem(this.props.todoList.id)}>Delete</button>
            </div>
         );
    }
}
 
export default TodoItem;
