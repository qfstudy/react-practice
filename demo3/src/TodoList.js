import React,{Component} from 'react'
import {connect} from 'react-redux'
import {
  getInputChangeValue,
  getAddItem,
  getDeleteItemAction,
  getTodoList
} from './store/actionCreators.js'

class TodoList extends Component {
  render(){
    return(
      <div>
        <div>
          <input            
            onChange={this.props.handleInputChange}
            value={this.props.inputValue}/>
          <button onClick={this.props.handleClickBth}>
            提交
          </button>
        </div>
        <div>
          <ul >
            {
              this.props.list.map((item,index)=>{
                return (
                  <li
                    onClick={()=>{this.props.handleClickDeleteItem(index)}} 
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
  componentDidMount(){
    this.props.initList()
  }
}

const mapStateToProps=(state)=>{
  return{
    inputValue: state.inputValue,
    list: state.list
  }
}

const maoDispatchToProps=(dispatch)=>{
  return{
    handleInputChange(e){
      const action=getInputChangeValue(e.target.value)
      dispatch(action)
    },
    handleClickBth(){
      const action =getAddItem()
      dispatch(action)
    },
    handleClickDeleteItem(index){
      const action=getDeleteItemAction(index)
      dispatch(action)
    },
    initList(){
      const action=getTodoList()
      dispatch(action)
    }
  }
}

export default connect(mapStateToProps,maoDispatchToProps)(TodoList)