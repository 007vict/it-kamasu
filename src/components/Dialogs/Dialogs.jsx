import s from './Dialogs.module.css'

const Dialogs = (props) => {
  return (
    <div className={s.dialogs}>
      <div className={ s.dialogsItems}>
        <div className={s.dialog + ' ' + s.active}>
          Victor
        </div>
        <div className={s.dialog}>
          Dim
        </div>
        <div className={s.dialog}>
          Andrey
        </div>
        <div className={s.dialog}>
          Artur
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