import styled from "styled-components";
import { girljacket } from "../data";

import Product from "./Product";

const Container = styled.div`
    padding: 10px;
    display: flex;
    margin: 10px;
    flex-wrap: wrap;
    justify-content: space-between;
`;


const GirlJacket = () => {
  return (
    <Container>
    
      {girljacket.map((item) => (
        <Product item={item} key={item.id} />
      ))}
     
    </Container>
    
  );
};

export default GirlJacket;