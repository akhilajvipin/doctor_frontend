import React from 'react'
import {
  MDBFooter,
  MDBContainer,
  MDBIcon,
  MDBInput,
  MDBCol,
  MDBRow,
  MDBRipple
} from 'mdb-react-ui-kit';

function Footer() {
  return (
    <div className='mt-5'>
     <MDBFooter className='text-center text-white' style={{ backgroundColor: '#caced1' }}>
      <MDBContainer className='p-2'>
        <section className=''>
          <MDBRow>
            <MDBCol lg='2' md='12' className='mb-2 mb-md-0'>
              <MDBRipple
                rippleColor='light'
                className='bg-image hover-overlay shadow-1-strong rounded'style={{width:'200px',height:'115px'}}>
                <img  src='https://i0.wp.com/stanzaliving.wpcomstaging.com/wp-content/uploads/2023/01/Top-hospitals-in-Jaipur.jpg?fit=1000%2C571&ssl=1' className='w-100' />
                <a href='#!'>
                  <div
                    className='mask'
                    style={{ backgroundColor: 'rgba(251, 251, 251, 0.2)',  width:'200px'}}
                  ></div>
                </a>
              </MDBRipple>
            </MDBCol>
            <MDBCol lg='2' md='12' className='mb-4 mb-md-0'>
              <MDBRipple
                rippleColor='light'
                className='bg-image hover-overlay shadow-1-strong rounded'style={{width:'200px',height:'115px'}}
              >
                <img src='https://www.adotrip.com/public/images/medical/master_images/64d0ab1d96a20-hospitals%20in%20maharashtra.jpg' className='w-100' />
                <a href='#!'>
                  <div
                    className='mask'
                    style={{ backgroundColor: 'rgba(251, 251, 251, 0.2)', width:'200px',height:'125px' }}
                  ></div>
                </a>
              </MDBRipple>
            </MDBCol>
            <MDBCol lg='2' md='12' className='mb-4 mb-md-0'>
              <MDBRipple
                rippleColor='light'
                className='bg-image hover-overlay shadow-1-strong rounded'style={{width:'200px',height:'115px'}}
              >
                <img src='https://img.etimg.com/thumb/width-1600,height-900,imgsize-34384,resizemode-75,msid-100124282/news/india/india-builds-more-hospitals-as-population-surges-but-doctors-in-short-supply.jpg' className='w-100' />
                <a href='#!'>
                  <div
                    className='mask'
                    style={{ backgroundColor: 'rgba(251, 251, 251, 0.2)', width:'200px' }}
                  ></div>
                </a>
              </MDBRipple>
            </MDBCol>
            <MDBCol lg='2' md='12' className='mb-4 mb-md-0'>
              <MDBRipple
                rippleColor='light'
                className='bg-image hover-overlay shadow-1-strong rounded'style={{width:'200px',height:'115px'}}
              >
                <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSS2Caid1EvxeOUP2spCAZQIy9elge8JD0klg&usqp=CAU' className='w-100' />
                <a href='#!'>
                  <div
                    className='mask'
                    style={{ backgroundColor: 'rgba(251, 251, 251, 0.2)', width:'200px' }}
                  ></div>
                </a>
              </MDBRipple>
            </MDBCol>
            <MDBCol lg='2' md='12' className='mb-4 mb-md-0'>
              <MDBRipple
                rippleColor='light'
                className='bg-image hover-overlay shadow-1-strong rounded'style={{width:'200px',height:'115px'}}
              >
                <img src='https://cdn.downtoearth.org.in/library/large/2020-07-23/0.74392500_1595516587_hospital.jpg' className='w-100' />
                <a href='#!'>
                  <div
                    className='mask'
                    style={{ backgroundColor: 'rgba(251, 251, 251, 0.2)', width:'200px' }}
                  ></div>
                </a>
              </MDBRipple>
            </MDBCol>
            <MDBCol lg='2' md='12' className='mb-4 mb-md-0'>
              <MDBRipple
                rippleColor='light'
                className='bg-image hover-overlay shadow-1-strong rounded'style={{width:'200px',height:'115px'}}
              >
                <img src='https://aihms.in/blog/wp-content/uploads/2020/04/healthcare2.jpg' className='w-100' />
                <a href='#!'>
                  <div
                    className='mask'
                    style={{ backgroundColor: 'rgba(251, 251, 251, 0.2)' }}
                  ></div>
                </a>
              </MDBRipple>
            </MDBCol>
          </MDBRow>
        </section>
      </MDBContainer>

      <div className='text-center p-3 text-dark' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
        © 2020 Copyright:
        <a className='text-dark' >
          medicare.com
        </a>
      </div>
    </MDBFooter>
      </div>
  )
}

export default Footer