import { ReactNode } from "react";
import { TextStyle, ViewStyle } from "react-native";

export type CloudButtonProps = {
  onPress?: () => void;
  children: ReactNode;
  style?: ViewStyle;
  height?: number;
  textStyle?: TextStyle;
  icon?: "clock" | "zzz";
};
