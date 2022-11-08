import React, {useState} from 'react';
import {
  Modal,
  Text,
  Pressable,
  View,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {useTheme} from 'styled-components';
import {modalAlarm} from '../assets/css/index';

export const ModalAlarm = ({price}) => {
  const theme = useTheme();
  const [modalVisible, setModalVisible] = useState(false);

  const [priceInput, setPriceInput] = useState('');

  return (
    <View style={modalAlarm(theme).centeredView}>
      <Modal animationType="slide" transparent={true} visible={modalVisible}>
        <View style={modalAlarm(theme).centeredView}>
          <View style={modalAlarm(theme).modalView}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}>
              <Text style={modalAlarm(theme).modalText}>
                Cryptocurrency Alarm
              </Text>
              <TouchableOpacity onPress={() => setModalVisible(!modalVisible)}>
                <Icon name="close" size={45} color={theme.blueLight} />
              </TouchableOpacity>
            </View>
            <TextInput
              placeholder={price}
              style={modalAlarm(theme).inputStyle}
              value={priceInput}
              onChangeText={text => setPriceInput(text)}
              underlineColorAndroid="transparent"
            />
            <Pressable
              style={modalAlarm(theme).button}
              onPress={() => {
                setModalVisible(!modalVisible);
              }}>
              <Text style={modalAlarm(theme).textStyle}>Set Alarm</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
      <TouchableOpacity onPress={() => setModalVisible(true)}>
        <Icon name="bell-ring" size={45} color={theme.blueLight} />
      </TouchableOpacity>
    </View>
  );
};
