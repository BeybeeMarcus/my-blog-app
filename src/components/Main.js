import { Outlet } from "react-router-dom";
import FooterMain from "./FooterMain";
import Header from "./Header";


function Main(){

    return(

        <>
         <Header/>
         
            <Outlet/>

         <FooterMain/>
        </>
        

    )
}
export default Main;