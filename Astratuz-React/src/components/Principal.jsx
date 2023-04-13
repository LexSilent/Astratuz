import React from "react";
import "./Principal.css";
import "@coreui/coreui/dist/css/coreui.min.css";
import {
  CContainer,
  CRow,
  CCol,
  CTable,
  CTableBody,
  CTableHead,
  CTableHeaderCell,
  CTableDataCell,
  CTableRow,
  CButton,
  CButtonGroup,
  CWidgetStatsB,
  CAvatar,
  CCard,
  CCardBody,
  CFormInput,
} from "@coreui/react";
import { CChart } from "@coreui/react-chartjs";
import { Link } from "react-router-dom";
import Cookies from 'universal-cookie';

import { useState,useEffect } from 'react';


const Principal = () => {
  const cookies = new Cookies();
  const [verdes, setVerdes] = useState(2);
  const [rojos, setRojos] = useState(1);
  const [ambar, setAmbar] = useState(1);

  const [servicios, setServicios] = useState([]);
  const [categorias, setCategorias] = useState([]);

  const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ USER: cookies.get('usuario'), PASSWORD: cookies.get('password') })
  };

  /*useEffect(
    ()=>{
      setInterval(() => {
        fetch("http://192.168.100.44:8000/api/services/status", requestOptions).then((responsive)=>{
          return responsive.json();
        }).then((json)=>{
          setServicios(json["DATA"]);
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
  );*/
  (function loop(){
    setTimeout(function(){
      setAmbar(Math.round(Math.random()*(3 - 1) + 1));
      setRojos(Math.round(Math.random()*(3 - 1) + 1));
      setVerdes(Math.round(Math.random()*(3 - 1) + 1));
      loop()
    }, 2000);
  })();


  
  


  return (
    <>
      <CContainer className="mt-4">
        <CRow>
          <CCol
            sm={4}
            className="overflow-auto d-flex flex-column justify-content-center"
          >
            <h2 className="h4">Status In Real Time</h2>
            <CChart
              type="doughnut"
              className=""
              data={{
                labels: ["Green", "Red", "Ambar"],
                datasets: [
                  {
                    backgroundColor: ["#41B883", "#E46651", "#FFBF00"],
                    data: [verdes, rojos, ambar],
                  },
                ],
              }}
            />
            <CButtonGroup
              className="mt-2"
              role="group"
              aria-label="Basic mixed styles example"
            >
              <h2 className="h4">Number of services:</h2>
              <CButton color="danger">
                <Link to="/red">Red: {rojos}</Link>{" "}
              </CButton>
              <CButton color="warning">
                <Link to="/yellow">Ambar: {ambar}</Link>
              </CButton>
              <CButton color="success">
                <Link to="/green">Green:{verdes}</Link>
              </CButton>
            </CButtonGroup>
          </CCol>
          <CCol sm={4}>
            <h2 className="h4">Priority problems</h2>

            <CTable>
              <CTableHead>
                <CTableRow>
                  <CTableHeaderCell scope="col">Priority</CTableHeaderCell>
                  <CTableHeaderCell scope="col">
                    Number of services
                  </CTableHeaderCell>
                </CTableRow>
              </CTableHead>
              <CTableBody>
                <CTableRow>
                  <CTableHeaderCell scope="row">
                    <CAvatar color="danger" textColor="white">
                      P1
                    </CAvatar>
                  </CTableHeaderCell>
                  <CTableDataCell>15</CTableDataCell>
                </CTableRow>
                <CTableRow>
                  <CTableHeaderCell scope="row">
                    <CAvatar color="danger" textColor="white">
                      P2
                    </CAvatar>
                  </CTableHeaderCell>
                  <CTableDataCell>5</CTableDataCell>
                </CTableRow>
                <CTableRow>
                  <CTableHeaderCell scope="row">
                    <CAvatar color="danger" textColor="white">
                      P3
                    </CAvatar>
                  </CTableHeaderCell>
                  <CTableDataCell>7</CTableDataCell>
                </CTableRow>
              </CTableBody>
            </CTable>

            <h2 className="h4">Current problems</h2>
            <div className="overflow-scroll" style={{ height: 200 }}>
              <CTable>
                <CTableHead>
                  <CTableRow>
                    <CTableHeaderCell scope="col">Status</CTableHeaderCell>
                    <CTableHeaderCell scope="col">Name</CTableHeaderCell>
                    <CTableHeaderCell scope="col">
                      Business Service
                    </CTableHeaderCell>
                  </CTableRow>
                </CTableHead>
                <CTableBody>
                  <CTableRow>
                    <CTableHeaderCell scope="row">
                      <CAvatar color="danger" textColor="white"></CAvatar>
                    </CTableHeaderCell>
                    <CTableDataCell>Servicio Web de AstraZeneca</CTableDataCell>
                    <CTableDataCell>50% of incidence</CTableDataCell>
                  </CTableRow>
                  <CTableRow>
                    <CTableHeaderCell scope="row">
                      <CAvatar color="danger" textColor="white"></CAvatar>
                    </CTableHeaderCell>
                    <CTableDataCell>Dev Critical Service 3</CTableDataCell>
                    <CTableDataCell>15% of incidence</CTableDataCell>
                  </CTableRow>
                  <CTableRow>
                    <CTableHeaderCell scope="row">
                      <CAvatar color="danger" textColor="white"></CAvatar>
                    </CTableHeaderCell>
                    <CTableDataCell>HR Critiial Service 1</CTableDataCell>
                    <CTableDataCell>10% of incidence</CTableDataCell>
                  </CTableRow>
                  <CTableRow>
                    <CTableHeaderCell scope="row">
                      <CAvatar color="danger" textColor="white"></CAvatar>
                    </CTableHeaderCell>
                    <CTableDataCell>Finance Critical Service 5 </CTableDataCell>
                    <CTableDataCell>10% of incidence</CTableDataCell>
                  </CTableRow>
                </CTableBody>
              </CTable>
            </div>
          </CCol>
          <CCol sm={4} className="overflow-auto">
            <CCard
              className="w-100 d-flex justify-content-center mb-2"
              style={{ width: "18rem" }}
            >
              <CCardBody>
                <h2>Search service</h2>
                <CFormInput
                  className="w-100"
                  type="text"
                  size="sm"
                  placeholder="Servicio o Area"
                  aria-label="sm input example"
                />
                <CButton className="mt-4 m-2" color="warning">
                  Service
                </CButton>

                <CButton className="mt-4 m-2" color="warning">
                  Area
                </CButton>
              </CCardBody>
            </CCard>
            <CWidgetStatsB
              className="mb-3"
              progress={{ color: "danger", value: 50 }}
              title="Servicio Web de AstraZeneca"
              value="50%"
              text="Percentage of Services in failure"
            />
          </CCol>
        </CRow>
      </CContainer>
    </>
  );
};

export default Principal;
