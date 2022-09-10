import styled from 'styled-components'

export const ContainerHome = styled.section`
  background: var(--gray-900);
  width: 100%;
  height: 80vh;
  display: flex;
  align-items: center;
  justify-content: center;
`
export const ContentShow = styled.div`
  width: 37rem;
  height: 37rem;
  display: flex;
  align-items: center;
  h1{
    line-height: 3rem;
    font-weight: 900;
    font-size: 2rem;
  }
  strong {
    color: var(--blueviolet-500);
  }
`
export const ContentImg = styled.div`
  img {
    width: 37rem;
    height: 37rem;
    object-fit: cover;
  }
`