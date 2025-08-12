"use client"
import Cookies from "js-cookie";
import { decode } from "html-entities";
import { FormEvent, useContext, useEffect, useState } from "react";
import { Scorecontext } from "./contexts/Scorecontext";



function Singlequiz({quizdata}:{quizdata:any}) {

  const [issubmit,setsubmit]=useState<boolean>(false)
  const [page,setpage]=useState<number>(1)
  const [youranswer,setyouranswer]=useState("none")
  let correctanswer="empty"
  
  
  const {score,setScore}=useContext(Scorecontext)

   function checkanswer(event:any){
    event.preventDefault(); 
     
   

    

  const formData = new FormData(event.target);
  const answer = formData.get(`${page}`);
  if(youranswer==correctanswer){
    setScore(score+1)
     
  }
  console.log(correctanswer,youranswer,"correct","your")
  console.log(quizdata)
  Cookies.set("score", `${score}`, { expires:1/144  })
 

  


  

   }
     function handleNext() {
    if (page + 1 < quizdata.length) {
      setpage(page + 1);
      setsubmit(false);
    } else {
      
      alert(`Quiz finished! Your score: ${score}`);
      setpage(0);
      setsubmit(false);
      setScore(0);
      Cookies.remove("score");
    }
  }
  useEffect(()=>{alert(issubmit)},[issubmit])
 
   

  

    return (
   
    <form className="w-full bg-quizbg p-6 flex flex-col space-y-4" onSubmit={checkanswer}>
            <div className="flex flex-col justify-center items-start space-y-3  ">
               {page} {decode(quizdata[page].question)}
             </div>
       
             <div className="flex  flex-col space-y-2 w-2/4 ">
             {quizdata[page].options.map((option:any,index:number)=>{
              if(decode(option)==decode(quizdata[page].correct_answer
)){
                correctanswer=`${page}-${index}`
              }
              const optionid=`${page}-${index}`
                 return <div className={`flex ${optionid==correctanswer&&issubmit&&"bg-green-700"} ${correctanswer==youranswer&&issubmit&&optionid==youranswer&&"bg-green-700"} ${optionid==youranswer&&issubmit&&optionid!=correctanswer&&"bg-red-500"}  space-x-2`} key={index+option}>
                   <input type="radio" id={optionid} name={`${page}`} value={option} disabled={issubmit} onClick={(e:any)=>{
                    setyouranswer(`${e.target.id}`)
                   }}/>
                   <label htmlFor={optionid} key={index}>
                   {decode(option)}</label>
                 </div>
               
             })}
       
             </div>
           
       
             <div className="flex justify-center items-center  mt-5">
              {issubmit? <button className="text-sm bg-quizbutton w-3/4 text-gray-50  py-2 rounded-sm" type="button"  onClick={handleNext}>
                 next
               </button>:  <button className="text-sm bg-quizbutton w-3/4 text-gray-50  py-2 rounded-sm" type="submit" onClick={()=>{  setsubmit(true)}} >
                 submit
               </button>}
             
             </div>
           </form>
      
 
        
     
        
    );
}

export default Singlequiz;