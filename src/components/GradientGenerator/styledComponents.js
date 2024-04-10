// Style your elements here
import styled from 'styled-components'

export const DivContainer = styled.div`
  height: 100vh;
  background-color: #000000;
  background-image: linear-gradient(
    to ${props => props.side},
    ${props => props.left},
    ${props => props.right}
  );
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`
export const Heading = styled.h1`
  color: #ffffff;
  font-weight: 700;
  font-size: 28px;
`
export const PEl = styled.p`
  color: #ededed;
  font-weight: 500;
  font-size: 20px;
`
export const ULst = styled.ul`
  display: flex;
  gap: 10px;
  list-style-type: none;
`
export const DivContainer2 = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 50px;
`
export const InputEl = styled.input`
  border: none;
  border-width: 0px;
  border-color: transparent;
  outline: none;
  width: 75px;
  padding: 0px;
  background-color: transparent;
  border-radius: 23px;
  margin: 0px;
  height: 35px;
  margin-top: 7px;
`
export const LabelEl = styled.label`
  color: #ededed;
`

export const DivContainer3 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`
export const ButtonEl1 = styled.button`
  background-color: #00c9b7;
  padding: 8px;
  border: none;
  border-radius: 4px;
  margin-top: 35px;
  color: #1e293b;
  font-weight: 500;
  font-family: 'roboto';
  width: 80px;
`
