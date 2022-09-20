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
`;
const Button = styled.div`
    border:none;
    padding: 20px;
    background-color: whitesmoke;
    text-decoration:none;
    font-size:20px;
    cursor: pointer;
    font-weight: 600;
    &:hover {
      background-color: lightgreen;
      transform: scale(1.1);
      transition :0.5s;
    }
`




const CardItem = ({ item }) => {
  return (
    <Container>
      <Image className="img" src={item.img} />
      <Info>
        <Button><Link  style={{color:'black', textDecoration: 'none' }} to={item.to}>{item.shop}</Link></Button>
      </Info>
       

    </Container>
    
  );
};

export default CardItem;