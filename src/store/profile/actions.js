import * as types from '../profile/types'


export const changeName = (data) => ({
  type: types.CHANGE_NAME,
  payload: data
})

export const toggleProfile = () => ({
  type: types.TOGGLE_PROFILE
})

export const auth = (auth) => ({
  type: types.IS_AUTH,
  payload: auth
})