import { View, Text, Pressable, Modal, Alert } from "react-native";
import React, { useState } from "react";
import { Entypo } from "@expo/vector-icons";

const ModalComponent = () => {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <View>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible(!modalVisible);
        }}
      >
        <View>
          <View>
            <Text>Hello World!</Text>
            <Pressable
              //
              onPress={() => setModalVisible(!modalVisible)}
            >
              <Text>Hide Modal</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
      <Pressable onPress={() => setModalVisible(true)}>
        <Entypo name="menu" size={24} color="black" />
      </Pressable>
    </View>
  );
};

export default ModalComponent;
