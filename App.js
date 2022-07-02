import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, TextComponent, View } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.navBar}>
        <Text style={{ fontWeight: "bold", fontFamily: "", fontSize: 20 }}>
          <Text style={{ fontWeight: "200" }}>Data</Text> Idea
        </Text>
        <Text style={{ fontWeight: "bold", fontFamily: "", fontSize: 20 }}>
          Menu
        </Text>
      </View>
      <View>
        <View style={styles.blueContainers}>
          <Text style={styles.heading}>HTML</Text>
          <Text style={styles.subheading}>
            The language for building web pages
          </Text>
        </View>
        <View>
          <Text style={styles.greenButton}>Learn HTML</Text>
          <Text style={styles.grayButton}>HTML Reference</Text>
        </View>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    backgroundColor: "152238",
    alignItems: "center",
    padding: 20,
    margin: 20,
  },
  navBar: {
    display: "flex",
    width: 400,
    flexDirection: "row",
    justifyContent: "space-evenly",
    padding: 20,
    color: "#fff",
  },
  blueContainer: {
    backgroundColor: "152238",
  },
  greenButton: {
    backgroundColor: "#228B22",
    padding: 10,
    margin: 10,
    borderRadius: 10,
    color: "#fff",
    fontWeight: "bold",
    textAlign: "center",
  },
  grayButton: {
    backgroundColor: "#ccc",
    padding: 10,
    margin: 10,
    borderRadius: 10,
    color: "#000",
    fontWeight: "bold",
    textAlign: "center",
  },
  heading: {
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 50,
  },
  subheading: {
    fontWeight: "bold",
    padding: 20,
  },
});
