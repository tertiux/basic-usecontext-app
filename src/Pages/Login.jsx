import React from 'react'
import { useContext } from 'react'
import LoginContext from '../Contexts/LoginContext'

function Login() {
    const userContext = useContext(LoginContext)

    const submitForm = (event)=>{
        event.preventDefault()
        const name = event.target[0].value
        const email = event.target[1].value
        const phone = event.target[2].value
        const darkCheck = event.target[3].checked
        let dark

        if (darkCheck){
            dark = 'on'
        } else{
            dark = 'off'
        }

        userContext.login(name, email, phone, dark)
    }
  return (
    <div className='container'>
        {
            userContext.isLoggedIn ?
            
            <h1 style={{color : '#444' }}>You are already logged in ✅</h1>:
            <div className="loggingIn">
              <form onSubmit={submitForm}>
                    <h3>LOGIN</h3>
                  <input required minLength={'5'} maxLength={'10'} type="text" placeholder='UserName' />
                  <input required minLength={'6'} type="email" placeholder='Email' />
                  <input required minLength={'7'} type="tel" placeholder='Phone' />
                  <div>
                  <input id='darkToggle' type="checkbox" placeholder='Phone' />
                  <label htmlFor="darkToggle">Dark Theme (default is false)</label>
                  </div>
                  <button>Login</button>
              </form>
            </div>
        }
    </div>
  )
}

export default Login
