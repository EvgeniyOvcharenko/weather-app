import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import {
  StyleSheet,
  Image,
  View,
  Pressable,
  TextInput,
  Modal,
} from 'react-native';
import { getCurrentWeather, getWeekWeather } from '../../../api/getWeatherInfo';
import {
  saveWeekWeather,
  saveCurrentWeather,
} from '../../../redux/reducers/weatherReducer';
import { saveCity } from '../../../redux/reducers/cityReducer';
import { ICONS } from '../../../consts/icons';
import { Dispatch, AnyAction } from 'redux';
import { RootState } from '../../../redux/store';

const { MENU, LOOK, ARROW } = ICONS;

const getWeatherInfo = (storeCity: string, dispatch: Dispatch<AnyAction>) => {
  Promise.all([getCurrentWeather(storeCity), getWeekWeather(storeCity)]).then(
    resp => {
      const [currentResponse, weeklyResponse] = resp;
      dispatch(saveCurrentWeather(currentResponse));
      dispatch(saveWeekWeather(weeklyResponse));
    },
  );
};

const Header: React.FC = () => {
  const dispatch = useDispatch();
  const data = useSelector((store: RootState) => store.cityReducer.city);

  const navigation = useNavigation();
  const [modalVisible, setModalVisible] = useState(false);

  const cityName = (text: string) => {
    setModalVisible(false);
    dispatch(saveCity(text));
  };

  useEffect(() => {
    if (data) {
      getWeatherInfo(data, dispatch);
    }
  }, [data, dispatch]);

  return (
    <>
      <Modal
        animationType="slide"
        visible={modalVisible}
        transparent={true}
        statusBarTranslucent={true}>
        <View style={styles.modal}>
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.input}
              returnKeyLabel="Done"
              returnKeyType="done"
              placeholder="City"
              maxLength={15}
              onSubmitEditing={event => cityName(event.nativeEvent.text)}
            />
            <Pressable onPress={() => setModalVisible(false)}>
              <Image source={ARROW} style={styles.modalIcon} />
            </Pressable>
          </View>
        </View>
      </Modal>
      <View style={styles.header}>
        <Pressable
          onPress={() => {
            setModalVisible(true);
          }}>
          <Image source={LOOK} style={styles.headerIcon} />
        </Pressable>
        <Pressable onPress={() => navigation.navigate('SevenDaysScreen')}>
          <Image source={MENU} style={styles.headerIcon} />
        </Pressable>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  header: {
    paddingLeft: 20,
    paddingRight: 20,
    paddingBottom: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  headerIcon: {
    width: 30,
    height: 30,
  },
  modal: {
    flex: 1,
    backgroundColor: 'rgba(220, 133, 111, 0.8)',
    alignItems: 'center',
  },
  inputContainer: {
    marginTop: '30%',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: 'rgba(111, 71, 111, 0.9)',
    borderWidth: 4,
    width: '90%',
    borderRadius: 20,
  },
  input: {
    marginLeft: 30,
    fontSize: 30,
    color: 'black',
    width: '75%',
    textDecorationColor: 'green',
    textDecorationStyle: 'double',
  },
  modalIcon: {
    marginRight: 30,
    width: 40,
    height: 40,
    transform: [{ rotate: '270deg' }],
  },
});

export default Header;
