import { Button } from "@/src/components/Button";
import { useRouter } from "expo-router";
import { S } from "../src/components/Styled";
import { CloudButton } from "@/src/components/CloudButton";
import * as Animatable from "react-native-animatable";


export default function HomeScreen() {

  const router = useRouter();

  return (
    <S.SafeContainer gap={45} >
      <Animatable.View
        animation="zoomIn"
        duration={3000}
        style={{ width: "100%", alignItems: "center", flex: 1 }}
      >
        <S.Title textAlign="center" size={42} marginTop={10} >Bem‑vindo ao Sonin 🌙</S.Title>
      <S.Container justify="start" align="center">
        <S.Title textAlign="center">Vamos descobrir a melhor hora para acordar ?</S.Title>   
            <CloudButton onPress={() => router.push("/calcular?modo=wake")} icon="clock">
              Em outro Horário
            </CloudButton>
            <S.Title textAlign="center">Ou</S.Title>
            <CloudButton onPress={() => router.push("/calcular?modo=sleep")} icon="zzz">
              Dormir Agora
            </CloudButton>
        </S.Container>
        </Animatable.View>
    </S.SafeContainer>
  );
}