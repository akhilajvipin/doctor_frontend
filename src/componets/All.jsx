import React, { useEffect, useState } from 'react'
import axios from 'axios'
import {Col, Row} from "react-bootstrap"
import Restcard from './Restcard'
import './cover.css'
import ContactForm from './ContactForm'



function All() {
  const[alldocData,setalldocData]=useState([])
//api fetching
 const base_url = 'http://localhost:3001/doctors'

const fetchData = async()=>{
  const result =  await axios.get(base_url)
  console.log(result.data);
 setalldocData(result.data)
}
console.log(alldocData);

useEffect(()=>{
fetchData()
},[])

  return (
    <div>
     <Row>
      <div className='img align-items-center justify-content-center'>
      <h1 className='text-center'>Our Doctors</h1>
      </div>
      {
        alldocData.map(item=>(
          <Col sm={12} md={6} lg={5} xl={4}>
         <Restcard doct= {item}/>
          </Col>

        ))
      }
     </Row>
     <ContactForm/>

    </div>
  )
}

export default All