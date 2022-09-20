
  import styled from "styled-components";
    
  const Container = styled.div`
    flex: 1;
    border: solid 1px black;
    margin: 5px;
    min-width: 280px;
    height: 350px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: whitesmoke;
    position: relative;
  `;
  const Image = styled.img`
    height: 75%;
    z-index: 2;
  `;
  const PopularProducts = ({ item }) => {
    return (
      <Container>
        
        <Image onClick={item.to} src={item.img} />
       
      </Container>
      
    );
  };
  
  export default PopularProducts;