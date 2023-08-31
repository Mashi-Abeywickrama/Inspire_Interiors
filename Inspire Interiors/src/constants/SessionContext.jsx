import React, { createContext, useContext, useState } from 'react';

// Create a context
const SessionContext = createContext();

// Create a provider component
export function SessionProvider({ children }) {
  const storedSessionData = JSON.parse(localStorage.getItem('sessionData'));
  const [sessionData, setSessionData] = useState(storedSessionData);

  const updateSessionData = (newSessionData) => {
    localStorage.setItem('sessionData', JSON.stringify(newSessionData));
    setSessionData(newSessionData);
  };

  return (
    <SessionContext.Provider value={{ sessionData, setSessionData: updateSessionData }}>
      {children}
    </SessionContext.Provider>
  );
}

// Custom hook to access the session context
export function useSession() {
  return useContext(SessionContext);
}
