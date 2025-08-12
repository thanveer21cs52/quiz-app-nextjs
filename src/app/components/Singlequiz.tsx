"use client"
import Cookies from "js-cookie";
import { decode } from "html-entities";
import { FormEvent, useContext, useEffect, useState } from "react";
import { Scorecontext } from "./contexts/Scorecontext";

import Finalresult from "./Finalresult";
import { useRouter } from "next/navigation";
import { Resultcontext } from "./contexts/Finalresult";
import { useCountdown } from "../utils/Timer";




function Singlequiz({quizdata}:{quizdata:any}) {
const {seconds, active, reset, stop} =useCountdown()
 const [isend,setend]=useState(false)
  const router=useRouter()
 const [resultdata,setresultdata]=useState<any[]>(JSON.parse(localStorage.getItem("resultdata")||"[]"))
  const [issubmit,setsubmit]=useState<boolean>(false)
  const localpage=JSON.parse(localStorage.getItem("page")||"1")
  const [page,setpage]=useState<number>(parseInt(localpage))
  const [youranswer,setyouranswer]=useState({
    id:"none",
    option:"none"
  })
  let correctanswer={
    id:"empty",
    option:"empty"
  }
  
  
  const {Result,setResult}=useContext(Resultcontext)
  const {score,setScore}=useContext(Scorecontext)

   function checkanswer(event:any){
    event.preventDefault(); 
     
   

    if(issubmit){
      const formData = new FormData(event.target);
  const answer = formData.get(`${page}`);
  if(youranswer==correctanswer){
    setScore(score+1)
     
  }
  console.log(correctanswer,youranswer,"correct","your")
  console.log(quizdata)
  Cookies.set("score", `${score}`, { expires:1/144  })

    }

  
 

  


  

   }
   function handlesubmit(){
      if(page==10){
                 
                if(correctanswer.id==youranswer.id){
                  setScore(score+1)
                }
                const updatedata={...quizdata[page-1],youranswer}
                setresultdata(prev=>[...prev,updatedata])
                  setend(true)
                return null
                }
                setsubmit(true)
                if(correctanswer.id==youranswer.id){
                  setScore(score+1)
                }
                const updatedata={...quizdata[page-1],youranswer}
                setresultdata(prev=>[...prev,updatedata])
                localStorage.setItem("resultdata",JSON.stringify(resultdata))
                
                
   }
     function handleNext() {
     
      setpage(page+1)
      setyouranswer({id:"none",option:"none"})
 setsubmit(false)
  }
  useEffect(()=>{
    if(isend){
      setResult(resultdata)
      router.push("/quizes/results")
      
       
    
    }

  },[isend])
  useEffect(()=>{
    reset()
  
    localStorage.setItem("page",JSON.stringify(page))
  },[page])


 
   

 
  

    return (
   
    <div className=" bg-quizbg text-quizbutton p-6 flex flex-col space-y-4 justify-center items-start h-fit w-2/4" >
            <div className="flex w-full justify-end">
              <div className="text-red-400">Timer: 00:{seconds!=10&&0}{seconds}</div></div>
            <div className="flex flex-col justify-center items-start space-y-3  ">
               {page} {decode(quizdata[page-1].question)}
             </div>
       
             <div className="flex  flex-col space-y-2 w-full ">
             {quizdata[page-1].options.map((option:any,index:number)=>{
              if(decode(option)==decode(quizdata[page-1].correct_answer
)){
                correctanswer={id:`${page-1}-${index}`,
                  option:decode(option)
                }
              }
              const optionid=`${page-1}-${index}`
                 return <label htmlFor={optionid} key={optionid} className={`flex ${optionid==correctanswer.id&&issubmit&&youranswer.id!="none"&&"bg-green-400"} ${correctanswer.id==youranswer.id&&issubmit&&optionid==youranswer.id&&"bg-green-400"} ${optionid==youranswer.id&&issubmit&&optionid!=correctanswer.id&&"bg-red-400"} p-2 bg-amber-200 space-x-2 hover:bg-amber-50`} >
                   <input type="radio" id={optionid} name={`${page-1}`} value={decode(option)} disabled={seconds==0||issubmit} onClick={(e:any)=>{
                    setyouranswer({
                      id:`${e.target.id}`,
                      option:e.target.value
                    })
                   }}/>
                   <div >
                   {decode(option)}</div>
                 </label>
               
             })}
       
             </div>
           
       
             <div className="flex justify-center items-center w-full  mt-5">
               <button className="text-sm bg-quizbutton w-3/4 text-gray-50  py-2 rounded-sm cursor-pointer hover:bg-amber-800" type="button"  onClick={()=>{
               if(!issubmit&&seconds==0){
                handlesubmit()
               }
               else if(issubmit){
                handleNext()
               }else if(!issubmit&&seconds!=0){
                handlesubmit()
               }else if(seconds==0){
                handlesubmit()
               }

               
               }}>
                 {(issubmit)?"next":"submit"}
               </button> 
               
             
             </div>
           </div>
      
 
        
     
        
    );
}

export default Singlequiz;