import React, { useEffect } from 'react';
import '../../App.css';
import Cards from '../Cards';
import styled from "styled-components";
import { popularProducts } from "../../data";

import SlideShow from '../SlideShow';
import PopularProducts from '../PopularProducts';



const Container = styled.div`
padding: 10px;
display: flex;
margin: 10px;
flex-wrap: wrap;
justify-content: space-between;
`;
function Home (){
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
    return(
        <>
        <SlideShow/>
        <Cards></Cards>
        
        <h1 className='hello'>Popular Products</h1>
        <Container>
    
      {popularProducts.map((item) => (
        <PopularProducts item={item} key={item.id} />
      ))}
     
    </Container>
    
        </>
    )
}
export default Home;