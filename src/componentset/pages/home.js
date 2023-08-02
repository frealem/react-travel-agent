import { Navbar } from "../navbar"
import { Front } from "../front";
import { HBottum } from "../homebottum";
import { Footer } from "./footer"; 
export const Home=()=>{
    return(<div>
        <Navbar/>
            <Front 
                cName="frontHome"
                image="https://cf.bstatic.com/xdata/images/hotel/max1024x768/296675548.jpg?k=98681dbea5cfec6e1d978c4913f4f2eed07cba191a8de1a6ab601e3cacaebf48&o=&hp=1"
                title="Travel Ethiopia"
                text="Your Best Place to Visit Ethiopia Through Us"
                btnText="Travel Plan"
                url="/"
                btnClass="show"
            />
            <HBottum/>
            <Footer/>
            </div>);
}