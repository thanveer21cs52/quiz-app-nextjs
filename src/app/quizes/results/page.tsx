"use client"
import { Resultcontext } from '@/app/components/contexts/Finalresultcontext'
import Finalresult from '@/app/components/Finalresult'
import React, { useContext } from 'react'
function page() {
    const {Result}=useContext(Resultcontext)
 console.log(Result)


  return (
    <Finalresult resultdata={Result}/>
  )
}

export default page