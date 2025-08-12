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
    const [score,setScore]=useState(0)
    useEffect(()=>{
        // if(Cookies.get("score")){
        //     const scores=Cookies.get("score")||'0'
        //     setScore(parseInt(scores))
        // }
    },[score])

  return (
    <Scorecontext.Provider value={{score,setScore}}>
        {children}

    </Scorecontext.Provider>
    
  )
}

export default Scorecontextprovider