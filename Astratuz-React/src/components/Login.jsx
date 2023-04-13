import { useState } from 'react';
import './Login.css';
import logo from '../assets/logo.png'
import Cookies from 'universal-cookie';

const Login = () => {
    const cookies = new Cookies();
    const [user, setUser] = useState(0);
    const [pass, setPass] = useState(0);
    const [statusLogin, setStatusLogin] = useState("Offline");

    const mandarDatos = ()=> {
        fetch("http://192.168.100.44:8000/api/users/authenticate",requestOptions).then((responsive)=>{
          return responsive.json();
        }).then((json)=>{
          setStatusLogin(json["DATA"]?"Access":"Denied");

          cookies.set('usuario', pass, {path: '/'});
          cookies.set('password', user, {path: '/'});
          cookies.set('phone', "+52 633 111 0099", {path: '/'});
        })
      };
      const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ USER: user, PASSWORD:pass })
      };
    
    return (
        <div className='Login'>
            
            <ul className='Login-ul'>
                <li><img src={logo} id="logo" alt="Astratus" /></li>
                <li className='Login-li'><input className='Login-input' type="text" placeholder='User' onChange={(e)=>setUser(e.target.value)}/></li>
                <li className='Login-li'><input className='Login-input' type="password" placeholder='Password' onChange={(e)=>setPass(e.target.value)}/></li>
                <li className='Login-li'><button className='Login-button' onClick={()=>mandarDatos()}>Log in</button></li>
                <li><h3>{statusLogin}</h3></li>
                <li className='Login-li'><a id='register' href="#">Register with code</a></li>
            </ul>
            
        </div>
    )
}

export default Login