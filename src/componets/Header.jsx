import React from 'react'
import {
    MDBContainer,
    MDBNavbar,
    MDBNavbarBrand
  } from 'mdb-react-ui-kit';

function Header() {
  return (
    <div> <MDBNavbar style={{backgroundColor:'lightblue'}}>
    <MDBContainer>
      <MDBNavbarBrand href='#'>
        <img src='https://cdn.vectorstock.com/i/preview-1x/81/44/female-doctor-vector-11188144.jpg'height='50'
          loading='lazy'/>
        <img style={{height:'80px'}} src="https://logos-world.net/wp-content/uploads/2021/02/Medicare-Logo.png" alt="" />
      </MDBNavbarBrand>
    </MDBContainer>
  </MDBNavbar></div>
  )
}

export default Header