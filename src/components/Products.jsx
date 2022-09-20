import styled from "styled-components";
import { girlshirt } from "../data";

import Product from "./Product";

const Container = styled.div`
    padding: 10px;
    display: flex;
    margin: 10px;
    flex-wrap: wrap;
    justify-content: space-between;
`;


const Products = () => {
  return (
    <Container>
    
      {girlshirt.map((item) => (
        <Product item={item} key={item.id} />
      ))}
     
    </Container>
    
  );
};

export default Products;