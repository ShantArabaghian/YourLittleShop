import styled from "styled-components";
import './Login.css';
import {Link} from "react-router-dom";
import { useState } from "react";
import {signInWithEmailAndPassword, onAuthStateChanged,} from "firebase/auth";
import { auth } from "../../firebase-config";


const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 10px 0;
  padding: 10px;
`;
const Login = () => {
  
    
    const [loginEmail, setLoginEmail] = useState("");
    const [loginPassword, setLoginPassword] = useState("");
  
    const [, setUser] = useState({});
  
    onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    const login = async () => {
      try {
        const user = await signInWithEmailAndPassword(
          auth,
          loginEmail,
          loginPassword
        );
        console.log(user);
      } catch (error) {
        console.log(error.message);
      }
    };
  return (
    <div className="LContainer">
    <div className="Wrapper">
      <Title>SIGN IN</Title>
      <div className="formlog">
        <Input required
          placeholder="Email..."
          onChange={(event) => {
            setLoginEmail(event.target.value);
          }}
        />
        <Input required
        type="password"
          placeholder="Password..."
          onChange={(event) => {
            setLoginPassword(event.target.value);
          }}
        />
        <Link to="/" className="btn btn-primary btn-sm" onClick={login}>LOGIN</Link>      
        <Link  className="Link" to="/signup">Dont have an account ? Sign Up now</Link>
       

      </div>
    </div>
   
  </div> 
  
);
   
 
};

export default Login;