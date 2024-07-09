import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";

export default function App() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <View style={styles.navigation}>
          <Text style={styles.navigationMenues}>Home</Text>
          <Text style={styles.navigationMenues}>Gallery</Text>
          <Text style={styles.navigationMenues}>Contact</Text>
        </View>
        <Text style={styles.heading}>Cats 🐱</Text>
        <Text>Open up App.js to start working on your app!</Text>
        <View style={styles.footer}>
          <Text style={styles.footerMenues}>Datenschutz</Text>
          <Text style={styles.footerMenues}>Impressum</Text>
        </View>
        <StatusBar style="auto" />
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "space-between",
  },
  navigation: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 10,
    backgroundColor: "orange",
    width: "100%",
    marginBottom: 10,
  },
  navigationMenues: {
    fontSize: 18,
  },
  heading: {
    fontSize: 32,
  },
  footer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    padding: 10,
    backgroundColor: "beige",
  },
  footerMenues: {},
});
