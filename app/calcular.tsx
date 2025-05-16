import { CloudButton } from "@/src/components/CloudButton";
import { S } from "@/src/components/Styled";
import { Mode, SleepCalculator } from "@/src/core/SleepCycleCalculator";
import DateTimePicker from "@react-native-community/datetimepicker";
import { useLocalSearchParams, useRouter } from "expo-router";
import { useEffect, useState } from "react";
import { Alert, FlatList, Platform, TouchableOpacity } from "react-native";
import * as Animatable from "react-native-animatable";


export default function CalcularScreen() {
  const router = useRouter();
  const { modo } = useLocalSearchParams<{ modo: Mode }>();
  const [horarios, setHorarios] = useState<Date[]>([]);
  const [chosenTime, setChosenTime] = useState<Date>(new Date());
  const [showPicker, setShowPicker] = useState(false);

  const openClock = () => {
    Alert.alert(
      "Não é possível abrir o relógio em Dispositivos IOS 😢 Abra o seu aplicativo relogio e use o alarme no melhor Horário , Obrigado por Utilizar",);
  };

  useEffect(() => {
    if (!modo) return;

    if (modo === "sleep") {
      const referencia = new Date();
      const calc = new SleepCalculator(modo, referencia);
      setHorarios(calc.calculateCycles());
    } else {
      setShowPicker(true);
    }
  }, [modo]);

  const onChosenTime = (_: any, selectedDate?: Date) => {
    setShowPicker(Platform.OS === "ios");
    if (selectedDate) {
      setChosenTime(selectedDate);
      const calc = new SleepCalculator("wake", selectedDate);
      const resultado = calc.calculateCycles();
      resultado.sort((a, b) => a.getTime() - b.getTime());

      setHorarios(resultado);
    }
  };

  return (
    <S.SafeContainer justify="center" align="center">
      <Animatable.View
        animation="zoomIn"
        duration={3000}
        style={{ width: "100%", alignItems: "center", flex: 1 }}
      >
        {modo === "wake" && (
          <S.Container justify="center" align="center" gap={10}>
            <S.Title textAlign="center">
              Escolha o horário que deseja acordar:
            </S.Title>
            {showPicker && (
              <DateTimePicker
                value={chosenTime}
                mode="time"
                is24Hour={true}
                display="spinner"
                onChange={onChosenTime}
              />
            )}
          </S.Container>
        )}

        <S.Container justify="center" align="center" gap={8}>
          {modo === "sleep" && (
            <S.Title textAlign="center" size={28}>
              Melhores horários para acordar
            </S.Title>
          )}
          {modo === "wake" && (
            <S.Title textAlign="center" size={28}>
              Melhores horários para dormir
            </S.Title>
          )}
          <FlatList
            data={horarios}
            keyExtractor={(_, index) => index.toString()}
            renderItem={({ item }) => (
              <TouchableOpacity onPress={openClock}>
                <S.Card>
                  <S.Title size={24} textAlign="center">
                    {SleepCalculator.formatTime(item)}
                  </S.Title>
                </S.Card>
              </TouchableOpacity>
            )}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{
              flexGrow: 1,
              justifyContent: "center",
              alignItems: "center",
              paddingVertical: 10,
              width: "100%",
              maxWidth: 300,
            }}
          />
        </S.Container>
        <CloudButton
          onPress={() => router.push("/")}
          icon="exit"
          width="100"
          height="100"
        />
      </Animatable.View>
    </S.SafeContainer>
  );
}
