// app/_layout.tsx
import { useFonts } from "expo-font";
import { Slot } from "expo-router";
import { ImageBackground, StyleSheet, View } from "react-native";
import { ThemeProvider } from "styled-components/native";
import bg from "../assets/images/bg.png";
import theme from "../src/theme";

export default function Layout() {
  const [fontsLoaded] = useFonts({
    Quicksand: require("../assets/fonts/Quicksand-Regular.ttf"),
    "Quicksand-Bold": require("../assets/fonts/Quicksand-Bold.ttf"),
  });

  if (!fontsLoaded) return <View />;

  return (
    <ThemeProvider theme={theme}>
      <ImageBackground source={bg} resizeMode="cover" style={styles.container}>
        <Slot 
        screenOptions={{
          animation: "fade_from_bottom",
        }}
        />
      </ImageBackground>
    </ThemeProvider>
  );
}

const styles = StyleSheet.create({
  container: { 
    flex: 1,
   },
});

