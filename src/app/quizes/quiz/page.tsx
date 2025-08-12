

import  dataconvertquiz  from "../../utils/fetchdataconvert";
import Singlequiz from "@/app/components/Singlequiz";
import Scorecontextprovider from "@/app/components/contexts/Scorecontext";




async function page({searchParams}:{searchParams:any}) {
        let  quizzes=[]
   
    let {level,category} = await searchParams
   
   
    

    async function fetchquiz(level:string,category:string){
        let fetchurl="";
        if(level=="any" && category=="0"){
            fetchurl="https://opentdb.com/api.php?amount=10"

        }else if(level!="any" && category!="0"){
            fetchurl=`https://opentdb.com/api.php?amount=10&category=${category}&difficulty=${level}`

        }
        else if(level=="any"&&category!="0"){
            fetchurl=`https://opentdb.com/api.php?amount=10&category=${category}`


        }
        else if(level!="any"&&category=="0"){
            fetchurl=`https://opentdb.com/api.php?amount=10&difficulty=${level}`


        }
        try{
            console.log(fetchurl)
             const req=await fetch(fetchurl,{
                cache:"force-cache"
                
                
             })
        const result=await req.json()
        return {
            message:"success",
            quizdata:result.results
        }

        }catch(error){
            return  {
            message:"failed",
            quizdata:error
        }


        }
       

      
      
        
    }
    

    const data =await fetchquiz(level,category)
    
    const quizdata=await dataconvertquiz(data.quizdata)
    console.log(quizdata)

    
   if(data.message=="failed"){
    return<h1>error occured on fetching data</h1>
   }
   console.log("jo")

    
    return (
       


   

        <Singlequiz quizdata={quizdata} />

   
      

            

    
   
     
    );
}

export default page;