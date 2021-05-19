import React, {useState} from 'react';
import {Dimensions} from 'react-native';

import {Container, AreaButton, TextButton} from './styles';

const Button = ({
  label,
  background = '#FFF',
  corBorder = '#404040',
  corText = '#000',
  tamanho = 1,
  ...rest
}) => {
  const height = Dimensions.get('window').width / 4;
  const width = (Dimensions.get('window').width / 4) * tamanho;

  return (
    <Container>
      <AreaButton
        height={height}
        width={width}
        background={background}
        corBorder={corBorder}
        {...rest}>
        <TextButton corText={corText}>{label}</TextButton>
      </AreaButton>
    </Container>
  );
};

export default Button;
