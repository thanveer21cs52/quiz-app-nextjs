"use client"
import Cookies from "js-cookie"


import { createContext, useContext, useEffect, useState } from "react"

import React from 'react'

type Resultcontexttype={
    Result:any[],
    setResult: React.Dispatch<React.SetStateAction<any>>

}

export const Resultcontext=createContext<Resultcontexttype>({
    Result:[],
    setResult:()=>{}
})

function Resultcontextprovider({children}:{children:React.ReactNode}) {
 const [Result, setResult] = useState<any[]>(() => {
    if (typeof window !== "undefined") {
      try {
        const stored = localStorage.getItem("resultdata");
        const parsed = stored ? JSON.parse(stored) : [];
        return Array.isArray(parsed) ? parsed : [];
      } catch {
        return [];
      }
    }
    return [];
  });

  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem("resultdata", JSON.stringify(Result));
    }
  }, [Result]);

  return (
    <Resultcontext.Provider value={{Result,setResult}}>
        {children}

    </Resultcontext.Provider>
    
  )
}

export default Resultcontextprovider