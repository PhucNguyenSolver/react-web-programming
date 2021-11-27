import React, { useState } from 'react';

export const AppContext = React.createContext();

const defaultUser = {
  id: 1,
  name: 'Huu Phuc',
  imgUrl: 'https://picsum.photos/seed/phophucne/300/200',
}

export default function AppProvider({ children }) {
  const [isAdmin, setIsAdmin] = useState(true);
  const [user, setUser] = useState(defaultUser);
  return (
    <AppContext.Provider
      value={{
        user, 
        setUser,
        isAdmin,
        setIsAdmin,
      }}>
      {children}
    </AppContext.Provider>
  )
}
