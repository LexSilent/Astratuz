import React from 'react'
import '@coreui/coreui/dist/css/coreui.min.css'
import { CCard,
    CCardBody,
    CCardImage,
    CCardTitle,
    CCardText,
    CButton,
    CAvatar,
    CTable,
    CTableBody,
    CTableRow,
    CTableDataCell,
    CTableHeaderCell,
    CTableHead
 } from '@coreui/react'
 import Cookies from 'universal-cookie';



const Profile = () => {
    const cookies = new Cookies();
  return (
    <>
    <h2 className='h2'>User Profile</h2>
    <div className='row'>
        <div className='m-5 col-3'>
            <CCard style={{ width: '18rem',height:'34rem' }}>
                <CCardImage orientation="top" src="https://ionicframework.com/docs/img/demos/avatar.svg" />
                <CCardBody>
                    <CCardTitle className='h4'>User 1</CCardTitle>
                        <CCardText>
                            Development Departament
                        </CCardText>
                        <CButton color="warning" variant="ghost">Close sesion</CButton>
                </CCardBody>
            </CCard>
        </div>
        <div className='m-5 col-6'>
            <CCard className='card-border' style={{ width: '40rem', height:'34rem' }}>
                <CCardBody>
                    <h3 className='h3'>User Information</h3>
                    <CAvatar src="https://ionicframework.com/docs/img/demos/avatar.svg" status="success" />
                <CTable>
                    <CTableBody>
                        <CTableRow>
                        <CTableDataCell>Email: {cookies.get('user')}</CTableDataCell>
                        </CTableRow>
                        <CTableRow>
                        <CTableDataCell>Phone: {cookies.get('phone')}</CTableDataCell>
                        </CTableRow>
                        <CTableRow>
                        <CTableDataCell colSpan={2}>Email</CTableDataCell>
                        </CTableRow>
                    </CTableBody>
                    </CTable>
                </CCardBody>
            </CCard>
        </div>
    </div>
        
    </>
    
  )
}

export default Profile
