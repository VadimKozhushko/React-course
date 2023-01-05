import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { changeName, toggleProfile } from '../store/profile/actions'
import { selectName, selectVisible } from '../store/profile/selectors'

export function ProfilePage() {
  const name = useSelector(selectName)
  const visible = useSelector(selectVisible)
  const [value, setValue] = useState('')

  const dispatch = useDispatch()


  return (
    <>
      <h1>Profile Page</h1>
      {visible && <h2>{name}</h2>}
      <input type="checkbox" checked={visible} readOnly />
      <button onClick={() => dispatch(toggleProfile())} >change visible</button>
      <br />
      <input 
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <button onClick={() => dispatch(changeName(value))}>Change name</button>
    </>
  )
}