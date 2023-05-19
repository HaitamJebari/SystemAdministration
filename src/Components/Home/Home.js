import './Home.css';
import { Link } from 'react-router-dom';
import g from "../img/g.jpg"
import admin from "../img/download.jpg"
import back from "../img/Background.jpg" 

export default function Home() {
  return (
    <>
    
<div className='all'>   
<img src={back} alt="" className='backimage' />
    <Link to='/Loginadmin' >
    <div class="container">

        

    <div class="card">

        <div class="slide slide1">

            <div class="content">

                <div class="icon">
                    <img src={admin} alt="" className='img' />
                    {/* <i class="fa fa-user-circle" aria-hidden="true"></i> */}

                </div>

            </div>

        </div>

        <div class="slide slide2">

            <div class="content">

                <h3>

                    Espace Admin

                </h3>

            </div>

        </div>

    </div>
    </div>
    </Link>






    <Link to='/Loginprof' >
        <div class="container">

       

            <div class="card">

                <div class="slide slide1">

                    <div class="content">

                        <div class="icon">

                            <img src={g} alt="" className='img' />
                            {/* <i class="fa fa-user-circle" aria-hidden="true"></i> */}

                        </div>

                    </div>

                </div>

                <div class="slide slide2">

                    <div class="content">

                        <h3>

                            Espace Professeurs

                        </h3>

                    </div>

                </div>

            </div>
        </div>
    </Link>
</div>
</>
  )
}
