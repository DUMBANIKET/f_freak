import React from 'react'
import styled from 'styled-components'
import '../components/styles/utils.css'
import Form from './utils/Form'

const Con=styled.div`
height: 100vh;
color: #000;
background-color: #000;
scroll-snap-align: center;
`

const ContactFormBox=styled.div`

display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
width: 70vw;
height: 90vh;
border-radius: 10px;
background-color: rgba(255,255,255,0.05);

margin-bottom: 40px;
`



export const Contact = () => {
  return (
    <>
    <Con>contact
   <center>
   {/* <ContactFormBox>
    <form className='form'>
        <input type="text" placeholder="Name" />
        <br></br>  <br></br>
        <input type="email" placeholder="Email" />
        <br></br>  <br></br>
        <input type='number' placeholder='Phone Number'/>
        <br></br>  <br></br>
        <textarea placeholder="Message"></textarea>
        <br></br>  <br></br>
        <button type='submit'><b>Submit</b></button>
    </form>
</ContactFormBox> */}
<Form/>
</center></Con>
    </>
  )
}
