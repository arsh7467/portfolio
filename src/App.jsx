import { Routes,Route,BrowserRouter } from 'react-router-dom';
import Header from './Header'

import Footer from './Footer';
import About from './About';
import Portfolio from "./Portfolio";
import Contact from './Contact';
import Privacy from './Policy';
import Terms from './Terms';
import Projects from './Projects';
import Login from './Login';
import Signup from './Signup';


function App(){
  return(
    
    <div>
      <BrowserRouter>
      <Header/>
      <Routes>
        <Route path='/' element={<Portfolio/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/policy' element={<Privacy/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/terms' element={<Terms/>}/>
        <Route path='/my-projects' element={<Projects/>}/>
        <Route path='/Login' element={<Login/>}/>
        <Route path='/Signup' element={<Signup/>}/>
        
      </Routes>
      <Footer/>

    
      
      
      </BrowserRouter>
    </div>
  )
}
export default App;