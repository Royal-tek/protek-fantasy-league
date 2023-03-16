import { createStore } from 'vuex'
import axios from 'axios'



export default createStore({
  state: {
    user : null,
    token : '',
    loading : false,
    errorMsg : '',
    error : false,
    disabled : false 
  },
  mutations: {
    setToken(state, payload){
      
      localStorage.setItem('token', payload.data.token)
      setTimeout(()=>{
        state.disabled = false
        state.loading = false
    },2000)
    },

    setError(state, payload){
      state.error = true
      state.errorMsg = payload.response.data.error
      setTimeout(()=>{
        state.error = false
        state.errorMsg = ''
        state.disabled = false
        state.loading = false
    },2000)
    }

  },
  actions: {
    async userLogin(context, userCredentials){
      try {
        const response = await axios.post('http://localhost:8000/api/auth/login', {
          email : userCredentials.email,
          password : userCredentials.password
        })

        context.commit('setToken', response)
        
        window.location = '/'
       
        
      } catch (error) {
        context.commit('setError', error)
        
      }
    }
  },
  modules: {
  }
})
