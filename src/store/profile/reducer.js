import * as types from './types'


const initialState = {
  name: 'Goga',
  showName: true
}


export const profileReducer = (state = initialState, action) => {
  const {type, payload} = action
  switch (type) {
    case types.CHANGE_NAME:
      return {
        ...state,
        name: payload
      }
    case types.CHECKED:
      return {
        ...state,
        showName: payload
      }



     
  
    default:
      return state
  }

}
