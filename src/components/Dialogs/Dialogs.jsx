import s from './Dialogs.module.css'
import {NavLink} from "react-router-dom";

const Dialogs = (props) => {
  return (
    <div className={s.dialogs}>
      <div className={ s.dialogsItems}>
        <div className={s.dialog + ' ' + s.active}>
          <NavLink to='/dialogs/1'>Victor</NavLink>
        </div>
        <div className={s.dialog}>
          <NavLink to='/dialogs/2'>Dim</NavLink>
        </div>
        <div className={s.dialog}>
          <NavLink to='/dialogs/3'>Andrey</NavLink>
        </div>
        <div className={s.dialog}>
          <NavLink to='/dialogs/4'>Artur</NavLink>
        </div>
      </div>
      <div className={s.messages}>
        <div className={s.message}>Hello</div>
        <div className={s.message}>How are you?</div>
        <div className={s.message}>Ok!</div>
      </div>
    </div>
  )
}

export default Dialogs