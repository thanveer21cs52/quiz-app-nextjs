"use client"

import Cookies from "js-cookie";
import { redirect, useRouter } from "next/navigation";





function Logout() {
   const router=useRouter()
   function logoutfn(){
    if(Cookies.get("accesstoken")){
      Cookies.remove("accesstoken")
    }
    router.replace("/")

 
 

}
    return (
      <button className=" px-3 py-2 mr-5 text-quizbutton  bg-quizbg w-fit text-xs font-bold rounded-md cursor-pointer" onClick={()=>{
       logoutfn()
      }} >LOG OUT</button>
    );
}

export default Logout;