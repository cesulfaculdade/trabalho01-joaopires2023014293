import { Text, View } from "react-native";
import { styles } from "../CountProducts/styles";

type Props = {
  color: string;
  name: string;
  numbers: number;
};

export function CountProducts({ color, name, numbers }: Props) {
  return (
    <View style={styles.containerCounter}>
      <Text style={{ color: color, fontWeight: "bold" }}>{name}</Text>
      <View style={styles.container}>
        <Text style={{}}>{numbers}</Text>
      </View>
    </View >
  );
}