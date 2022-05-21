import React from 'react'
import CreateAccount from '../../components/CreateAccount'

const Login = () => {
  
  return (
      <div className='login'>
        <div className='login__flex login__left--side'>
            <div className='login__flex--inside'>
                  <img src="images/login.webp" className='login__img' alt="login left side" />
                  <h3 className='login__left--title'>Choose a date range</h3>
                  <h5 className='login__left--subtitle'>Sanctus duo sit accusam tempor sadipscing, sed magna diam sadipscing ea.</h5>
            </div>
        </div>
      <div className=' login__right--side'>
          <div className = "login__right--inside" >
            <CreateAccount />
          </div>
        </div>
      </div>
  )
}

export default Login