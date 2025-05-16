import React from "react";
import CloudSpeed from "@/assets/images/CloudSpeed.svg";
import Clock from "@/assets/images/Clock.svg";
import ZZZ from "@/assets/images/zzz.svg";
import Exit from "@/assets/images/exit.svg";
import * as Animatable from "react-native-animatable";

import { CloudTouchable, CloudText, getIconStyle } from "./CloudButton.styled";
import { CloudButtonProps } from "./CloudButton.types";

export const CloudButton = ({
  onPress,
  children,
  style,
  height = 200,
  textStyle,
  icon,
  width
}: CloudButtonProps) => {
  return (
    <Animatable.View
      animation="pulse" // ou "bounce", "jello", "swing"
      iterationCount="infinite"
      duration={4000}
      easing="ease-in-out"
    >
      <CloudTouchable onPress={onPress} style={style} height={height} width={width}>
        <CloudSpeed
          width="100%"
          height="100%"
          preserveAspectRatio="xMidYMid slice"
          style={{ position: "absolute" }}
        />
        <CloudText style={textStyle}>{children}</CloudText>
        {icon === "clock" && (
          <Clock width={160} height={110} preserveAspectRatio="xMidYMid slice" style={getIconStyle({ size: 32})} />
        )}
        {icon === "zzz" && (
          <ZZZ width={80} height={80} preserveAspectRatio="xMidYMid slice" style={getIconStyle({ size: 32})} />
        )}
        {icon === "exit" && (
          <Exit width={40} height={40} preserveAspectRatio="xMidYMid slice" style={getIconStyle({align: "center", top:5 })} />
        )}
      </CloudTouchable>
    </Animatable.View>
  );
};
