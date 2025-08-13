"use client"
import React, { FormEvent, useEffect, useState } from 'react'

import { useRouter } from 'next/navigation';
import Loading from '../loading';



function Quizhomeselectform({category}:{category:any}) {
 useEffect(() => {
    const page = localStorage.getItem("page");
    if (page) {
      localStorage.removeItem("page");
    }
  }, []);
  const [loading,setloading]=useState(false)
    const router=useRouter()
    async function redirecttoquizfn(e:any){
    e.preventDefault()
    setloading(true)
    const formdata=new FormData(e.target)
    const category=formdata.get("category")
    const level =formdata.get("level")
    
    router.push(`/quizes/quiz?category=${category}&level=${level}`)


}
if(loading){
  return <Loading/>
}
  return (
    <form className="flex flex-col bg-quizbg w-2/5 text-quizbutton justify-center items-center space-y-4 font-mono p-2 py-24 rounded-sm"
        onSubmit={redirecttoquizfn}
        >
          <div className="flex flex-col justify-center items-center space-y-3">
            <h1 className="text-5xl font-semibold ">QUIZ WORLD</h1>
            <p className="text-xs">welcome to the quiz world</p>
          </div>
    
          <div className="flex  flex-col space-x-2 w-2/4 space-y-2 ">
            <div className="">
              <label htmlFor="category ">Catagory:</label>
            </div>
    
            <select
              id="category"
              className="border-2 border-quizbutton p-1  w-full bg-quizbg  focus:outline-0 active:outline-0 "
              name="category"
            >
              <option value="0" className="absolute" >
                Any Catagory
              </option>
              {category.trivia_categories.map(
                (category: { id: number; name: string }) => {
                  return (
                    <option key={category.id} value={category.id}>
                      {category.name}
                    </option>
                  );
                }
              )}
            </select>
          </div>
          <div className="flex  flex-col space-x-2 w-2/4 space-y-2 ">
            <div className="">
              <label htmlFor="level  ">Level:</label>
            </div>
    
            <select
              id="level"
              className="border-2 border-quizbutton p-1 w-full bg-quizbg focus:outline-0 active:outline-0 "
              name="level"
            >
              <option value="any">Any level</option>
              <option value="easy">easy</option>
              <option value="medium">medium</option>
              <option value="hard">hard</option>
            </select>
          </div>
    
          <div className="flex justify-center items-center w-2/5 mt-5">
            <button className="text-sm bg-quizbutton w-3/4 text-gray-50  py-2 rounded-sm" type="submit" >
              Lets Start
            </button>
          </div>
        </form>
    
  )
}

export default Quizhomeselectform