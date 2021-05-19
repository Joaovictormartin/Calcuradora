import React from 'react';
import {Dimensions} from 'react-native';

import {Container, TextDisplay} from './styles';

const Display = ({valor, ...rest}) => {
  return (
    <Container {...rest}>
      <TextDisplay numberOfLines={1}>
        {valor}
      </TextDisplay>
    </Container>
  );
};

export default Display;
