"use client"
import Cookies from "js-cookie"


import { createContext, useContext, useEffect, useState } from "react"

import React from 'react'

type Scorecontexttype={
    score:number,
    setScore: React.Dispatch<React.SetStateAction<number>>

}

export const Scorecontext=createContext<Scorecontexttype>({
    score:0,
    setScore:()=>{}
})

function Scorecontextprovider({children}:{children:React.ReactNode}) {
const [score, setScore] = useState<number>(() => {
  if (typeof window !== "undefined") {
    const stored = localStorage.getItem("scoredata");
    const parsed = Number(stored);
    return !isNaN(parsed) ? parsed : 0;
  }
  return 0; // fallback for SSR
});

useEffect(() => {
  localStorage.setItem("scoredata", JSON.stringify(score));
}, [score]);


  return (
    <Scorecontext.Provider value={{score,setScore}}>
        {children}

    </Scorecontext.Provider>
    
  )
}

export default Scorecontextprovider