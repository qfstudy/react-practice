import React,{Component} from 'react'
import store from './store/index.js'
import {
  getInputChangeValue,
  getAddItem,
  getDeleteItemAction,
  getTodoList
} from './store/actionCreators.js'
import TodoListUI from './TodoListUI.js'

class TodoList extends Component {
  constructor(props){
    super(props)
    this.state=store.getState()
    this.handleStoreChange=this.handleStoreChange.bind(this)

    this.handleInputChange=this.handleInputChange.bind(this)
    this.handleClickBth=this.handleClickBth.bind(this)
    this.handleClickDeleteItem=this.handleClickDeleteItem.bind(this)
    
    store.subscribe(this.handleStoreChange)
  }
  render(){
    return(
      <TodoListUI 
        handleInputChange={this.handleInputChange}
        inputValue={this.state.inputValue}
        handleClickBth={this.handleClickBth}
        list={this.state.list}
        handleClickDeleteItem={this.handleClickDeleteItem}
        />
      // <div>
      //   <div>
      //     <input            
      //       onChange={this.handleInputChange}
      //       value={this.state.inputValue}/>
      //     <button onClick={this.handleClickBth}>
      //       提交
      //     </button>
      //   </div>
      //   <div>
      //     <ul >
      //       {
      //         this.state.list.map((item,index)=>{
      //           return (
      //             <li
      //               onClick={()=>{this.handleClickDeleteItem(index)}} 
      //               key={index}>
      //               {item}
      //             </li>
      //           )
      //         })
      //       }
      //     </ul>
      //   </div>
      // </div>
    )
  }
  // store改变执行
  handleStoreChange(){
    this.setState(store.getState())
  }
  handleInputChange(e){
    const action=getInputChangeValue(e.target.value)
    store.dispatch(action)
  }
  handleClickBth(){
    const action =getAddItem()
    store.dispatch(action)
  }
  handleClickDeleteItem(index){
    const action=getDeleteItemAction(index)
    store.dispatch(action)
  }
  initList(){
    const action=getTodoList()
    store.dispatch(action)
  }
  componentDidMount(){
    this.initList()
  }
}

export default TodoList