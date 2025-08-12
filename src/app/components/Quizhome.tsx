import { revalidatePath } from "next/cache";
import {redirect} from "next/navigation";

import Quizhomeselectform from "./Quizhomeselectform";
async function Quizhome() {

  let category = [];
  console.log("Sds")
  try {
    const req = await fetch("https://opentdb.com/api_category.php", {
      method:"get",
      cache: "force-cache",
    });
    category = await req.json();
  } catch (err) {
    console.log(err,"dfdfd");
  }

  return (

       <div className="min-h-full w-full flex justify-center items-center">
        <Quizhomeselectform category={category}/>
        

    </div>

 
   
    
  );
}

export default Quizhome;
