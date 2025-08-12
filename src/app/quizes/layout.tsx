import Logout from "../components/Logout";
import { Suspense } from "react";
import Loading from "../loading";
import Score from "../components/Score";
import Scorecontextprovider from "../components/contexts/Scorecontext";
import { BrowserRouter } from "react-router-dom";
import Resultcontextprovider from "../components/contexts/Finalresult";
import Nav from "../components/Nav";


function layout({children}:{children:React.ReactNode}) {
    
    return (
       <Resultcontextprovider>

   
        <Scorecontextprovider>
                <Suspense fallback={<Loading/>}>
              
                    <div className="min-h-screen b flex flex-col ">
            <Nav/>
            <div className="  min-h-[92vh] flex justify-center items-center">
                     {children}

            </div>
       
        </div>

          
            
          </Suspense>

              </Scorecontextprovider>
                  </Resultcontextprovider>
      
              
             
            
      
       
    );

      
        
}

export default layout;