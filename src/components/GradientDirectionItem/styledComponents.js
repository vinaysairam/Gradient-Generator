// Style your elements here
import styled from 'styled-components'

export const ButtonEElement = styled.button`
  border: none;
  background-color: ${props =>
    props.isActive === false ? '#ffffff79' : '#ededed'};
  padding: 8px;
  opacity:${props => (props.isActive ? 1 : 0.5)}
  width: 80px;
  border-radius: 4px;
  cursor: pointer;
`
