import React, { createContext, useContext, useState } from 'react';

// Create a context
const SessionContext = createContext();

// Create a provider component
export function SessionProvider({ children }) {
  const [sessionData, setSessionData] = useState(null);

  return (
    <SessionContext.Provider value={{ sessionData, setSessionData }}>
      {children}
    </SessionContext.Provider>
  );
}

// Custom hook to access the session context
export function useSession() {
  return useContext(SessionContext);
}
