import React from 'react'

const TodoListUI=(props)=>{
	return (
		<div>
			<div>
				<input            
					onChange={props.handleInputChange}
					value={props.inputValue}/>
				<button onClick={props.handleClickBth}>
					提交
				</button>
			</div>
			<div>
				<ul >
					{
						props.list.map((item,index)=>{
							return (
								<li
									onClick={()=>{props.handleClickDeleteItem(index)}} 
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

// class TodoListUI extends Component {
// 	render(){
// 		return (
// 			<div>
// 				<div>
//           <input            
//             onChange={this.props.handleInputChange}
//             value={this.props.inputValue}/>
//           <button onClick={this.props.handleClickBth}>
//             提交
//           </button>
//         </div>
//         <div>
//           <ul >
//             {
//               this.props.list.map((item,index)=>{
//                 return (
//                   <li
//                     onClick={()=>{this.props.handleClickDeleteItem(index)}} 
//                     key={index}>
//                     {item}
//                   </li>
//                 )
//               })
//             }
//           </ul>
//         </div>
// 			</div>
// 		)
// 	}
// }

export default TodoListUI