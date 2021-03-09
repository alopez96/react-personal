import React, { useState } from 'react'
import { Icon } from 'semantic-ui-react'


function Auth({ password, setPassword, handlePassword, errorText }){

    return(
        <div className='pa4'>
            <main className="pa4 black-80">
            <form className="measure" onSubmit={ (e)=> e.preventDefault() }>
            <legend className="f4 fw6 ph0 mh0">Arturo Lopez Portfolio</legend>
            <div className="mv3">
                <label className="db fw6 lh-copy f6" for="password">
                    Enter Password
                </label>
                
                <input className="b pa2 input-reset ba bg-transparent hover-bg-black w-100"
                type="password" name="password"  id="password"
                onChange={(e)=>{ setPassword(e.target.value) }}
                value={password}
                />
                
                <Icon className='pt4' disabled name='arrow right' size='big'
                onClick={ ()=>{handlePassword(password)}  }/>

            </div>
            </form>
            </main>

            <p className='pa4 fw6 f6 red'>{errorText}</p>
        </div>
    )
}

export default Auth;