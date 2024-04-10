/* eslint-disable arrow-body-style */
import {ButtonEElement} from './styledComponents'

const GradientDirectionItem = props => {
  const {dt, fnc, st} = props
  const {displayText} = dt
  const isActive = st === displayText
  const onClk = () => {
    fnc(displayText)
  }
  return (
    <li>
      <ButtonEElement onClick={onClk} isActive={isActive}>
        {displayText}
      </ButtonEElement>
    </li>
  )
}

export default GradientDirectionItem
