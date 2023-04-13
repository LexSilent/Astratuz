import { useState } from 'react';
import './Status.css';
import Servicio from './Servicio'
import ServicioFormulario from './ServicioFormulario';
import { useEffect } from 'react';


const Pruebas = () => {
    //const [servicios, setServicios] = useState([]);
    const [id, setID] = useState(0)
    //const [servicios, setServicios] = useState([]);
   
    /*useEffect(
      ()=>{
        setInterval(() => {
          fetch("http://192.168.137.190:8000/api/services/status", requestOptions).then((responsive)=>{
            return responsive.json();
          }).then((json)=>{
            setServicios(json["DATA"]);
            
          })
        },1000)
      
    },[]);*/
    const servicios = [{
        "ID": "1",
        "SERVICE": "FACEBOOK",
        "STATUS": 1
      }, {
        "ID": "2",
        "SERVICE": "TWITTER",
        "STATUS": -2
    }];

   const [serviciosFiltrados, setServiciosFiltrados] = [];
   const actualizarjson = ()=>{
        serviciosFiltrados.setServiciosFiltrados( JSON.stringify(servicios.filter((item)=>{
            return item["ID"]==id;
    })));
    
}
    
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
        }        )
        
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
                <h1>Services - Example</h1>
                <input type="text" onChange={(e)=>{
                        setID(e.target.value);
                        actualizarjson();
                    }} id='search' name="search" placeholder="Search any">
                </input> 
                
            </div>
            <div className='ContentAsides'>
                <aside className='StatusOfServices'>
                  {
                    servicios.map((item) =>{
                    return <Servicio texto={item['SERVICE']} status={item['STATUS']}   />}
                  )
                  }
                    
                </aside>
                <aside className='SearchOfServices'>
                {
                    
                    serviciosFiltrados.map((item) =>{
                        return <Servicio texto={item['SERVICE']} status={item['STATUS']}   />
                      })
                }
                </aside>
            </div>
        </div>
        
    )

    
}

export default Pruebas