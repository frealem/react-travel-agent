import { Navbar } from "../navbar";
import { Front } from "../front";
import { ContactMessage } from "./formContact";
import { Footer } from "./footer";

export const Contact=()=>{
    return(<div>
        <Navbar/>
        <Front 
                cName="frontHome"
                image='https://cf.bstatic.com/xdata/images/hotel/max1024x768/202496109.jpg?k=96fb1006d8bcb9d0e9146c18b955a26f030b88c8a488eb7a955b8e1f6d3ea6ac&o=&hp=1'
                title="CONTACT US"
                text={<ContactMessage />}
            />
            <Footer/>

            </div>);
}