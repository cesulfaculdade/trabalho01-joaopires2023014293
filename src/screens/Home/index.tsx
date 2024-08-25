import { FlatList, Image, Alert, TouchableOpacity, Text, TextInput, View } from "react-native";
import { styles } from "./styles";
import { MaterialIcons } from "@expo/vector-icons";
import shopping from "../../assets/shopping_list.png";
import { useState } from "react";
import { Product } from "../../components/Product";
import { CountProducts } from "../../components/CountProducts/";

type Product = {
    name: string;
    done: boolean;
  };


  export function Home() {
    const [products, setProducts] = useState<Product[]>([]);
    const [productName, setProductName] = useState("");
  
    const productDone = products.reduce((acc, product) => {
      return product.done ? acc + 1 : acc;
    }, 0);
  
    function handleProductAdd() {
      if (products.filter(({ name }) => name === productName).length >= 1) {
        return Alert.alert(
          "Produto já cadastrado!",
          "Já existe um produto na lista com este nome."
        );
      }
      if (productName.length === 0) {
        return Alert.alert("Adicione um produto válido!");
      }
      setProducts((prevState) => [
        ...prevState,
        { name: productName, done: false },
      ]);
      setProductName("");
    }
  
    function handleProductRemove(name: string) {
      Alert.alert("Remover", `Deseja remover o produto ${name}?`, [
        {
          text: "Sim",
          onPress: () =>
            setProducts((prevState) =>
              prevState.filter((product) => product.name !== name)
            ),
        },
        {
          text: "Não",
          style: "cancel",
        },
      ]);
    }
  
    function handleProductDone(name: string) {
      setProducts((prevState) =>
        prevState.map((product) =>
          product.name === name ? { ...product, done: !product.done } : product
        )
      );
    }

    
    return (
        <View style={styles.container}>
            <View style={styles.purpleBox}>
                <Text style={styles.title}>
                  Lista de Compras
                </Text>
            </View>

            <View style={styles.form}>
                <View style={styles.inputBox}>
                    <TextInput style={styles.input}
                        placeholder="Adicione um novo produto"
                        placeholderTextColor='#808080'
                        keyboardType='default'
                        onChangeText={setProductName}
                        value={productName}>
                    </TextInput>

                    <TouchableOpacity style={styles.button} onPress={handleProductAdd}>
                        <MaterialIcons
                        style={styles.textButton}
                        name="add-circle-outline"
                        size={16}
                        color="#F2F2F2"
                        />
                    </TouchableOpacity>
                </View>

                <View style={styles.textBox}>
                  <CountProducts
                  name={"Produtos"}
                  color="#31C667"
                  numbers={products.length}
                  />

                  <CountProducts
                  name={"Finalizados"}
                  color="#7A4A9E"
                  numbers={productDone}
                  />
                </View>

                <View>
                  <FlatList
                  data={products}
                  keyExtractor={(item) => item.name}
                  renderItem={({ item }) => (
                  <Product
                  name={item.name}
                  done={item.done}
                  onRemove={() => handleProductRemove(item.name)}
                  onRadioPress={() => handleProductDone(item.name)}
                  />
                  )}

              showsVerticalScrollIndicator={false}
              contentContainerStyle={products.length <= 0 && styles.list}
              ListEmptyComponent={() => (
                <View style={styles.emptyBox}>
                  <Image source={shopping}></Image>
                    <Text style={styles.boldText}>
                      Você ainda não tem produtos na lista de compra
                    </Text>
                    <Text style={styles.normalText}>
                      Adicione produtos e organize sua lista de compras
                    </Text>
                  </View>
                  )}/>
                </View> 
            </View>

        </View>
  );
}