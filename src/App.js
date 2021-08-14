import './App.css';
import React from "react";
import {compose} from "redux";
import {connect, Provider} from "react-redux";
import {BrowserRouter, Route, withRouter, Switch, Redirect} from 'react-router-dom';
import Navbar from "./components/Navbar/Navbar";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import UsersContainer from "./components/Users/UsersContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import LoginPage from "./components/Login/Login";
import {initializeApp} from "./redux/app-reducer";
import Preloader from "./components/common/Preloader/Preloader";
import store from "./redux/redux-store";
import {withSuspense} from "./components/hoc/withSuspense";

const DialogsContainer = React.lazy(() => import("./components/Dialogs/DialogsContainer"))
const ProfileContainer = React.lazy(() => import("./components/Profile/ProfileContainer"))


class App extends React.Component {

  componentDidMount() {
    this.props.initializeApp()
  }

  render() {
    if (!this.props.initialized) {
      return <Preloader/>
    }

    return (
      <div className='app-wrapper'>
        <HeaderContainer/>
        <Navbar/>
        <div className='app-wrapper-content'>
          <Switch>
            <Route exact path='/'
                   render={ () => <Redirect from="/" to="/profile"/> }
            />
            <Route path='/profile/:userID?'
                   render={withSuspense(ProfileContainer)
                   }
            />
            <Route path='/dialogs'
                   render={() => {
                     return <React.Suspense fallback={<Preloader/>}>
                       <DialogsContainer/>
                     </React.Suspense>
                   }}
            />
            <Route path='/users'
                   render={() => <UsersContainer/>}
            />
            <Route path='/login'
                   render={() => <LoginPage/>}
            />
            <Route path='*'
                   render={() => <div>404 NOT FOUND</div>}
            />


            <Route path='/news' render={() => <News/>}/>
            <Route path='/music' render={() => <Music/>}/>
            <Route path='/settings' render={() => <Settings/>}/>
          </Switch>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  initialized: state.app.initialized
})

let AppContainer = compose(withRouter,
  connect(mapStateToProps, {initializeApp}))(App)

let SamuraiJSApp = (props) => {
  return <BrowserRouter>
    <Provider store={store}>
      <AppContainer/>
    </Provider>
  </BrowserRouter>
}

export default SamuraiJSApp

