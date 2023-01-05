import { Routes, Route } from 'react-router-dom'
import { Header } from './components/Header/Header'
import { MainPage } from './pages/MainPage'
import { ProfilePage } from './pages/ProfilePage'
import { ChatsPage } from './pages/ChatsPage'
import { ChatList } from './components/ChatList/ChatList'
import { GistsList } from './pages/Gists'
import { Page404 } from  './pages/Page404'

import { PersistGate } from 'redux-persist/integration/react'
import { persistor } from './store'
import { useDispatch } from 'react-redux'
import { useEffect, useState } from 'react'
import { auth } from './store/profile/actions'
import { firebaseAuth, messagesRef } from './services/firebase'
import { onValue } from "firebase/database"
import { PrivateRoute } from './utils/PriviteRoute'
import { PublicRoute } from './utils/PublicRoute'
import { SingIn } from './pages/SingIn'
import { SignUp } from './pages/SingUp'

export function App () {
  const dispatch = useDispatch()

  const [messagesDB, setMessagesDB] = useState({})
  const [chats, setChats] = useState([])

  useEffect(() => {
    const unsubscribe = firebaseAuth.onAuthStateChanged((user) => {
      if (user) {
        dispatch(auth(true))
      } else {
        dispatch(auth(false))
      }
    })
    return unsubscribe
  }, [])

  useEffect(() => {
    onValue(messagesRef, (snapshot) => {
      const data = snapshot.val()
      const newChats = Object.entries(data).map((item) => ({
        name: item[0],
        message: item[1].messageList
      }))
      setMessagesDB(data)
      setChats(newChats)
    })
  }, [])

  return (
    <>
      <PersistGate persistor={persistor}>
          <Routes>
            <Route path='/' element={<Header />}>
              <Route index element={<MainPage />} />
              <Route path="profile" element={<ProfilePage />} />
              <Route path="chats" element={<PrivateRoute />}>
                <Route
                  index
                  element={<ChatList chats={chats} messagesDB={messagesDB} />}
                />
                <Route
                  path=":chatId"
                  element={<ChatsPage chats={chats} messagesDB={messagesDB} />}
                />
              </Route>
              <Route path="gists" element={<GistsList />}></Route>
              <Route path="signin" element={<PublicRoute component={<SingIn />} />} />
              <Route path="signup" element={<SignUp />} />
            </Route>

            <Route path="*" element={<Page404></Page404>}/>
          </Routes>
      </PersistGate>
    </>
  )
}
