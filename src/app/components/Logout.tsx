"use client"

import Cookies from "js-cookie";
import { redirect, useRouter } from "next/navigation";
import { useContext, useEffect, useState } from "react";
import { Scorecontext } from "./contexts/Scorecontext";
import Finalresult from "./Finalresult";
import { Resultcontext } from "./contexts/Finalresultcontext";





function Logout() {
  
  const {score,setScore}=useContext(Scorecontext)
  const {Result,setResult}=useContext(Resultcontext)
 
   
   const router=useRouter()
   function logoutfn(){
     
    
    
  

  setScore(0);
  setResult([]);

  
  if (Cookies.get("accesstoken")) {
    Cookies.remove("accesstoken");
  }


  localStorage.clear();

 
  redirect("/")


}
    return (
      <button className=" px-3 py-2 mr-5 text-quizbutton  bg-quizbg w-fit text-xs font-bold rounded-md cursor-pointer" onClick={()=>{
       logoutfn()
      }} >LOG OUT</button>
    );
}

export default Logout;