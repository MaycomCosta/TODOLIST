import styled from 'styled-components'

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  gap: 20px;
  margin: 20%;
`

export const FormTodo = styled.form`

display: flex;
flex-direction: column;
align-items: center;
gap: 20px;

input {
width: 100%;
height: 45px;

padding: 10px 20px;

color: #464647;
background: #C3C3C7;
box-shadow: 0px 4px 14px rgba(0, 0, 0, 0.1);
border-radius: 8px;
border: none;

font-family: Montserrat;
font-style: normal;
font-weight: normal;
font-size: 20px;
line-height: 20px;
}

button {
  appearance: button;
  background-color: #FF9D00;
  border: solid transparent;
  border-radius: 16px;
  border-width: 0 0 4px;
  color: #FFFFFF;
  cursor: pointer;
  display: inline-block;
  font-family: din-round,sans-serif;
  font-size: 15px;
  font-weight: 700;
  letter-spacing: .8px;
  line-height: 20px;
  margin: 0;
  outline: none;
  overflow: visible;
  padding: 13px 16px;
  text-align: center;
  text-transform: uppercase;
  touch-action: manipulation;
  transform: translateZ(0);
  transition: filter .2s;
  user-select: none;
  -webkit-user-select: none;
  vertical-align: middle;
  white-space: nowrap;
  width: 50%;

  @media(max-width:480px){
    width: 70%;
  }
}

button:after {
  background-clip: padding-box;
  background-color: #FF7C03;
  border: solid transparent;
  border-radius: 16px;
  border-width: 0 0 4px;
  bottom: -4px;
  content: "";
  left: 0;
  position: absolute;
  right: 0;
  top: 0;
  z-index: -1;
}

button:main,
button:focus {
  user-select: auto;
}

button:hover:not(:disabled) {
  filter: brightness(1.1);
}

button:disabled {
  cursor: auto;
}
`

export const Title = styled.h3`
color: #464647;
font-size: 30px;
`

export const ContainerInputs = styled.div`
width: 300px;
margin: 5px 100px;
padding: 10px 10px 10px 10px;

background: rgba(255, 255, 255, 0.25);
border-radius: 10px;
color: #464647;

display: flex;
gap: 30px;
flex-direction: row-reverse;
align-items: center;

@media(max-width:320px){
  width: 250px;
  }
`

export const InputEditing = styled.input`
width: 250px;
height: 30px;
margin: 5px 0px;
padding: 10px 10px;
font-size: 16px;

background: rgba(255, 255, 255, 0.25);
border-radius: 10px;
border: none;

display: flex;
justify-content: center;
flex-direction: column;
`

export const ContainerShowTodo = styled.div`
width: 250px;
height: 30px;
margin: 5px 0;
gap: 35px;
padding: 10px 10px 10px 10px;

background: rgba(255, 255, 255, 0.25);
border-radius: 10px;
color: #464647;

display: flex;
justify-content: start;
align-items: center;
text-align: center;
`

export const TodoText = styled.p`
background: none;
`

export const ButtonDeleteTodo = styled.button`
  background: none;
  cursor: pointer;
  border: none;
  position: relative;
`

export const InputCheckbox = styled.input`
`  

export const TrashImg = styled.img`
background: none;
`

export const PencilImg = styled.img`
height: 20px;
width: 30px;
background: none;
`

export const EditButton = styled.button`
  text-align: center;
  /* height: 30px;
  width: 40px; 
  padding: 5px 5px; */

  background: none;

  color: #333333;

  border-radius: 100px;
  border-width: 0;

  cursor: pointer;

@media(max-width:800px){

}

`

export const ButtonSubmit = styled.button`
 text-align: center;
 background: none;
 color: black;
 border-width: 0;
 cursor: pointer;
 margin-left: 10px;

  img{
    background: none;
    height: 25px;
    width: 35px;

  }
` 


