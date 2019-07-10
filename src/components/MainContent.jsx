import React from 'react'
import TodoItem from './TodoItem'
import Footer from './Footer'

class MainContent extends React.Component {
    state={
        items:[
            {id:0,value:"Get the car!!", complated:true},
            {id:1,value:"Buy some Veg...", complated:true},
            {id:2,value:"Call a friend", complated:false},
            {id:3,value:"Drop the guy", complated:false},
            {id:4}
        ],
        count:5
    }

    handleDelete=(deleteId)=>{
        const items=this.state.items.filter(item=>item.id!==deleteId)
        this.setState({items})    
    }

    handleChanged=(changeId)=>{

        const items=this.state.items.map((item)=>{
            if(item.id===changeId){
                item.complated=!item.complated
            }
            return item
        })
        
        this.setState({items})
    }

    handleSubmit=(todoItem)=>{
        const items=[...this.state.items]
        items.push({id:this.state.count,value:todoItem,complated:false})
        this.setState({items})
        this.setState({count:this.state.count+1})
    }

    render() {  
        return ( 
            <main >
            <div>
                {this.state.items.map(item=>
                <TodoItem 
                    key={item.id} 
                    todoList={item}
                    deleteItem={this.handleDelete}
                    onChange={this.handleChanged}
                />)}
                <Footer 
                   onSubmit={this.handleSubmit}
                />
            </div>
        </main>
         );
    }
}


export default MainContent