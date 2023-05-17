import { Link } from "react-router-dom";


function SidebarProf() {
  return (
    <>
    <div className="sidebar">
            <header><Link></Link></header>
                <ul>
                  <li className="linkRoute">
                    <Link to='/prof/notes'>
                       Gestion des notes
                    </Link>
                  </li >
                  <li className="linkRoute">
                    <Link to='/prof/eleve'>
                       Gestion des éleve
                    </Link>
                </li>
                </ul>
          </div> 
    </>
  );
}

export default SidebarProf;
