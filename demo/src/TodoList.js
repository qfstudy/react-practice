import React,{Component} from 'react'
import TodoItem from './TodoItem.js'

class TodoList extends Component {
  constructor(props){
    super(props)
    this.state={
      inputValue: '',
      list: []
    }
    this.handleInputChange=this.handleInputChange.bind(this)
    this.handleClickBth=this.handleClickBth.bind(this)
    this.handleClickDeleteItem=this.handleClickDeleteItem.bind(this)
  }
  render(){
    return(
      <div>
        <div>
          <input 
            value={this.state.inputValue} 
            onChange={this.handleInputChange}/>
          <button onClick={this.handleClickBth}>
            提交
          </button>
        </div>
        <div>
        <TodoItem 
          deleteItem={this.handleClickDeleteItem}
          list={this.state.list}/>
          {/* <ul >
            {
              this.state.list.map((item,index)=>{
                return (
                  <TodoItem
                    key={index}
                    deleteItem={this.handleClickDeleteItem}
                    index={index}
                    content={item}/>
                )
              })
            }
            {
              this.state.list.map((item,index)=>{
                return (
                  <li
                    onClick={()=>{this.handleClickDeleteItem(index)}} 
                    key={index}>
                      {item}
                    </li>
                )
              })
            }
          </ul> */}
        </div>
      </div>
    )
  }
  handleInputChange(e){
    const value=e.target.value
    this.setState(()=>{
      return {
        inputValue: value
      }
    })
  }
  handleClickBth(){
    this.setState((prevState)=>{
      return{
        list: [...prevState.list,prevState.inputValue],
        inputValue: ''
      }
    })
  }
  handleClickDeleteItem(index){
    // console.log(index)
    this.setState((prevState)=>{
      const list=[...prevState.list]
      list.splice(index,1)
      return{
        list
      }
    })
  }
}

export default TodoList