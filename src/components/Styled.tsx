import { SafeAreaView } from 'react-native-safe-area-context';
import styled from 'styled-components/native';
import { Theme } from './theme';
interface TextProps {
  theme: Theme;
}

const SafeContainer = styled(SafeAreaView)<TextProps>`
  flex: 1;
  padding: 16px;
  gap: ${(props) => props.gap || 0}px;
  justify-content: ${(props) => props.justify || props.theme.justify};
  align-items: ${(props) => props.align || props.theme.align};
`;

const Container = styled.View`
  flex: ${(props) => props.flex || 1};
  justify-content: ${(props) => props.justify ||  props.theme.justify};
  align-items: ${(props) => props.align ||  props.theme.align};
`;

const Text = styled.Text<TextProps>`
  font-family: ${(props) => props.theme.fonts.regular};
  color: ${(props) => props.theme.colors.text};
  font-size: ${(props) => props.theme.sizes.text}px;
`;

const Title = styled(Text)<TextProps>`
  font-family: ${(props) => props.theme.fonts.bold};
  font-size: ${(props) =>   props.size || props.theme.sizes.title}px;
  text-align: ${(props) => props.theme.textAlign || props.textAlign};
  margin-top: ${(props) => props.marginTop || 0}px;
`;
const Card = styled.View<{ background?: string }>`
  width: 200px;
  height: auto;
  background-color: ${({ background }) => background || "#ffffff10"};
  padding: 20px;
  margin-bottom: 16px;
  border-radius: 16px;
  align-items: center;
`;


export const S = {
  SafeContainer,
  Container,
  Text,
  Title,
  Card,
};