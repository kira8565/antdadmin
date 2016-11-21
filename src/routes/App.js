import React from 'react';
import {connect} from 'dva';
import styles from './App.css';
import Login from '../components/Login'
function App({location, dispatch, App}) {
  const {isLogin, userForm}=App
  debugger;
  const LoginProps={
    isLogin,
    userForm,
    onLogin(data){
      dispatch({
        type: `App/login`,
        payload: data,
      })
    }
  }
  if (isLogin) {
    return (
      <div className={styles.normal}>
        Route Component: 'App'
      </div>
    );
  } else {
    return (
      <Login {...LoginProps}/>
    );
  }

}

function mapStateToProps({App}) {
  return {App};
}

export default connect(mapStateToProps)(App);
