import {login} from '../services/App'
import {parse} from 'qs'

export default {
  namespace: 'App',
  state: {
    isLogin: false,
    loginButtonLoading: false,
    userForm: {
      username: "",
      password: "",
      isRemember: false
    }
  },
  reducers: {
    loginSuccess(state, action) {
      return {
        ...state,
        ...action.payload,
        isLogin: true,
        loginButtonLoading: false
      }
    },
    loginFail(state) {
      return {
        ...state,
        login: false,
        loginButtonLoading: false
      }
    },
    showLoginButtonLoading(state) {
      return {
        ...state,
        loginButtonLoading: true
      }
    },
  },
  effects: {
    *login({
      payload
    }, {call, put}){
      yield put({type: 'showLoginButtonLoading'})
      const data = yield call(login, JSON.stringify(payload))
      if (data.success) {
        yield put({
          type: 'loginSuccess', payload: {
            data
          }
        })
      } else {
        yield put({
          type: 'loginFail', payload: {
            data
          }
        })
      }
    }
  },
  subscriptions: {},
}
