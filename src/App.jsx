import { Contact } from "./components/Contact"
import { Hero } from "./components/Hero"
import styled from "styled-components"
import Navbar from "./components/utils/Navbar"
import Footer from "./components/utils/Footer"

function App() {

  const Container=styled.div`
  background-color: black;
  color: #fff;
  

 
  overflow-y: auto;
  scrollbar-width: none;&::-webkit-scrollbar{
    display: none;
  }
  `
  return (
   <>
<Container>
  <Navbar/>
<Hero />
<Contact/>
<Footer/>
</Container>
   </>
  )
}

export default App
