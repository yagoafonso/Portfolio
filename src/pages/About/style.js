import styled from 'styled-components'

export const ContainerAbout = styled.section`
  background: var(--gray-900);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 5rem;
  height: 86.5vh;
  gap: 30px;
`
export const ContentImgAbout = styled.div`
  img{
    width: 20rem;
    height: 20rem;
    border-radius: 10px;
    box-shadow: -4px 4px black;
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
    span{
      color: var(--blueviolet-300);
    }
  }
  p{
    text-align: justify;
    line-height: 1.5rem;
    strong{
      color: var(--blueviolet-300);
    }
  }
`

export const ContainerSocial = styled.div`
  padding: 20px;
  h2{
    text-transform: uppercase;
    margin-bottom: 10px;
  }
  p{
    text-align: center;

  }
`
export const ContainerSocialIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
`
export const SocialIcon = styled.div`
  width: 40px;
  height: 40px;
  display: flex;
  margin-top: 15px;
  align-items: center;
  justify-content: center;
  border-radius: 20px;
  background: var(--white);
  cursor: pointer;
  svg{
    width: 25px;
    height: 25px;
    color:var(--blueviolet-800);

  }

  :hover {
  color: #87209e;
  box-shadow: 0 0 10px var(--blueviolet-800);
  }
`