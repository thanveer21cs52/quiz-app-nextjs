import Logout from "../components/Logout";
import { Suspense } from "react";
import Loading from "../loading";
import Score from "../components/Score";
import Scorecontextprovider from "../components/contexts/Scorecontext";

function layout({children}:{children:React.ReactNode}) {
    return (
              <Scorecontextprovider>
                <Suspense fallback={<Loading/>}>
              
                    <div className="min-h-screen b flex flex-col ">
            <div className=" min-h-[8vh] w-full flex justify-between items-center">
                <Score/>
                <Logout/>
            </div>
            <div className="  min-h-[92vh] flex justify-center items-center">
                     {children}

            </div>
       
        </div>

          
            
          </Suspense>

              </Scorecontextprovider>
             
            
      
       
    );

      
        
}

export default layout;