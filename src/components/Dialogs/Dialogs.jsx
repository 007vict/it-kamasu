import s from './Dialogs.module.css'
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
  let path = '/dialogs/' + props.id

  return <div className={s.dialog + ' ' + s.active}>
    <NavLink to={path}>{props.name}</NavLink>
  </div>
}

const Message = (props) => {
  return <div className={s.message}>{props.message}</div>
}

const Dialogs = (props) => {
  return (
    <div className={s.dialogs}>

      <div className={ s.dialogsItems}>

        <DialogItem name='Victor' id='1'/>
        <DialogItem name='Dim' id='2'/>
        <DialogItem name='Andrey' id='3'/>
        <DialogItem name='Artur' id='4'/>
        <DialogItem name='Ivan' id='5'/>
        <DialogItem name='Vasia' id='6'/>
        <DialogItem name='Lena' id='7'/>


      </div>
      <div className={s.messages}>
        <Message message='Hello'/>
        <Message message='How are you?'/>
        <Message message='Ok!'/>
      </div>
    </div>
  )
}

export default Dialogs