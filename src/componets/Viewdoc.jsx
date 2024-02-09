
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Col, Row } from 'react-bootstrap';
import { useParams } from 'react-router-dom'
import {
    MDBCard,
    MDBCardHeader,
    MDBCardBody,
    MDBCardTitle,
    MDBCardText,
    MDBIcon
  } from 'mdb-react-ui-kit';

function Viewdoc() {
    const [docDetails, setdocDetails] = useState({});
    const { id } = useParams();

    const base_url = 'http://localhost:3001/doctors';

    const fetchDoc = async () => {
        try {
            const result = await axios.get(`${base_url}/${id}`);
            setdocDetails(result.data);
        } catch (error) {
            console.error('Error fetching doctor details:', error);
        }
    }

    useEffect(() => {
        fetchDoc();
    }, []);

    const renderStars = (rating) => {
      const stars = [];
      for (let i = 1; i <= 5; i++) {
          if (i <= rating) {
              stars.push(<MDBIcon key={i} fas icon='star' />);
          } else {
              stars.push(<MDBIcon key={i} far icon='star' />);
          }
      }
      return stars;
  }
    return (
        <div>
            <Row>
                <Col>
                    <img className='w-75 ms-5 mt-5' src={docDetails.image} alt="img" />
                </Col>
                <Col className='mt-5 me-5' style={{backgroundColor:'#e8d7d5'}}>
                    <MDBCard alignment='center'>
                        <MDBCardHeader style={{fontSize:'30px', color:'#fa206d'}}><i class="fa-solid fa-stethoscope"></i>
                          {docDetails.name}</MDBCardHeader>
                        <MDBCardBody>
                            <MDBCardTitle>({docDetails.specialty})</MDBCardTitle>
                            <MDBCardText>{docDetails.hospital}</MDBCardText>
                            <MDBCardText>{docDetails.address}</MDBCardText>
                            <MDBCardText>{docDetails.email}</MDBCardText>

                            <MDBCardText>{docDetails.phone}</MDBCardText>
                            <MDBCardText>Avaiable days: {docDetails.available_days}</MDBCardText>
                            <MDBCardText>Avaiable Hours:{docDetails.available_hours} </MDBCardText>
                          
                            {docDetails.reviews && docDetails.reviews.length > 0 && (
                              
                                <MDBCard shadow='0' border='primary' background='white' className='mb-3'>
                                    <MDBCardHeader style={{color:'red'}}><i class="fa-solid fa-user"></i> {docDetails.reviews[0].patient_name}</MDBCardHeader>
                                    <MDBCardBody className='text-primary'>
                                        <MDBCardTitle>"{docDetails.reviews[0].comments}"</MDBCardTitle>
                                        <MDBCardText style={{color:'yellow'}} >{renderStars(docDetails.reviews[0].rating)}</MDBCardText>
                                        <MDBCardText style={{color:'black'}} >{docDetails.reviews[0].date}</MDBCardText>

                                    </MDBCardBody>
                                </MDBCard>
                 )}
                        </MDBCardBody>
                    </MDBCard>

                   
                </Col>
            </Row>
        </div>
    );
}

export default Viewdoc;
