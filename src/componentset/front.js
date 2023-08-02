import './front.css';
import { Link } from 'react-router-dom';
export const Front=(props)=>{
    return(
        <div className={props.cName}>
            <img alt='img1' src={props.image}/>
        <div className="text-part">
            <h1>{props.title}</h1>
            <p>{props.text}</p>
            <Link to={props.url} className={props.btnClass}>{props.btnText}</Link>
        </div>
        </div>
    )
}