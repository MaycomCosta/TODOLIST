import styled from 'styled-components'

export const Footer = styled.div`

  background: #02192B;
  height: 15em;
  width: 100vw;
  margin: 1em 0 0 0;

  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  gap: 2em;
    
  nav {
    display: flex;
    flex-direction: column;
    gap: 10px;
    align-items: flex-start;
  }

  a {
    margin: 0;
    font-size: 13px;
    color: #ffffff;
  }

  p {
    font-size: 13px;
    margin-top: 20px;
    opacity: 0.8;
    line-height: 1.5em;
    color: #ffffff;
  }

  h4 {
    font-size: 20px;
    color: #FF880A;
  }
  h5 {
    font-weight: 400;
    line-height: 22px;
    color: #FF880A;
    opacity: 0.8;
  }
  .containerStyle {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 10px;
  }
  @media (max-width: 768px) {
    width: 100vw;
    overflow: hidden;
 }
 @media (max-width: 480px) {
  width: 100vw;
  overflow: hidden;
 }

`
export const FooterLink = styled.a`
  color: #ffffff;
  text-decoration: none;
  margin: 0 10px;
  cursor: pointer;
`;
export const Containers = styled.div`
  display: flex;
  justify-content: center;
  gap: 10vw;
`;
export const ContainerPublicity = styled.div`
`
export const ContainerServices = styled.div`
`
export const ContainerFurniture = styled.div`
`
export const ContainerFollowUs = styled.div`
`
export const CopyrightContainer = styled.div`
  display: flex;
  justify-content: space-around;

  h5 {
    color: #ffffff;
    opacity: 0.5;
  }
`;
// export const Div = styled.div`
// `