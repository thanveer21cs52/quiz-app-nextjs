"use client"
import React, { useContext } from 'react'
import Cookies from 'js-cookie'
import Score from './Score'
import Logout from './Logout'
import { usePathname } from 'next/navigation'
import { useRouter } from 'next/navigation'
import { Scorecontext } from './contexts/Scorecontext'
import { Resultcontext } from './contexts/Finalresultcontext'
function Nav() {
      const {score,setScore}=useContext(Scorecontext)
                      const {Result,setResult}=useContext(Resultcontext)
    const path=usePathname()
    const router=useRouter()
  return (
     <div className=" min-h-[8vh] w-full flex justify-between items-center">
                <button onClick={()=>{
                    localStorage.clear()
                    
                      setResult([])
                      setScore(0)
                  
                    if(path=="/quizes"){
                        if(Cookies.get("accesstoken")){
                            console.log("you are are login")
                        }else{
                                router.push("/")

                        }
                    

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