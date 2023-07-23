import React from 'react'
import styled from 'styled-components'
// import { Navbar } from './utils/Navbar'
import Title from './utils/Title'
import Builder from './utils/Builder'

const Section=styled.div`


`

const Circle =styled.div`

overflow: hidden;
position: absolute;
top: 40%;
right: 10%;  
background-image: linear-gradient(to bottom right, #5CF5FF, #ffad06);
border-radius: 50%;
width: 200px;
height: 200px;
filter: blur(90px);

`


const Videoplayer=styled.div`
display: flex;
justify-content: center;
align-items: center;
width: 80vw;
height: 50vh;
border-radius: 10px;
background-color: rgba(255,255,255,0.05);
margin-top: 40px;
margin-bottom: 80px;
`


export const Hero = () => {
  return (
    <>
    <Section>
<Circle/>

    </Section> <center>
      <Builder/>
   <Title/>
   
    <Videoplayer>

</Videoplayer>
    </center>
    
    </>
  )
}
