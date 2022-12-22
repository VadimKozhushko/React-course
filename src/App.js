import { Routes, Route } from 'react-router-dom'
import { Header } from './components/Header/Header'
import { MainPage } from './pages/MainPage'
import { ProfilePage } from './pages/ProfilePage'
import { ChatsPage } from './pages/ChatsPage'
import { ChatList } from './components/ChatList/ChatList'

import { Page404 } from  './pages/Page404'
import { Provider } from 'react-redux'
import { store } from './store'


export function App () {
 
  return (
    <>
    <Provider store={store}>
    <Routes>
      <Route path="/" element={<Header />}>
      <Route index element={<MainPage />}></Route>
      <Route path="profile" element={<ProfilePage />}></Route>
      <Route path="chats">
        <Route index element={<ChatList />} />
        <Route path=":chatId" element={<ChatsPage />}/>
          </Route>
      </Route>

      <Route path="*" element={<Page404 />} />

    </Routes>
    </Provider>
    </>
    


  )
}