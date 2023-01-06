import React,{ createContext, useState, ReactNode } from 'react'

interface PropsType {
  children: ReactNode
}

interface ContextInterface {
  searchTerm?: string
  setSearchTerm?: (arg0: string) => void
  checkBoxFilterTerm?: string
  setCheckBoxFilterTerm?: (arg0: string) => void
  sortTerm?: string
  setSortTerm?: (arg0: string) => void
}

export const ContextData = createContext<ContextInterface>({})

export const ContextDataProvider = ({ children }: PropsType) => {
  const [searchTerm, setSearchTerm] = useState('')
  const [sortTerm, setSortTerm] = useState('desc')
  const [checkBoxFilterTerm, setCheckBoxFilterTerm] = useState('name')
 

  return (
    <ContextData.Provider
      value={{
        searchTerm,
        setSearchTerm,
        checkBoxFilterTerm,
        setCheckBoxFilterTerm,
        sortTerm,
        setSortTerm
      }}
    >
      {children}
    </ContextData.Provider>
  )
}
