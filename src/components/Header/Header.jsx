import { Outlet, Link, NavLink } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { logOut } from '../../services/firebase'

import styles from './Header.module.css'

export function Header () {

  const navigate = useNavigate()

  const isAuth = useSelector((store) => store.profile.isAuth)

  const handleLogin = () => {
    navigate('/signin')
  }
  const handleSignUp = () => {
    navigate('/signup')
  }
  const handleLogout = async () => {
    await logOut()
  }

  return (
  <>
  <header>
   <nav className={styles.header}>
     <ul className={styles.header_ul}>
      <li><NavLink to='/'
      style={({isActive}) => ({color: isActive ? 'red' : 'blue'})}
      >Home</NavLink></li>
      <li><NavLink to='/profile'
      style={({isActive}) => ({color: isActive ? 'red' : 'blue'})}
      >Profile</NavLink></li>
      <li><NavLink to='/chats'
      style={({isActive}) => ({color: isActive ? 'red' : 'blue'})}
      >Chats</NavLink></li>
      <li><NavLink to='/gists'
      style={({isActive}) => ({color: isActive ? 'red' : 'blue'})}
      >Gists</NavLink></li>
    </ul>
      {!isAuth && (
              <>
                <button onClick={handleLogin}>login</button>
                <button onClick={handleSignUp}>sing up</button>
              </>
            )}
            {isAuth && (
              <>
                <button onClick={handleLogout}>logout</button>
              </>
            )}
   </nav>
  </header> 
  <main>
    <Outlet></Outlet>
  </main> 
  </>

  )
}