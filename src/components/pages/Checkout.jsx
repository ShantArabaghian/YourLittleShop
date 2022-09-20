import styled from "styled-components";
import { useState } from "react";
import {  useRef} from "react";
import { useCart } from 'react-use-cart';
import emailjs from "emailjs-com";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
    rgba(255, 255, 255, 0.5),
    rgba(255, 255, 255, 0.5)
  ),
    url("https://i.imgur.com/NoYNbT8.jpg")
      center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Title = styled.h1`
  font-size: 24px;
  font-weight: 600;
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


const Checkout = () => {
const formRef = useRef();
const [done, setDone] = useState(false)



const handleSubmit = (e) => {
  e.preventDefault();
  emailjs
    .sendForm(
      "service_tltx1p5",
      "template_o2ju2r9",
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
const {
 
  emptyCart, 
} = useCart();
  return (
    
    <Container>
      <div className="Wrapper">
        <Title>Checkout</Title>
        <Form ref={formRef} onSubmit={handleSubmit}>
          <Input type="text" placeholder="Fist Name" name="firstname" required/>
          <Input type="text" placeholder="Last Name" name="lastname" required  />
          <Input type="email" placeholder="Email"  name="email" required/>
          <Input type="text" placeholder="Address" name="address" required/>
          <button href='/' onClick={()=> emptyCart()} className="btn btn-primary btn-sm">Submit</button>
        </Form>
      </div>
      {done && "Thank you for contacting us..."}
                        
    </Container> 
    );
 
};

export default Checkout;