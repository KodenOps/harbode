import React from 'react'
import formImg from '../../img/contactform.png'
import  { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; 
// import 'reactjs-toastr/lib/toast.css'; 

const Contactform = () => {
  const [email, setemail] = useState('');
  const [name, setname] = useState('');
  const [subject, setsubject] = useState('');
  const [body, setbody] = useState('');
  // const [toggle, settoggle] = useState('hide');
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_amwm8fn', 'template_qau448q', form.current, 'APGLpZGUvdur8Yp9S')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      setemail('');
      setname('');
      setsubject('');
      setbody('')
      toast.success('Message sent successfully', {closeButton:false},{autoClose: 600 })
      
  };

  return (
    <section className="contactform">
      
        <div className="left">
            <h4>How Can We Help You Today?</h4>
            <p className='p'>Don't worry, we won't keep you waiting for long. The solution will drop into your mailbox in a jiffy. Three minutes max!</p>
            {/* <p className='' id='success-msg'>Mail sent successfully <i className="fa-solid fa-xmark" ></i></p> */}
            <form ref={form} onSubmit={sendEmail} action="https://formsubmit.co/femifadiya.segun@gmail.com" method="POST">
                <input type="email" name="user_email" id="mail" placeholder='Enter your Email address *' value={email} required onChange={(e)=>{
                  setemail(e.target.value)
                  console.log(email)
                }}/>
                <input type="text" name="user_name" id="subject" placeholder='Your Name *' required  value={name}  onChange={(e)=>{
                  setname(e.target.value)
                  console.log(name)
                }}/>
                <input type="text" name="subject" id="subject" placeholder='Mail Subject *'  value={subject} required onChange={(e)=>{
                  setsubject(e.target.value)
                  console.log(subject)
                }}/>
                <textarea name="message" id="body" cols="50" rows="10" placeholder='Enter your text *'  value={body} required onChange={(e)=>{
                  setbody(e.target.value)
                  console.log(body)
                }}></textarea>
                <p className='upload'>Add screenshot (optional) <i className="fa-solid fa-cloud-arrow-up"></i> </p>
                
                <button type="submit"  id='submit'>Send mail now</button>
                
            </form>
        </div>
        <div className="right">
            <img src={formImg} alt="" />
        </div>
        <ToastContainer/>
    </section>
  )
}

export default Contactform