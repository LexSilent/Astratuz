import { useState } from 'react';
import './Cabecera.css';
import{Link} from 'react-router-dom';

function Cabecera(props) {

    const [ menu , setMenu ] = useState( false )
    const [ screen , setScreen ] = useState( props.screen )
    
    const toggleMenu = () => {
        setMenu( !menu )
    }

    return (
    <header className="Cabecera">
        <h1>
            <Link to="/principal" className = "Cabecera-a">Astratuz</Link>             
        </h1>

        <button 
            onClick={ toggleMenu }
            className="Cabecera-button">
            <svg className='Cabecera-svg' xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
            </svg>
        </button>

        <nav className={ `Cabecera-nav ${ menu ? 'isActive' : '' }` }>
            <ul className="Cabecera-ul">
            <li className="Cabecera-li"><button className='Btnheader' onClick={()=>setScreen("principal")}><Link  to="/principal" className={`Cabecera-a ${(screen == "principal") ? "textYellow" : ""}`}>Principal</Link></button></li>
                    <li className="Cabecera-li"><button className='Btnheader' onClick={()=>setScreen("status")}><Link  to="/status" className= {`Cabecera-a ${(screen == "status") ? "textYellow" : ""}`}>Status</Link></button></li>
                    

                    <li className="Cabecera-li">
                        <Link to="/profile" className="Cabecera-a">
                            <button className='Btnheader' onClick={()=>setScreen("profile")}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-person" viewBox="0 0 16 16">
                                    <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4Zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10Z"/>
                                </svg>   
                            </button>
                            
                        </Link>     
                    </li> 
  
            </ul>
        </nav>

    </header>
    )
}

export default Cabecera