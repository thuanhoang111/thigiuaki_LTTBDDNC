import { useState } from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";

const data = [
  {
    id: 1,
    name: "Peter Luger",
    price: "$48.00",
    rate: "9.2",
    like: true,
    img: "./assets/Data_Examination_4_6/a.png",
    calo: "344kcal",
    des: "nhiều chất béo",
  },
  {
    id: 2,
    name: "Peter Luger",
    price: "$44.00",
    rate: "4.2",
    like: true,
    img: "./assets/Data_Examination_4_6/a.png",
    calo: "344kcal",
    des: "nhiều chất béo",
  },
  {
    id: 3,
    name: "Angus bugger",
    price: "$12.00",
    rate: "2.2",
    like: false,
    img: "./assets/Data_Examination_4_6/b.png",
    calo: "344kcal",
    des: "nhiều chất béo",
  },
  {
    id: 4,
    name: "Angus bugger",
    price: "$56.00",
    rate: "3.2",
    like: false,
    img: "./assets/Data_Examination_4_6/b.png",
    calo: "344kcal",
    des: "nhiều chất béo",
  },
];
function detailItem({ item }) {
  const [quantity, setQuantity] = useState(1);

  const handleIncrease = () => {
    setQuantity(quantity + 1);
  };

  const handleDecrease = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };
  return (
    <View style={{ flex: 1 }}>
      <Image
        source={require("./assets/Data_Examination_4_6/b.png")}
        style={{ width: "70%", height: 250 }}
      />
      <View style={{ borderColor: "#000", borderBottomWidth: 1 }}>
        <Text
          style={{
            fontSize: 20,
            fontWeight: "500",
          }}
        >
          Price: {data[1].price}
        </Text>
        <Text
          style={{
            fontSize: 20,
            fontWeight: "500",
            marginBottom: 20,
          }}
        >
          Describe: {data.name} :{data[1].des}
        </Text>
      </View>
      <View style={{ flexDirection: "row" }}>
        <Text>Quantity</Text>
        <TouchableOpacity
          style={{ backgroundColor: "#C4C4C4", width: 30, height: 30 }}
          onPress={() => handleIncrease()}
        >
          <Text>+</Text>
        </TouchableOpacity>
        <Text>{quantity}</Text>
        <TouchableOpacity
          onPress={() => handleDecrease()}
          style={{ backgroundColor: "#C4C4C4", width: 30, height: 30 }}
        >
          <Text>-</Text>
        </TouchableOpacity>
      </View>
      <View>
        <TouchableOpacity>
          <Text>Customize</Text>
        </TouchableOpacity>
      </View>
      <View>
        <TouchableOpacity>
          <Text>add to cast : {data.price}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default detailItem;
