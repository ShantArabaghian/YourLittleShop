import styled from "styled-components";

import { useState } from "react";
import './Contact.css'
import {  useRef} from "react";

import emailjs from "emailjs-com";




const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 10px 0;
  padding: 10px;
`;




  
const Contact = () => {
  const formRef = useRef();
  const [done, setDone] = useState(false)
  
  

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_tltx1p5",
        "template_y6ts6te",
        formRef.current,
        "user_AqcBlIaX2POaOmy3IBb48"
      )
      .then(
        (result) => {
          console.log(result.text);
          setDone(true)
        },
        (error) => {
          console.log(error.text);
        }
      );
      formRef.current.reset()
  };

  return (
    <div className ='ContactContainer'>
      <div className="Wrapper">
        <Title>Contact us</Title>
        <Form onSubmit={handleSubmit} ref={formRef}>
          <Input  placeholder="First name.." name="name" />
          <Input
          type="text" placeholder="Last Name.." name="lastname"/>
          <Input
          type="text" placeholder="Email.." name="email"/>
          <Input
          type="text" placeholder="Subject.." name="subject"/>
          <textarea placeholder="Message" className="textarea" rows='5' name="message"></textarea>
          <button  className="btn btn-primary btn-sm">Submit</button>
          {done && "Thank you for your message !"}
        </Form>
      </div>
    </div>
  );
};

export default Contact;