import React,{Component} from 'react'
import store from './store/index.js'
import {getInputChangeValue,getAddItem,getDeleteItemAction} from './store/actionCreators.js'

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
      <div>
        <div>
          <input            
            onChange={this.handleInputChange}
            value={this.state.inputValue}/>
          <button onClick={this.handleClickBth}>
            提交
          </button>
        </div>
        <div>
          <ul >
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
          </ul>
        </div>
      </div>
    )
  }
  // store改变执行
  handleStoreChange(){
    this.setState(store.getState())
  }
  handleInputChange(e){
    // const action={
    //   type: 'change_input_value',
    //   value: e.target.value
    // }
    const action=getInputChangeValue(e.target.value)
    store.dispatch(action)
  }
  handleClickBth(){
    // this.setState((prevState)=>{
    //   return{
    //     list: [...prevState.list,prevState.inputValue],
    //     inputValue: ''
    //   }
    // })
    // const action={
    //   type: 'add_item'
    // }
    const action =getAddItem()
    store.dispatch(action)
  }
  handleClickDeleteItem(index){
    // console.log(index)
    // this.setState((prevState)=>{
    //   const list=[...prevState.list]
    //   list.splice(index,1)
    //   return{
    //     list
    //   }
    // })
    // const action={
    //   type: 'delete_item',
    //   value: index
    // }
    const action=getDeleteItemAction(index)
    store.dispatch(action)
  }
}

export default TodoList