import {CHANGE_INPUT_VALUE,ADD_ITEM,DELETE_ITEM,INIT_LIST_ACTION} from './actionType.js'
import axios from 'axios'

export const getInputChangeValue=(value)=>{
  return {
    type: CHANGE_INPUT_VALUE,
    value
  }
}

export const getAddItem=()=>{
  return{
    type: ADD_ITEM
  }
}
export const getDeleteItemAction=(value)=>{
  return {
    type: DELETE_ITEM,
    value
  }
}
export const getInitListAction=(value)=>{
  return {
    type: INIT_LIST_ACTION,
    value
  }
}
export const getTodoList=()=>{
  return (dispatch)=>{
    axios.get('/data/list.json')
    .then(res=>{
      const action=getInitListAction(res.data)
      dispatch(action)
    })
    .catch(error=>{
      console.log(error)
    })
  }
}
