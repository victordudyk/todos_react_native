import React, { useState } from "react";
import {
  Alert,
  Button,
  Modal,
  StyleSheet,
  TextInput,
  View,
} from "react-native";
import { THEME } from "../theme";

export const EditModal = ({ visible, onCancel, value, onSave }: any) => {
  const [title, setTitle] = useState(value);

  const saveHandler = () => {
    if (title.trim().length < 3) {
      Alert.alert(
        "Error!",
        `Min length sould be 3 symbols. Currently ${
          title.trim().length
        } sumbols.`
      );
    } else {
      onSave(title);
    }
  };

  return (
    <Modal visible={visible} animationType="slide" transparent={false}>
      <View style={styles.wrap}>
        <TextInput
          value={title}
          onChangeText={setTitle}
          style={styles.input}
          placeholder="Input title"
          autoCapitalize="none"
          autoCorrect={false}
          maxLength={64}
        />
        <View style={styles.buttons}>
          <View style={styles.button}>
            <Button
              title="Cancel"
              onPress={onCancel}
              color={THEME.DANGER_COLOR}
            />
          </View>
          <View style={styles.button}>
            <Button title="Save" onPress={saveHandler} />
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  wrap: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  input: {
    padding: 10,
    borderBottomColor: THEME.MAIN_COLOR,
    borderBottomWidth: 2,
    width: "80%",
  },
  button: {
    width: "40%",
  },
  buttons: {
    width: "80%",
    marginTop: 10,
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
});
