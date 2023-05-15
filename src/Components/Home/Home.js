import './Home.css';
import Back from '../img/Background.jpg'
import logo from '../img/Logo.png'

function Home() {
  return (
    <>
    <div className='navbar'>
       <img className='logo' src={logo}/>   
    </div>
            
            {/* <div> 
            <nav>  
            <img className='logo' src={logo}/>   
            </nav>      
            <img src={Back} className='back'/>
            </div>    */}

    </>
  );
}

export default Home;
