import React, { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function ContactForm() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
      });
    


    const handleInputChange = (e) => {
        const { name, value } = e.target;

        setFormData({
          ...formData,
          [name]: value,
        });
      };
      const handleSubmit = (e) => {
        e.preventDefault();
        // console.log(FormData);
        toast.success('Thank You for the Feedback')
      };
  return (
    <section  id="contact">
        <h3 className='text-center'>Feedback</h3>
    <div className='container ' > 
      <div className="row mt-1">
        <div className="col-md-6 offset-md-3">
          <form >
            <div className="mb-3">
              <input
                type="text"
                name="name"
                placeholder='Name'
                 value={formData.name}
                 onChange={handleInputChange}
                className="form-control"
                required
              />
            </div>

            <div className="mb-3">
              <input
              placeholder='E-mail'
                type="email"
                name="email"
                 value={formData.email}
                 onChange={handleInputChange}
                className="form-control"
                required
              />
            </div>
            <div className="mb-3">
              <textarea
              placeholder='Message'
                name="message"
                 value={formData.message}
               onChange={handleInputChange}
                className="form-control"
                rows="4"
                required
              ></textarea>
            </div>

            <button  onClick={handleSubmit } type="submit" className="btn " style={{backgroundColor:'#ff004f', color:'white', height:"50px", width:'100px'}}>
             Feedback
            </button>
          </form>
        </div>
      </div>
    </div>
    <ToastContainer autoClose={2000} theme='colored' position='top-center'/>

    </section>
  )
}

export default ContactForm