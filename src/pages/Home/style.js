import styled from 'styled-components'

export const ContainerHome = styled.section`
  background: var(--gray-900);
  width: 100%;
  height: 85vh;
  display: flex;
  align-items: center;
  justify-content: center;
  @media (max-width: 760px) {
      flex-direction: column;
  }
`
export const ContentShow = styled.div`
  width: 37rem;
  height: 37rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  div{
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 1rem;
  }
  h1{
    line-height: 3rem;
    font-weight: 900;
    font-size: 3rem;
  }
  strong {
    color: var(--blueviolet-500);
  }
  @media (max-width: 1024px) {
      width: 30rem;
      height: 30rem;
      h1{
          line-height: 2rem;
          font-weight: 900;
          font-size: 2rem;
  }
    }
    @media (max-width: 860px) {
      width: 25rem;
      height: 25rem;
      h1{
          line-height: 1rem;
          font-weight: 900;
          font-size: 2rem;
  }
    }

`
export const ContentImg = styled.div`
  img {
    width: 37rem;
    height: 37rem;
    object-fit: cover;

    @media (max-width: 1024px) {
      width: 30rem;
      height: 30rem;
    }
    @media (max-width: 860px) {
      display: none;
    }
  }


  
`