 import React from 'react';
import './App.css'
import HeroSection from "./Components/HeroSection"
import Destinations from './Components/Destinations'
import Whychoose from './Components/Whychooseus'
import Testimonials from './Components/Testimonials'
import Footer from './Components/Footer'


function App (){
  return(
   <>
<div className='App'>
<HeroSection/>
<Destinations/>
 <Whychoose/> 
<Testimonials/>
<Footer/> 
</div>
   </>
  );
};
export default App