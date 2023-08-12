import styled from 'styled-components'
import { BsFillTrashFill, BsFillPencilFill, BsCheck2 } from 'react-icons/bs'


export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow-x: hidden;
  height: 100%;
  min-height: 100vh;
  gap: 20px;
  margin: 0 auto;

  background-color: #0f2637;

  .info-button {
    position: fixed;
    top: 20px;
    right: 20px;
    background: transparent;
    color: #FF9D00;
    font-weight: bold;
    font-size: 25px;
    border: none;
    cursor: pointer;
    z-index: 1;

    :hover {
      color: #FF7C03;
    }
 }
`
export const ContainerAll = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
`
export const Todo = styled.div`
    /* overflow-y: auto; */
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
    width: 100%;
    
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
  background: #ffffff;
  box-shadow: 0px 4px 14px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  border: none;

  font-family: Montserrat;
  font-style: normal;
  font-weight: normal;
  font-size: 20px;
  line-height: 20px;
}
`
export const ContainerShowTodo = styled.div`
  width: 100%;
  margin: 5px 0;
  gap: 35px;
  padding: 1.5em;
  word-break: break-word;

  background: rgba(255, 255, 255, 0.25);
  border-radius: 10px;
  color: #ffffff;

  display: flex;
  justify-content: start;
  align-items: center;
  text-align: center;
`
export const ContainerInputs = styled.div`
  width: 30em;
  padding: 10px;

  background: rgba(255, 255, 255, 0.25);
  border-radius: 10px;
  color: #ffffff;

  display: flex;
  flex-direction: row-reverse;
  align-items: center;
`
export const Button = styled.button`
  background-color: ${props => props.disabled ? '#02192B' : '#FF9D00'};
  cursor: ${props => props.disabled ? 'not-allowed' : 'pointer'};
  border: solid transparent;
  border-radius: 16px;
  border-width: 0 0 4px;
  color: ${props => props.disabled ? '#FF9D00' : '#FFFFFF;'};
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

  ::after {
  background-clip: padding-box;
  background-color: ${props => props.disabled ? '#02192B' : '#FF7C03'};
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

  @media(max-width:480px){
    width: 70%;
  }
`
export const Title = styled.h3`
color: #FF9D00;
font-size: 30px;
margin-top: 3em;
`
export const InputEditing = styled.input`
  width: 100%;
  height: 3em;
  margin: 5px 0px;
  padding: 10px 10px;
  font-size: 20px;

  background: rgba(255,255,255,0.25);
  color: #ffffff;
  border-radius: 10px;
  border: none;

  display: flex;
  justify-content: center;
  flex-direction: column;
`
export const TodoText = styled.p`
  font-size: 20px;
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
export const EditButton = styled.button`
  text-align: center;

  background: none;

  color: #333333;

  border-radius: 100px;
  border-width: 0;

  cursor: pointer;
`
export const ButtonSubmit = styled.button`
 text-align: center;
 background: none;
 border-width: 0;
 margin-left: 10px;

 color: ${props => props.disabled ? 'red' : '#ffffff'};
 cursor: ${props => props.disabled ? 'not-allowed' : 'pointer'};

` 
export const TrashIcon = styled(BsFillTrashFill)`
background: none;
font-size: 20px;
color: #ffffff;

:hover {
  color: red;
  transition: 0.5s;
  opacity: 0.8;
}

`
export const PencilIcon = styled(BsFillPencilFill)`
background: none;
font-size: 20px;
margin: 0 1rem;
color: #ffffff;

:hover {
  color: blue;
  transition: 0.5s;
  opacity: 0.8;
}

`
export const CheckIcon = styled(BsCheck2)`
background: none;
font-size: 40px;
margin-right: 0.5em;

`