import React from "react";
import "@coreui/coreui/dist/css/coreui.min.css";
import {
  CCard,
  CCardBody,
  CCardHeader,
  CCardSubtitle,
  CCardText,
  CCardTitle,
  CCardLink,
  CContainer,
  CRow,
  CCol,
  CAvatar,
} from "@coreui/react";
const ServiceDescription = () => {
  return (
    <>
      <div className="d-flex justify-content-center">
        <CCard className="m-4" style={{ width: "50rem" }}>
          <CCardBody>
            <CCardTitle className="h2">
              <CAvatar color="danger" textColor="white"></CAvatar> Servicio Web de AstraZeneca{" "}
            </CCardTitle>

            <CCardSubtitle className="mb-2 text-medium-emphasis d-flex justify-content-center">
              <p className="m-2">Category: WEB</p>
              <CCardLink className="m-2" href="#">
                Link-Service
              </CCardLink>
              <p className="m-2">History</p>
            </CCardSubtitle>
            <CContainer>
              <CRow className="d-flex justify-content-center">
                <CCol sm={5}>
                  <h4>Watch map</h4>
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14933.88545565546!2d-103.38743865!3d20.6503936!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8428addaf761b92d%3A0x2f0e04ac2a4f3e36!2sExpo%20Guadalajara!5e0!3m2!1ses!2smx!4v1681358592150!5m2!1ses!2smx"
                    style={{ border: 0, height: 300, width: 300 }}
                    allowfullscreen=""
                    loading="lazy"
                    referrerpolicy="no-referrer-when-downgrade"
                  ></iframe>
                </CCol>
                <CCol
                  sm={5}
                  className="overflow-scroll"
                  style={{ height: 350 }}
                >
                  <CCard className="mb-2">
                    <CCardBody className="d-flex flex-column justify-content-between">
                      <CCardText>Date: 13/04/2023</CCardText>
                      <CCardText>Status: SERVICE OUTAGE</CCardText>
                      <CCardText>Description: Users unable to access to internet</CCardText>
                    </CCardBody>
                  </CCard>
                  <CCard>
                    <CCardBody className="d-flex flex-column justify-content-between">
                      <CCardText>Date: 13/04/2023</CCardText>
                      <CCardText>Status: SERVICE OUTAGE</CCardText>
                      <CCardText>Description: WEB Service is loading slow</CCardText>
                    </CCardBody>
                  </CCard>
                </CCol>
              </CRow>
            </CContainer>
          </CCardBody>
        </CCard>
      </div>
    </>
  );
};

export default ServiceDescription;
