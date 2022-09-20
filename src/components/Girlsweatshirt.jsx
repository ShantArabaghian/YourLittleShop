import styled from "styled-components";
import { girlsweatshirt } from "../data";

import Product from "./Product";

const Container = styled.div`
    padding: 10px;
    display: flex;
    margin: 10px;
    flex-wrap: wrap;
    justify-content: space-between;
`;


const Girlsweatshirt = () => {
  return (
    <Container>
    
      {girlsweatshirt.map((item) => (
        <Product item={item} key={item.id} />
      ))}
     
    </Container>
    
  );
};

export default Girlsweatshirt;