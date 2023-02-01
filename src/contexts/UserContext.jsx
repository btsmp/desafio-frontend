import { createContext, useState, useEffect } from 'react'

export const UserContext = createContext({})

export function UserProvider({ children }) {
  const [userData, setUserData] = useState({})
  const tokenUser = '@vflows-user'

  async function signIn(data) {
    localStorage.setItem(tokenUser, JSON.stringify(data))
    setUserData(data)
  }

  useEffect(() => {
    const user = localStorage.getItem(tokenUser)
    setUserData(JSON.parse(user))
  }, [])

  return (
    <UserContext.Provider value={{ userData, signIn }}>
      {children}
    </UserContext.Provider>
  )
}
