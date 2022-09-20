import styled from "styled-components";
import { cardimage } from "../data";
import CardItem from "./CardItem";

const Container = styled.div`
  display: flex;
  padding: 20px;
  justify-content: space-between;
  
`;


const Cards = () => {
  return (
    
    <Container>
    
      {cardimage.map((item) => (
        <CardItem item={item} key={item.id} />
      ))}
      
    </Container>
    
  );
};

export default Cards;