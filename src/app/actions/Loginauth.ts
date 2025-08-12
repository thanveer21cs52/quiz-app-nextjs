"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { NextResponse } from "next/server";



export async function loginauth(formdata: FormData) {
  const username = formdata.get("username");
  const password = formdata.get("password");
  try {
    const res = await fetch("https://dummyjson.com/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        username,
        password,
        expiresInMins: 30,
      })
    });
    if(!res.ok){
        throw new Error('Login failed')
    }
    
    const datas = await res.json();

    const cookiestore=await cookies()
    cookiestore.set({
    name: "accesstoken",
    value: datas.accessToken,
    maxAge: 60*3, 
 
  });

    
    return {
        message:"login successfull",
        data:datas
    }
   
  } catch (err) {
    console.log(err);
   return {
        message:"login failed"
    }
  }
}

export async function deltoken() {
   const cookiestore=await cookies()
   if(cookiestore.get("accesstoken")){
     cookiestore.delete("accesstoken")
   }

   return {message:"cookies deleted successfully"}



  
   
     
 
}

