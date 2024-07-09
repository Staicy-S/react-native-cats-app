import { StatusBar } from "expo-status-bar";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";
import { Image } from "expo-image";

export default function App() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <View style={styles.navigation}>
          <Text style={styles.navigationMenues}>Home</Text>
          <Text style={styles.navigationMenues}>Gallery</Text>
          <Text style={styles.navigationMenues}>Contact</Text>
        </View>
        <View style={styles.main}>
          <View style={styles.mainUpperPart}>
            <Text style={styles.heading}>Cats 🐱</Text>
            <Text style={styles.subHeading}>
              Everything you need to know about Cats
            </Text>
            <Text style={styles.paragraph}>
              Cats are very lovely animals. Treat them with kindness and respect
              and they will reward you with affection! Sometimes, you can meet
              cats in the wild.{"\n"}
              {"\n"}I have been friends with a cat for a very long time, nearly
              10 years, until she unfortunately passed away. I encountered him
              every week before going to work. He was a very big cat! He loved
              my backpack and took many opportunities to make himself
              comfortable on it. {"\n"}
              {"\n"}You never know if a cat you meet might become a dear friend
              to you. So enjoy every cat encounter you can get 😻
            </Text>
          </View>
          <Image
            source="https://images.unsplash.com/photo-1511044568932-338cba0ad803?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            style={styles.image}
          />
          <Pressable
            onPress={() => console.log("pressed")}
            style={styles.button}
          >
            <Text style={styles.buttonText}>Go to Gallery</Text>
          </Pressable>
        </View>
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
    fontSize: 40,
  },
  subHeading: {
    fontSize: 20,
  },
  main: {
    padding: 10,
    alignItems: "center",
    gap: 20,
  },
  mainUpperPart: {
    height: 300,
    alignItems: "center",
  },
  paragraph: {
    textAlign: "left",
  },
  image: {
    width: 220,
    height: 220,
    borderWidth: 5,
    borderRadius: 20,
  },
  button: {
    backgroundColor: "orange",
    padding: 15,
    borderRadius: 20,
  },
  buttonText: {
    fontSize: 20,
  },
  footer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    padding: 10,
    backgroundColor: "darkorange",
  },
  footerMenues: {
    color: "white",
  },
});
