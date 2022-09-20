import styled from "styled-components";
import { menjacket } from "../data";

import Product from "./Product";

const Container = styled.div`
    padding: 10px;
    display: flex;
    margin: 10px;
    flex-wrap: wrap;
    justify-content: space-between;
`;


const Menjacket = () => {
  return (
    <Container>
    
      {menjacket.map((item) => (
        <Product item={item} key={item.id} />
      ))}
     
    </Container>
    
  );
};

export default Menjacket;