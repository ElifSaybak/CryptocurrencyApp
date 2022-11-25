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
import {toast} from '../utils/index';
import {UPDATE_PERIOD_TIME} from '../config/index';
import reactotron from '../config/reactotron';

export const ModalAlarm = ({name, price}) => {
  const theme = useTheme();
  const [modalVisible, setModalVisible] = useState(false);

  const [priceInput, setPriceInput] = useState('');
  const [limitType, setLimitType] = useState(0);

  var alarmTimer;

  const setAlarm = text => {
    if (text && text < price) {
      setLimitType(0);
    } else {
      setLimitType(1);
    }
    alarmTimer = setTimeout(() => {
      if (limitType === 0) {
        lowLimit();
      } else {
        hightLimit();
      }
    }, UPDATE_PERIOD_TIME);
  };

  const toastAlarm = () => {
    clearTimeout(alarmTimer);
    reactotron.log(`Desired value: ${priceInput}`);
    return toast.alarm({
      title: `Value of ${name}: ${price}`,
      description: `Desired value: ${priceInput}`,
    });
  };
  const hightLimit = () => {
    if (price > priceInput) {
      toastAlarm();
    }
  };

  const lowLimit = () => {
    if (price <= priceInput) {
      toastAlarm();
    }
  };

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
                <Icon name="close" size={45} color={theme.greenMain} />
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
                setModalVisible(!modalVisible), setAlarm(priceInput);
              }}>
              <Text style={modalAlarm(theme).textStyle}>Set Alarm</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
      <TouchableOpacity onPress={() => setModalVisible(true)}>
        <Icon name="bell-ring" size={45} color={theme.greenMain} />
      </TouchableOpacity>
    </View>
  );
};
