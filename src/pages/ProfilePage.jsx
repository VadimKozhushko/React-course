import { useState } from "react"
import { useSelector, useDispatch } from "react-redux"
import * as types from '../store/profile/types'

export function ProfilePage () {


  const {showName, name} = useSelector((store) => store)
  console.log({name})
  const [value, setValue] = useState('')
  // const [checkBox, setCheckBox] = useState(false)

  const dispatch = useDispatch()



  const hendleChange = () => {
    dispatch({type: types.CHANGE_NAME, payload: value})
    // console.log(value)
    setValue('')
  }

  const handleCheckbox = ({target}) => {

    if (target.checked) {
      dispatch({type: types.CHECKED, payload: true})
  } else {
      dispatch({type: types.CHECKED, payload: false})
  }
    

  }

 
  
  return (
    <>
    <h1>ProfilePage</h1>


    {showName && <h2>{name}</h2>}
    
    <input 
     type="checkbox"
     checked={showName}
     onChange={handleCheckbox} />




    <hr />


    <input 
      type="text" 
      value={value}
      onChange={(e) => setValue(e.target.value)}
    />
    <button onClick={hendleChange} >Change name</button>

    </>
    


  )
}