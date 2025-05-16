import styled from "styled-components/native";
import { Text, TouchableOpacity } from "react-native";

export const CloudTouchable = styled(TouchableOpacity)<{ height: number }>`
  width: ${(props) => (props.width || 300) + "px"};
  height: ${({ height }) => height}px;
  overflow: hidden;
  align-items: center;
  justify-content: center;
  position: relative;
  margin-bottom: 24px;
`;

export const CloudText = styled(Text)`
  position: absolute;
  color: #fff;
  font-size: 24px;
  font-weight: 600;
  z-index: 10;
  margin-top: 110px;
`;

export const getIconStyle = (props: { size?: number; align?: string; top: number; }) => ({
  position: "relative",
  top: props.top || 0,
  left: 0,
  right: 0,
  bottom: 0,
  width: props.size || 24,
  height: props.size || 24,
  alignSelf: props.align || "center",
});

