import { Button } from "@/src/components/Button";
import { S } from "../src/components/Styled";


export default function HomeScreen() {
  return (
    <S.SafeContainer gap={100} >
        <S.Title textAlign="center" size={42} marginTop={20} >Bem‑vindo ao Sonin 🌙</S.Title>
      <S.Container justify="start" align="center">
        <S.Title textAlign="center">Vamos descobrir a melhor hora para acordar ?</S.Title>   
            <Button>
              <S.Title>Indo Dormir Agora</S.Title>
            </Button>
            <S.Title textAlign="center">Ou</S.Title>
            <Button>
              <S.Title>Em outro Horário</S.Title>
            </Button>
        </S.Container>
    </S.SafeContainer>
  );
}
