"use client";
import { decode } from "html-entities";
import React, { useContext } from "react";
import { Scorecontext } from "./contexts/Scorecontext";
import { useRouter } from "next/navigation";



function Finalresult({ resultdata }: { resultdata: any }) {
    const router=useRouter()
  console.log(resultdata);
   const {score,setScore}=useContext(Scorecontext)
   if(score==0&&resultdata.length==0){
     router.push("/")

   }
  return (
    <div className="grid grid-cols-4 w-full gap-4 m-4">

      {resultdata.length > 0 &&
        resultdata.map((data: any, index: number) => {
          return (
            <div className="bg-quizbg text-quizbutton p-6 flex flex-col rounded-xs" key={index}>
              <div
                className="flex  justify-center items-start space-y-3 "
                key={index}
              >
                {index + 1} {decode(data.question)}
              </div>

              <div className="flex  flex-col space-y-2  h-full p-2">
                {data.options.map((option: any, index1: number) => {
                  return (
                    <div
                      className={`flex ${
                        data.correct_answer == option &&
                        data.youranswer.option == data.correct_answer &&
                        "bg-green-400 "
                      } ${
                        data.youranswer.option == option &&
                        data.youranswer.option != data.correct_answer &&
                        "bg-red-400 "
                      } p-2 space-x-2 w-full bg-amber-100`}
                      key={index1 + option}
                    >
                      {index1 + 1}. {decode(option)}
                    </div>
                  );
                })}
               
              </div>
               <div className="p-2 font-bold">correct answer: {decode(data.correct_answer)}</div>
            </div>
          );
        })}
    </div>
  );
}

export default Finalresult;
