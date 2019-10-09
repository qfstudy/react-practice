import {CHANGE_INPUT_VALUE,ADD_ITEM,DELETE_ITEM} from './actionType.js'
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