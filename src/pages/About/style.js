import styled from 'styled-components'

export const ContainerAbout = styled.section`
  background: var(--gray-700);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 5rem;
  min-height: 35vh;
  gap: 30px;
`
export const ContentImgAbout = styled.div`
  img{
    width: 20rem;
    height: 20rem;
    border-radius: 10px;
    box-shadow: -4px 4px var(--blueviolet-300)
  }
`
export const ContentTextAbout = styled.div`
  width: 30rem;
  height: 20rem;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 20px;
  h1{
    text-transform: uppercase;
    font-size: 1.5rem;
    font-weight: 700;
    line-height: 2rem;
  }
`
