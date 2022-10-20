import { StatusBar } from "expo-status-bar";
import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import Item from "./Item";
import img1 from "./assets/Data_Examination_4_6/a.png";

export default function App() {
  const data = [
    {
      id: 1,
      name: "Peter Luger",
      price: "$48.00",
      rate: "9.2",
      like: true,
      img: img1,
    },
    {
      id: 2,
      name: "Peter Luger",
      price: "$44.00",
      rate: "4.2",
      like: true,
      img: "./assets/Data_Examination_4_6/a.png",
    },
    {
      id: 3,
      name: "Angus bugger",
      price: "$12.00",
      rate: "2.2",
      like: false,
      img: "./assets/Data_Examination_4_6/b.png",
    },
    {
      id: 4,
      name: "Angus bugger",
      price: "$56.00",
      rate: "3.2",
      like: false,
      img: "./assets/Data_Examination_4_6/b.png",
    },
  ];
  return (
    <View style={styles.container}>
      <View style={styles.headers}>
        <Image source={require("./assets/Data_Examination_4_6/v.png")}></Image>
        <Text>Home</Text>
        <Image source={require("./assets/Data_Examination_4_6/dn.png")} />
      </View>
      <Text style={styles.text}>Find Best Burger In your city</Text>
      <View style={styles.search}>
        <TextInput
          style={styles.inputText}
          placeholder="search...."
        ></TextInput>
        <TouchableOpacity>
          <Image source={require("./assets/Data_Examination_4_6/s.png")} />
        </TouchableOpacity>
      </View>
      <Text style={styles.text}> Near you now </Text>
      <View>
        <FlatList
          numColumns={2}
          data={data}
          renderItem={Item}
          keyExtractor={(item) => item.id}
        ></FlatList>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 30,
    flex: 1,
    backgroundColor: "#fff",
  },
  headers: {
    padding: 20,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  text: {
    marginLeft: 20,
    fontWeight: "700",
    fontSize: 20,
    marginBottom: 20,
  },
  search: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  inputText: {
    width: 250,
    borderColor: "#808080",
    borderWidth: 3,
    marginLeft: 20,
    borderRadius: 100,
  },
});
