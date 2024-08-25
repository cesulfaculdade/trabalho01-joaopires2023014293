import { Text, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { MaterialIcons } from "@expo/vector-icons";

type Props = {
  name: string;
  done: boolean;
  onRemove: () => void;
  onRadioPress: () => void;
};

export function Product({ name, done, onRemove, onRadioPress }: Props) {
  return (
    <View
      style={{ ...styles.container, borderColor: done ? "#808080" : "#D9D9D9" }}
    >
      <TouchableOpacity style={styles.radioButton} onPress={onRadioPress}>
        {done ? (
          <MaterialIcons name="check-circle" size={24} color="#7A4A9E" />
        ) : (
          <MaterialIcons name="radio-button-off" size={24} color="#31C667" />
        )}
      </TouchableOpacity>

      <Text style={done ? styles.descriptionDone : styles.descriptionDo}>
        {name}
      </Text>

      <TouchableOpacity style={styles.buttonRemove} onPress={onRemove}>
        <MaterialCommunityIcons
          name="trash-can-outline"
          size={24}
          color="#262626"
        />
      </TouchableOpacity>
    </View>
  );
}