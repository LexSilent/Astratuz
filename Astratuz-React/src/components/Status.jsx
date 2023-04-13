import { useState } from 'react';
import './Status.css';
import Servicio from './Servicio'
import { useEffect } from 'react';

import Cookies from 'universal-cookie';

const Status = () => {
    //const [servicios, setServicios] = useState([]);
    const cookies = new Cookies();
    const [servicios, setServicios] = useState([]);
    const [categorias, setCategorias] = useState([]);
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ USER: cookies.get('usuario'), PASSWORD: cookies.get('password') })
    };
    const [textSearch, setTextSearch] = useState();
    
    useEffect(
      ()=>{
        setInterval(() => {
          fetch("http://192.168.100.44:8000/api/services/status", requestOptions).then((responsive)=>{
            return responsive.json();
          }).then((json)=>{
            setServicios(json["DATA"]);
            console.log(json)
          })
        },500)

        setInterval(() => {
          fetch("http://192.168.100.44:8000/api/services/categories", requestOptions).then((responsive)=>{
            return responsive.json();
          }).then((json)=>{
            setCategorias(json["DATA"]);
          })
        },500)
    },[]
    );

   
   
    /*const [serviciosFiltrados, setServiciosFiltrados] = [];

    const filtrar = (dato)=>{
      servicios.map((item) =>{
        if(item['SERVICE']==dato){
          serviciosFiltrados+=item}
        }
        
      )
      }*/
    
   /* const [arreglo, setArreglo] = useState([]);
    const agregarArreglo = numero => {
      const arregloActualizados = [numero, ...arreglo];
      setArreglo(arregloActualizados);
      
    }
    const [status, setStatus] = useState(false);
    useEffect(()=>{
      if(!status){
        for(let i=0;i<10;i++){
          agregarArreglo({ 
            key:"servicio.id",
            id:"servicio.id",
            texto:i,
            completada:"servicio.completada"
          });
          console.log(i);
          
        }
        setStatus(true);
      }
      
        arreglo.map((item)=>{
          console.log(item); 
        }
        

        )
        
    },[]);
    const agregarServicio = servicio => {
        if (servicio.texto.trim()) {
          servicio.texto = servicio.texto.trim();
          const serviciosActualizados = [servicio, ...servicios];
          setServicios(serviciosActualizados);
        }
        //<ServicioFormulario onSubmit={agregarServicio} />
    }
    */

    return (
        <div className='Status'>
            <div className='Busqueda'>     
              
              <input type="text" id='search' name="search" placeholder="Search any" onChange={(e)=>{
                setTextSearch(e.target.value);
              }}></input> 
                <button className = 'ButtonSearch'>Services</button>
                <button className = 'ButtonSearch'>Categories</button>

            </div>
            <div className='ContentAsides'>
                <aside className='StatusOfServices'>
                  <h2>Services</h2>
                  {
                   servicios.map((item) =>{
                    return <Servicio texto={item['SERVICE']} status={item['STATUS']}   />}
                  )
                  }
                    
                </aside>
                <aside className='SearchOfServices'>
                  <h2>Categories</h2>
                {
                  categorias.map((item) =>{
                    var yellow = false;
                    var red = false;
                    var s = 0;
            
                    servicios.map((i)=>{
                      
                      if(i["CATEGORY"]==item["ID"]) (i["STATUS"]==1) ? red = true : (i["STATUS"]==2) ? yellow = true : s = 0
                      //if
                        
                    });

                    return <Servicio texto={item['CATEGORY']} status={(red) ? 1: (yellow) ? 2:3} />
                  })
                }
                </aside>
            </div>
        </div>
        
    )

    
}

export default Status