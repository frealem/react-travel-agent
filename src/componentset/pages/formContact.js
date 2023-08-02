import React ,{useState} from 'react';
import './formContact.css'
export const ContactMessage=(props)=>{
    const [email,setemail]=useState('');
    const [phone,setphone]=useState('');
    const [message,setmessage]=useState('');
    
    const whenSubmit=(e)=>{
      e.preventDefault();
      alert('1 sent message');  //not to loss our state when reload
    }

    return(<div className='form-container'>
        <form onSubmit={whenSubmit} className='login'>
        
            <input value={email}  onChange={(e)=>setemail(e.target.value)} type="email" id="email" placeholder="email..."/>
            <input value={phone}  onChange={(e)=>setphone(e.target.value)} type="phone" id="phone" placeholder="phonenumber..."/>
            <textarea value={message}  className="textArea" onChange={(e)=>setmessage(e.target.value)} type="phone" id="phone" placeholder="typing message..."/>
  <button className='lbtn' type="submit">SEND</button>
  
        </form>
        </div>
    );
    
}