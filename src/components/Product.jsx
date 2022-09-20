  import React from "react";
  import styled from "styled-components";
  import {useCart} from 'react-use-cart';
  import MuiAlert from '@mui/material/Alert';
import Snackbar from '@mui/material/Snackbar';


  const Info = styled.div`
    opacity: 0;
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    border-radius:15%;
    left: 0;
    background-color: rgba(0, 0, 0, 0.2);
    z-index: 3;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.5s ease;
    cursor: pointer;
  `;
  
  const Container = styled.div`
    flex: 1;
    background-color:#f5f5f5;
    border: solid 1px black;
    margin: 5px;
    border-radius: 15%;
    min-width: 280px;
    height: 350px;
    min-heght:100vh;
    display: flex;
    align-items: center;
    justify-content: center;
   
    position: relative;
    &:hover ${Info}{
      opacity: 1;
    }
  `;
  
  
  
  const Image = styled.img`
    height: 75%;
    z-index: 2;
  `;
  
  const Icon = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size:20px;
    margin: 20px;
    transition: all 0.5s ease;
    &:hover {
      background-color: lightgreen;
      transform: scale(1.1);
    }
  `;
  const H1 = styled.div`
  font-size : 30px;
  color : black;
  -webkit-text-stroke-width: 0.5px;
  -webkit-text-stroke-color: yellow;
  `
  const Text = styled.div`
  font-size : 30px;
  -webkit-text-stroke-width: 0.5px;
  -webkit-text-stroke-color: yellow;
  
  `
  const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
  });

  const Product = ({ item }) => {

    const [open, setOpen] = React.useState(false);

    const handleClick = () => {
      addItem(item);
      setOpen(true);
    };
  
    const handleClose = (event, reason) => {
      if (reason === 'clickaway') {
        return;
      }
  
      setOpen(false);
    };
    const {addItem} = useCart();


    
  
    return (
      <Container>
        
        <Image src={item.img} />
        <Info> 
        <H1>Add to cart</H1>
          <Icon >
          <i onClick={() => handleClick()} className="fas fa-cart-plus"></i>
          </Icon> 
          <Text>${item.price}</Text>
        </Info>
        <Snackbar open={open} autoHideDuration={3000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
          Item Added to the Cart
        </Alert>
        </Snackbar>
     
      </Container>
      
    );
  };
  
  export default Product;