import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#808080",
    flexDirection: "row",
    alignItems: "center",
    padding: 12,
    marginBottom: 8,
    display: 'flex'
  },
  descriptionDo: {
    flex: 1,
    fontSize: 14,
    fontWeight: "regular",
    color: "#262626",
    marginHorizontal: 8
  },
  descriptionDone: {
    flex: 1,
    fontSize: 14,
    fontWeight: "regular",
    color: "#808080",
    marginHorizontal: 8,
    textDecorationLine: "line-through"
  },
  buttonRemove: {
    width: 32,
    height: 32,
    alignItems: "center",
    justifyContent: "center"
  },
  radioButton: {}
});