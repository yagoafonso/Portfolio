import styled from "styled-components";

export const ContainerProjectCard = styled.div`
  width: 20rem;
  height: 38rem;
  border: 1px solid var(--blueviolet-800);
  box-shadow: 0 0 5px var(--blueviolet-800);
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
`
export const CardImg = styled.img`
  width: 15rem;
  height: 15rem;
  object-fit: cover;
  margin-top: 20px;
  border-radius: 8px;
  border: 4px solid var(--gray-900);
  outline: 1px solid var(--blueviolet-800);
`
export const CardTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 700;
`
export const CardText = styled.p`
  width: 18rem;
  text-align: justify;
  line-height: 1.5rem;
`
export const ContainerLinks = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px;
` 
export const ContainerButton = styled.a`
  text-decoration: none ;
  display: flex;
  justify-content: center;
  gap: 5px;
  width: 6rem;
  height: 2rem;
  border-radius: 5px;
  padding: 5px;
  background: var(--blueviolet-800);
  color: var(--white);
  cursor: pointer;
  transition: 0.2s;  
  :hover{
    background: var(--blueviolet-300);
  }
`