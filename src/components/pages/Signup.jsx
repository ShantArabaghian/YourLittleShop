import styled from "styled-components";
import './Signup.css'
import { useState } from "react";
import { Link } from "react-router-dom";
import {
  createUserWithEmailAndPassword,
  
  onAuthStateChanged,
  
} from "firebase/auth";
import { auth } from "../../firebase-config";



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
const Signup = () => {

  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  
  const [, setUser] = useState({});
  onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser);
  });
  const register = async () => {
    try {
      const user = await createUserWithEmailAndPassword(
        auth,
        registerEmail,
        registerPassword
      );
      console.log(user);
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <div className ='Container'>
      <div className="Wrapper">
        <Title>SIGN UP</Title>
        <Form>
          <Input onChange={(event) => {
            setRegisterEmail(event.target.value);
          }} 
          placeholder="Email.." />
          <Input onChange={(event) => {
            setRegisterPassword(event.target.value);
          }} 
          type="password" placeholder="Password.." />
          <h6  className="SLink">Password must be longer than 6 characters</h6>
          <Link to="/" className="btn btn-primary btn-sm" onClick={register}>SIGN UP</Link>
        </Form>
      </div>
    </div>
  );
};

export default Signup;