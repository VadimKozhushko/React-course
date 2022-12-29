import { Routes, Route } from 'react-router-dom'
import { Header } from './components/Header/Header'
import { MainPage } from './pages/MainPage'
import { ProfilePage } from './pages/ProfilePage'
import { ChatsPage } from './pages/ChatsPage'
import { ChatList } from './components/ChatList/ChatList'
import { GistsList } from './pages/Gists'
import { Page404 } from  './pages/Page404'
import { Provider } from 'react-redux'
import { store } from './store'
import { PersistGate } from 'redux-persist/integration/react'
import { persistor } from './store'



export function App () {
 
  return (
    <>
    <Provider store={store}>
    <PersistGate persistor={persistor}>
    <Routes>
      <Route path="/" element={<Header />}>
      <Route index element={<MainPage />}></Route>
      <Route path="profile" element={<ProfilePage />}></Route>
      <Route path="gists" element={<GistsList />}></Route>
      <Route path="chats">
        <Route index element={<ChatList />} />
        <Route path=":chatId" element={<ChatsPage />}/>
          </Route>
      </Route>
      
      <Route path="*" element={<Page404 />} />

    </Routes>
    </PersistGate>
    </Provider>
    </>
    


  )
}