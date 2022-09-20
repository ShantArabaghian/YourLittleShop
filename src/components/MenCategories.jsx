import styled from "styled-components";
import { mencategory } from "../data";
import CategoryItem from "./CategoryItem";

const Container = styled.div`
  display: flex;
  padding: 20px;
  justify-content: space-between;
 
`;

const MenCategories = () => {
  return (
    <Container>
      {mencategory.map((item) => (
        <CategoryItem item={item} key={item.id} />
      ))}
      
    </Container>
    
  );
};

export default MenCategories;