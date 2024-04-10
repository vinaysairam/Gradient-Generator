/* eslint-disable jsx-a11y/label-has-associated-control */
import {Component} from 'react'
import {
  Heading,
  DivContainer,
  PEl,
  ULst,
  DivContainer2,
  InputEl,
  DivContainer3,
  ButtonEl1,
} from './styledComponents'
import GradientDirectionItem from '../GradientDirectionItem'

const gradientDirectionsList = [
  {directionId: 'TOP', value: 'top', displayText: 'Top'},
  {directionId: 'BOTTOM', value: 'bottom', displayText: 'Bottom'},
  {directionId: 'RIGHT', value: 'right', displayText: 'Right'},
  {directionId: 'LEFT', value: 'left', displayText: 'Left'},
]
// Write your code here

class GradientGenerator extends Component {
  state = {
    hxc1: '#8ae323',
    hxc2: '#014f7b',
    hxc11: '#8ae323',
    hxc22: '#014f7b',
    state: 'top',
  }

  onChangeState = value => {
    this.setState({state: value})
  }

  onHex1 = event => {
    this.setState({hxc1: event.target.value})
  }

  onHex2 = event => {
    this.setState({hxc2: event.target.value})
  }

  onGenerate = () => {
    const {hxc1, hxc2} = this.state
    this.setState({hxc11: hxc1, hxc22: hxc2})
  }

  render() {
    const {hxc11, hxc22, state, hxc1, hxc2} = this.state
    return (
      <DivContainer
        data-testid="gradientGenerator"
        left={hxc11}
        right={hxc22}
        side={state}
      >
        <Heading>Generate a CSS Color Gradient</Heading>
        <PEl>Choose Direction</PEl>
        <ULst>
          {gradientDirectionsList.map(l => (
            <GradientDirectionItem
              dt={l}
              key={l.directionId}
              fnc={this.onChangeState}
              st={state}
            />
          ))}
        </ULst>
        <PEl>Pick the Colors</PEl>
        <DivContainer2>
          <DivContainer3>
            <p>{hxc11}</p>
            <InputEl type="color" onChange={this.onHex1} value={hxc1} />
          </DivContainer3>
          <DivContainer3>
            <p>{hxc22}</p>
            <InputEl type="color" onChange={this.onHex2} value={hxc2} />
          </DivContainer3>
        </DivContainer2>
        <ButtonEl1 type="button" onClick={this.onGenerate}>
          Generate
        </ButtonEl1>
      </DivContainer>
    )
  }
}

export default GradientGenerator
