import React, { useState } from 'react'
import { Icon } from 'semantic-ui-react'


function Auth({ handlePassword }){

    const [password, setPassword] = useState('')

    return(
        <div className='pa4'>
            <main className="pa4 black-80">
            <form className="measure center">
            <legend className="f4 fw6 ph0 mh0">Sign In</legend>
            <div className="mv3">
                <label className="db fw6 lh-copy f6" for="password">
                    Password
                </label>
                
                <input className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                type="password" name="password"  id="password"
                onChange={(e)=>{ setPassword(e.target.value) }}
                value={password}
                />
                
                <Icon className='pt4' disabled name='arrow right' size='big'
                onClick={()=>{handlePassword(password)}}/>

            </div>
            </form>
            </main>
        </div>
    )
}

export default Auth;