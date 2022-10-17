import Headers from './Components/Header'
import Nav from './Components/Nav'
import About from './Components/About'
import Services from './Components/Services'
import Expieriance from './Components/Expieriance'
import Testimony from './Components/Testimony'
import Footer from './Components/Footer'
import Contacts from './Components/Contacts'
import Portfolio from './Components/Portfolio'
import { useEffect } from 'react'
import { GetMyDetails } from './Collections/header'
import {useContext} from 'react'
import {MY_CONTEXT} from './Context'
function App() {
  const {state,GetDetails}=useContext(MY_CONTEXT)
  console.log(state);
  useEffect(()=>{
GetMyDetails(GetDetails)
  },[])
  return (
    <>
    <Headers/>
    <Nav/>
    <About/>
    <Expieriance/>
    <Services/>
    <Portfolio/>
    <Testimony/>
    <Contacts/>
    <Footer/>
    </>
  );
}

export default App;
