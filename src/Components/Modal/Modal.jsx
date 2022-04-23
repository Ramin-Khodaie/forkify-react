import './Modal.scss'
import Backdrop from '../Backdrop/Backdrop'

const Modal =(props) =>{
    const {show, closeBachdrops} = props
    console.log(show);
    return(
        <>
        <Backdrop showDrop={show} closebackdrop={closeBachdrops}/>
        <div>
            {props.children}
        </div>
        </>
    )
}

export default Modal