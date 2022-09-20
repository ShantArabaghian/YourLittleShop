import styled from "styled-components";
import {Link} from "react-router-dom";


const Container = styled.div`
  flex: 1;
  margin: 3px;
  height: 100vh;
  position: relative;
  
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  
 
`;

const Info = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Title = styled.h1`
    color:white;
    margin-bottom: 20px;
    @media screen and (max-width: 820px) {

      font-size:20px;
    }
`;

const Button = styled.div`
    border:none;
    padding: 10px;
    background-color: white;
    color:gray;
    cursor: pointer;
    &:hover {
      background-color: lightgreen;
      transform: scale(1.1);
      transition :0.5s;
    }
    Link{
      font-size:40px;
    }
`

const CategoryItem = ({ item }) => {
  

  return (
    <Container>
      <Image className="img" src={item.img} />
      <Info>
        <Title>{item.title}</Title>
        <Button><Link className="btn"  to={item.to}>SHOP NOW</Link></Button>
        </Info>
       

    </Container>
    
  );
};

export default CategoryItem;