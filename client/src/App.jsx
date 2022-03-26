import React from 'react';
import Messanger from "./components/Messanger.jsx"
import AccountProvider from './Context API/AccountProvider';
import UserProvider from './Context API/UserProvider.jsx';
//css
import "./style.css"

const App = () => {
  return (
    <>
      <AccountProvider >
        <UserProvider>
          <Messanger />
        </UserProvider>
      </AccountProvider>
    </>
  )
}
export default App;