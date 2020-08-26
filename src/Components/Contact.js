import React from 'react'
import styled from 'styled-components'
import NavBar from './NavBar'

import { SMALL } from '../ScreenSizes'

const Rect = styled.div`
    width: 40vw;
    height: 100vh;
    display: flex;
    margin-top: 10rem;
    background-image: linear-gradient(to top, #2E151B, #8650FF);
    justify-content: center;
    @media (max-width: ${SMALL}px) {
        width: 105vw;
        height: 50vh;
        transform: rotate(-10deg) skew(-10deg);
    }
`

const Content = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    @media (max-width: ${SMALL}px) {
        transform: skew(10deg) rotate(10deg);
    }
`

const Center = styled.div`
    width: 100vw;
    height: 50vh;
    display: flex;
    justify-content: center;
    align-items: center;
`

const Button = styled.div`
    width: 4rem;
    height: 4rem;
    // border-radius: 50%;
    padding: 2rem 4rem 2rem 4rem;
    font-size: 1.4rem;
    background-image: ${props => `linear-gradient(45deg, ${props.color.from} 0%, ${props.color.to} 100%)`};
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: box-shadow .5s, transform .5s;
    &:hover {
        transform: scale(1.1);
        box-shadow: 0 3px 6px rgba(0,0,0,.16);
    }
`

const openLink = (url) => () => {
    if(url.charAt(0) !== "h"){
        window.location = `mailto:${url}`;
    }else{
        window.open(url, '_blank');
    }
}

const Contact = (props) => {
  return (
      <div>
        <NavBar index="3"/>
        <Center>
            <Rect>
                <Content>
                    <fieldset id="contact" className="ba b--transparent ph0 mh0">
                    <div className="mt6">
                    <label className="db fw6 lh-copy f6" htmlFor="name">Name *</label>
                    <input className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-80" 
                    type="text"
                    name="name"
                    id="name"
                    // onChange = { e => setName(e.target.value) }
                    />
                    </div>
                    <div className="mt3">
                    <label className="db fw6 lh-copy f6" htmlFor="email-address">Your Email *</label>
                    <input className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-80" 
                    type="email" 
                    name="email-address"  
                    id="email-address"
                    // onChange = { e => setEmail(e.target.value) }
                    />
                    </div>
                    <div className="mv3">
                    <label className="db fw6 lh-copy f6" htmlFor="text">Your Message *</label>
                    <textarea className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-80" rows={4}
                    type="text" 
                    name="text"  
                    id="text"
                    // onChange = { e => setmessage(e.target.value) } 
                    />
                    </div>
                    {/* {(name < 1 || email < 1 || message < 1) ? <div className='lh-copy mt3'>* is required</div> 
                    :
                    <div className="lh-copy mt3">
                        <p 
                        // onClick={() => onSubmitClick()} 
                        className="b ph3 pv2 ba b--black bg-transparent pointer f6 dib">Send</p>
                    </div>
                    } */}
                    <Button color={{from: "#2E151B", to: "#8650FF"}}>Send</Button>
                    
                </fieldset>
                </Content>
            </Rect>
        </Center>
      </div>
  )
}

export default Contact
