

import { cookies } from "next/headers";
import Quizhome from "../components/Quizhome";




export default async  function Home() {
  const cookiestore=await cookies()
  const token=cookiestore.get("accesstoken")
  console.log(token)
  try{
    const req=await fetch('https://dummyjson.com/auth/me',{
      method: 'GET',
      headers: {
    'Authorization': `Bearer ${token?.value}`, 
  }})
  const reult=await req.json()
  console.log(reult)

}catch(err){
    console.log(err)
  }
  
  return (

   
      <Quizhome/>
    

   
         

  );
}
