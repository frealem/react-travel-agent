import {Front} from "../front";
import { Navbar } from "../navbar";
import { Footer } from "./footer";

export const About=()=>{
    return(<div>
        <Navbar/>
        <Front 
                cName="frontHome"
                image='https://i.travelapi.com/lodging/38000000/37930000/37927400/37927317/f0d50199_z.jpg'
                title="ABOUT US"
               
            />
            <Footer/>
            </div>);
}