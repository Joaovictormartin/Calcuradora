import styled from 'styled-components/native';

export const Container = styled.View``;

export const AreaButton = styled.TouchableHighlight`
  width: ${({width}) => width}px;
  height: ${({height}) => height}px;
  padding: 20px;
  background-color: ${({background}) => background};
  border-width: 0.5px;
  border-color: ${({corBorder}) => corBorder};;
`;

export const TextButton = styled.Text`
  font-size: 40px;
  text-align: center;
  color: ${({corText}) => corText}
`