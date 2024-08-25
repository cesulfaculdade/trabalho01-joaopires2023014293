import { Alert, TouchableOpacity, Text, TextInput, View } from "react-native";
import { styles } from "./styles";
import { MaterialIcons } from "@expo/vector-icons";
import { useState } from "react";
import { Product } from "../../components/Product";

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
                <Text style={styles.title}>Lista de Compras</Text>
            </View>

            <View style={styles.form}>
                <View style={styles.inputBox}>
                    <TextInput style={styles.input}
                        placeholder="Adicione um novo produto"
                        placeholderTextColor='#808080'
                        keyboardType='default'>
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
            </View>

        </View>
    )
}