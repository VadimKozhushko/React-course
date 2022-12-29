import { Outlet, Link, NavLink } from 'react-router-dom'

import styles from './Header.module.css'
export function Header () {
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
   </nav>
  </header> 
  <main>
    <Outlet></Outlet>
  </main> 
  </>

  )
}