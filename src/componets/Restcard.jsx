import React from 'react'
import{
    MDBCard,
    MDBCardBody,
    MDBCardTitle,
    MDBCardText,
    MDBCardImage,
    MDBBtn
  } from 'mdb-react-ui-kit';
import { Link } from 'react-router-dom';

function Restcard({doct}) {
    console.log({doct});
  return (
    <section id="doct">
<div >
    <div className='justify-content-center align-items-center ' style={{height:'300px'}}>    
    <Link to={`view/${doct.id}`}>
        <MDBCard className='cardimg mt-4 justify-content-center align-items-center me-4 ms-4' style={{width:'425px'}}>
    <MDBCardBody>
      <MDBCardTitle className='text-center' style={{color:'#fa206d', fontSize:'20px'}}>{doct.name}</MDBCardTitle>
      <MDBCardText className='text-center'>
        {doct.specialty}
      </MDBCardText>
      <MDBCardText className='text-center'style={{fontSize:'25px'}}>
       ({doct.hospital})
      </MDBCardText>
    </MDBCardBody>
         </MDBCard>
         </Link>

  </div>
  </div>
  </section>
  )
}

export default Restcard