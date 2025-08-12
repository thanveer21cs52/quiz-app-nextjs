"use client"
import React from 'react'
import Score from './Score'
import Logout from './Logout'
import { usePathname } from 'next/navigation'
import { useRouter } from 'next/navigation'
function Nav() {
    const path=usePathname()
    const router=useRouter()
  return (
     <div className=" min-h-[8vh] w-full flex justify-between items-center">
                <button onClick={()=>{
                  
                    if(path=="/quizes"){
                        router.push("/")

                    }else{

                         router.push("/quizes")
                    }
                    

                    }} className=" px-3 py-2 ml-5 text-quizbutton  bg-quizbg w-fit text-xs font-bold rounded-md cursor-pointer">back</button>
                {(path === "/quizes/quiz" || path === "/quizes/results") && <Score />}
                <Logout/>
            </div>
  )
}

export default Nav