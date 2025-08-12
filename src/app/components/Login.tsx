"use client"
import { useEffect, useState } from "react"
import {loginauth} from "../actions/Loginauth"
import { useRouter } from "next/navigation"




function Login() {
    const router=useRouter()
    const [error,seterror]=useState("")
    async function validatelog(formdata:FormData){
        const res=await loginauth(formdata)
        console.log(res)
        seterror(res.message)
        if(res.message=="login successfull"){
            return router.push("/quizes")
        }
       

    }
    useEffect(()=>{},[error])

    return (
        <div className="w-full min-h-screen flex justify-center items-center">
            <form className="flex flex-col bg-quizbg w-2/5 text-quizbutton justify-center items-center space-y-4 font-mono p-2 py-24 rounded-sm"
    action={validatelog}
    >
        <div className="flex flex-col justify-center items-center space-y-3">
        <h1 className="text-4xl font-bold ">LOG IN</h1>
       
      </div>
        <div className="flex  flex-col space-x-2 w-2/4 space-y-2 ">
        <div className="">
          <label htmlFor="username  ">username:</label>
        </div>

        <input
          id="username"
          className="border-2 border-quizbutton p-1 w-full bg-quizbg focus:outline-0 active:outline-0 "
          name="username"
        />
      </div>
      <div className="flex  flex-col space-x-2 w-2/4 space-y-2 ">
        <div className="">
          <label htmlFor="password  ">password:</label>
        </div>

        <input
          id="password"
          className="border-2 border-quizbutton p-1 w-full bg-quizbg focus:outline-0 active:outline-0 "
          name="password"
          type="password"
        />
      </div>
      <div className="flex flex-col space-y-6 justify-center items-center w-2/5 mt-5">
        <button className="text-sm bg-quizbutton w-3/4 text-gray-50  py-2 rounded-sm" type="submit" >
          Log in
        </button>
       <div className="text-sm text-darktext font-bold">
        {error!=""&&error}

       </div>
        
      </div>



    
    </form>
        </div>
        
    );
}

export default Login;