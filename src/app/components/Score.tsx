"use client"
import React, { useContext, useEffect } from 'react'
import { Scorecontext } from './contexts/Scorecontext'


export default function Score() {
    const {score,setScore}=useContext(Scorecontext)
    
  
  return (
    <div className='bg-quizbutton text-quizbg px-3 py-2 rounded-sm'>score: {score}
    <button onClick={()=>setScore(prev=>prev+1)}>+</button>
    </div>
  )
}
