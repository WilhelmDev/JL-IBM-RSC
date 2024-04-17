'use client'
import React, { createContext, useEffect, useState } from "react";

interface ContextPermission {
//  TODO: create types
  saveToken?: (newToken: string, newRol:string) => void
  isLoged?: boolean
}

const SessionContext = createContext<ContextPermission>({})

const SessionProvider: React.FC<{children: React.ReactNode}> = ({children}) => {
  const [isLoged, setIsLoged] = useState(false)
  const [role, setRole] = useState('Cliente')

  const saveToken = (newToken: string, newRol: string) => {
    localStorage.setItem('token', newToken)
    setIsLoged(true)
    setRole(newRol)
  }

    return (
      <SessionContext.Provider value={{
        saveToken, isLoged
      }}>
        {children}
      </SessionContext.Provider>
    )
}
export {
  SessionContext
}

export default SessionProvider