export default {
  namespace: 'App',
  state: {
    isLogin: false,
    userForm: {
      username: "",
      password: "",
      isRemember: false
    }
  },
  reducers: {
    login(state, action){
      return {
        ...state,
        ...action.payload,
        isLogin: true,
      }
    }
  },
  effects: {},
  subscriptions: {},
}
