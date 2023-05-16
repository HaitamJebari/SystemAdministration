import './Home.css';
import { Link } from 'react-router-dom';


export default function Home() {
  return (
    <>
        
 <div className='all'>   
 <Link to='/Loginadmin' >
        <div class="container">

       

<div class="card">

    <div class="slide slide1">

        <div class="content">

            <div class="icon">

                <i class="fa fa-user-circle" aria-hidden="true"></i>

            </div>

        </div>

    </div>

    <div class="slide slide2">

        <div class="content">

            <h3>

                Hello there!

            </h3>

            <p>Trust yourself and keep going.</p>

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

                            <i class="fa fa-user-circle" aria-hidden="true"></i>

                        </div>

                    </div>

                </div>

                <div class="slide slide2">

                    <div class="content">

                        <h3>

                            Hello there!

                        </h3>

                        <p>Trust yourself and keep going.</p>

                    </div>

                </div>

            </div>
        </div>
    </Link>
</div>
</>
  )
}
