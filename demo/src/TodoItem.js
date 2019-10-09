import React,{Component} from 'react'
import PropTypes from 'prop-types'
class TodoItem extends Component{
  render(){
    return(
      // <div onClick={this.handleClick.bind(this,this.props.index)}>
      //   {this.props.content}
      // </div>
      <div>
        {
          this.props.list.map((item,index)=>{
            return (
              <li 
                onClick={this.handleClick.bind(this,this.props.index)} 
                key={index}>
                {item}
              </li>
            )
          })
        }
      </div>
    )
  }

  handleClick(index){
    // console.log(index)
    this.props.deleteItem(index)
  }
}

TodoItem.propTypes={
  list: PropTypes.array
}


export default TodoItem