import { Stack } from "expo-router";
import { StyleSheet, Text, View, Image, Dimensions, useColorScheme } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Page() {
  const theme = useColorScheme();
  const isDarkTheme = theme === 'dark';
  let ScreenHeight = Dimensions.get("window").height;
  let ScreenWidth = Dimensions.get("window").width;
  return (
    <SafeAreaView 
    style={[
       {
        flex: 1
      },
         isDarkTheme
          ? { backgroundColor: '#191919' } 
          : { backgroundColor: '#f2f3f4' },
        ]}>
      <Stack.Screen options={{ headerShown: false }}/>
    <View style={styles.container}>
      <View style={styles.main}>
        <Image 
          style={{ width: 300, height: 400, margin:344, marginBottom:390}}
          source={require("../assets/Cockroach.png")}
        />
      </View>
    </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    padding: 24,
  },
  main: {
    flex: 1,
    justifyContent: "center",
    maxWidth: 960,
    marginHorizontal: "auto",
  },
  title: {
    fontSize: 64,
    fontWeight: "bold",
  },
  subtitle: {
    fontSize: 36,
    color: "#38434D",
  },
});
