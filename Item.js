import { Image, Text, View } from "react-native";
function Item({ item }) {
  return (
    <View style={{ padding: 30, paddingRight: 20 }}>
      <View style={{ padding: 10 }}>
        <Image
          source={require("./assets/Data_Examination_4_6/a.png")}
          style={{ width: 100, height: 100 }}
        ></Image>
      </View>
      <Text>{item.name}</Text>
      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <Text>{item.price}</Text>
        {item.like ? (
          <Image
            source={require("./assets/Data_Examination_4_6/vh.png")}
          ></Image>
        ) : (
          <Image
            source={require("./assets/Data_Examination_4_6/va.png")}
          ></Image>
        )}
      </View>
    </View>
  );
}

export default Item;
