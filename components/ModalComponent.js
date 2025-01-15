import React from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Modal,
  StyleSheet,
} from 'react-native';

export default function ModalComponent({
  modalVisible,
  setModalVisible,
  latitude,
  setLatitude,
  longitude,
  setLongitude,
  handleSetCoordinates,
}) {
  return (
    <Modal
      visible={modalVisible}
      animationType="slide"
      onRequestClose={() => setModalVisible(false)}
      transparent={true} // To add a backdrop effect
    >
      <View style={styles.modalBackdrop}>
        <View style={styles.modalContent}>
          <Text style={styles.modalText}>Latitude</Text>
          <TextInput
            style={styles.input}
            placeholder="Latitude"
            keyboardType="numeric"
            value={latitude}
            onChangeText={setLatitude}
          />
          <Text style={styles.modalText}>Longitude</Text>
          <TextInput
            style={styles.input}
            placeholder="Longitude"
            keyboardType="numeric"
            value={longitude}
            onChangeText={setLongitude}
          />
          <View style={styles.modalButtons}>
            <TouchableOpacity onPress={() => setModalVisible(false)}>
              <Text style={styles.buttonText}>Cancel</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={handleSetCoordinates}>
              <Text style={styles.buttonText}>Set Coordinates</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  modalBackdrop: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
    height: 230,
    width: 260,
    backgroundColor: 'white',
    borderRadius: 10,
    elevation: 5,
  },
  input: {
    width: 210,
    height: 40,
    backgroundColor: 'white',
    marginBottom: 10,
    paddingHorizontal: 10,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#ddd',
    fontSize: 13,
    paddingTop: 10,
  },
  modalButtons: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    width: '100%',
  },
  buttonText: {
    color: 'green',
    fontSize: 14,
    paddingHorizontal: 10,
    paddingVertical: 5,
    fontFamily: 'Poppins-Bold',
  },
  modalText: {
    color: 'black',
    fontFamily: 'Poppins-Bold',
    fontSize: 14,
    marginBottom: 1,
  },
});
