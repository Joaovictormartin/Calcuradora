import React, {Component} from 'react';

import Display from '../../components/Display';
import Button from '../../components/Button';
import {Container, Wrapper} from './styles';

const initialState = {
  displayValue: '0',
  clearDisplay: false,
  operation: null,
  values: [0,0],
  current: 0
}

export default class Home extends Component {
  state = { ...initialState }

  addDigit = (n) => {
    const clearDisplay = this.state.displayValue === '0' || this.state.clearDisplay
    
    if(n === '.' && this.state.displayValue.includes('.')){
      return
    }
    const currentValue = clearDisplay ? '' : this.state.displayValue
    const displayValue = currentValue + n
    this.setState({displayValue, clearDisplay: false})

    if(n !== '.') {
      const newValue = parseFloat(displayValue)
      const values = [...this.state.values]
      values[this.state.current] = newValue
      this.setState({values})
    }

  }

  clearMemory = () => {
    this.setState({...initialState})
  }

  Operation = (operation) => {
    if (this.state.current === 0) {
      this.setState({operation, current: 1, clearDisplay: true})
    }else{
      const equals = operation === '='
      const values = [...this.state.values]
      try{
        values[0] = eval(`${values[0]} ${this.state.operation} ${values[1]}`)

      }catch(error){
        values[0] = this.state.values[0]
      }
      values[1] = 0

      this.setState({
        displayValue: `${values[0]}`,
        operation: equals ? null : operation,
        current: equals ? 0 : 1,
        clearDisplay: true,
        values,
      })
    }
    
  }
  render(){
    return (
      <Container>
        <Display valor={this.state.displayValue} />
        <Wrapper>
          <Button 
            label="AC" 
            tamanho={3}
            onPress={this.clearMemory} 
          />

          <Button
            label="/"
            background="#fa8231"
            corText="#FFF"
            onPress={() => this.Operation('/')}
          />

          <Button 
            label="7" 
            onPress={() => this.addDigit('7')} 
          />

          <Button 
            label="8" 
            onPress={() => this.addDigit('8')} 
          />

          <Button 
            label="9" 
            onPress={() => this.addDigit('9')} 
          />

          <Button
            label="*"
            background="#fa8231"
            corText="#FFF"
            onPress={() => this.Operation('*')}
          />
          <Button 
            label="4" 
            onPress={() => this.addDigit('4')} 
          />

          <Button 
            label="5" 
            onPress={() => this.addDigit('5')} 
          />

          <Button 
            label="6" 
            onPress={() => this.addDigit('6')}
          />

          <Button
            label="-"
            background="#fa8231"
            corText="#FFF"
            onPress={() => this.Operation('-')}
          />

          <Button 
            label="1" 
            onPress={() => this.addDigit('1')} 
          />

          <Button
            label="2"
            onPress={() => this.addDigit('2')} 
          />

          <Button 
            label="3" 
            onPress={() => this.addDigit('3')} 
          />

          <Button
            label="+"
            background="#fa8231"
            corText="#FFF"
            onPress={() => this.Operation('+')}
          />

          <Button 
            label="0" 
            tamanho={2} 
            onPress={() => this.addDigit('0')} 
          />

          <Button 
            label="." 
            onPress={() => this.addDigit('.')} 
          />

          <Button
            label="="
            background="#fa8231"
            corText="#FFF"
            onPress={() => this.Operation('=')}
          />
          
        </Wrapper>
      </Container>
    );
  }
}
