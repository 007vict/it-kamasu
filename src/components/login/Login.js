import React from "react";
import {Field, reduxForm} from "redux-form";
import {Input} from "../common/FormsControls/FormsControls";
import {required} from "../../utils/validator/validators";

const LoginForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div><Field type="text" name={'login'}
                  validate={[required]}
                  placeholder={'Login'} component={Input}/></div>
      <div><Field type="text" name={'password'}
                  validate={[required]}
                  placeholder={'Password'} component={Input}/></div>
      <div><Field type={'checkbox'} name={'rememberMe'} component={Input}/>Remember me...</div>
      <div>
        <button>Login</button>
      </div>
    </form>
  )
}

const LoginReduxForm = reduxForm({form: 'login'})(LoginForm)

const Login = (props) => {
  const onSubmit = (formData) => {
    console.log(formData)
  }
  return <div>
    <h1>Login</h1>
    < LoginReduxForm onSubmit={onSubmit} />
  </div>
}

export default Login