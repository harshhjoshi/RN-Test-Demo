import React, {useEffect, useRef, useState} from 'react';
import {
  Image,
  Platform,
  ScrollView,
  TextInput,
  TouchableOpacity,
  View,
  ImageBackground,
  KeyboardAvoidingView,
} from 'react-native';
import {
  colors,
} from '../../styles/variables';
import {styles} from './LoginStyles';
import CountryPicker from 'react-native-country-picker-modal';
import {TouchableWithoutFeedback} from 'react-native-gesture-handler';
import TextContaint from '../../Components/TextContaint';
import ImageContaint from '../../Components/ImageContaint';

const LoginScreen: React.FC  = () => {
  const [, setPassError] = useState(false);
  const [, setEmailError] = useState(false);
  const [, setvalidPasswordError] = useState(false);
  const [addresses, setAddresses] = useState<string[]>([]);
  const addressInputsRef = useRef<Array<TextInput | null>>(Array(addresses.length).fill(null));

  const [countryCode, setcountryCode] = useState(91);
  const [countryImage, setcountryImage]: any = useState('IN');

  interface FormState {
    name: string;
    countryCode: Number;
    phoneNumber: string;
    primaryAddress: string;
    address: string[];
  }

  const [Form, setForm] = useState<FormState>({
    name: '',
    countryCode: countryCode,
    phoneNumber: '',
    primaryAddress: '',
    address: [...addresses],
  });

  const addAddressInput = () => {
    const newInputRef = React.createRef<TextInput>();
    addressInputsRef.current.push(newInputRef);
    setAddresses([...addresses, '']);
  };

  const removeAddressInput = (index: number) => {
    addressInputsRef.current.splice(index, 1);
    const updatedAddresses = [...addresses];
    updatedAddresses.splice(index, 1);
    setAddresses(updatedAddresses);
  };

  const updateAddress = (index: number, value: string) => {
    const updatedAddresses = [...addresses];
    updatedAddresses[index] = value;
    setAddresses(updatedAddresses);
  };

  useEffect(() => {
    setForm((prevForm: any) => ({
      ...prevForm,
      address: [...addresses],
    }));
  }, [addresses]);

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
      <ImageBackground
        style={styles.imageBackCotainer}
        resizeMode="stretch"
        source={require('../../Assests/images/mback.png')}>
        <View
          style={styles.childContainer}>
          <View
            style={styles.child2Container}>
            <ScrollView>
              <Image
                style={styles.logoImage}
                resizeMode="contain"
                source={require('../../Assests/images/logoWithText.png')}
              />

              <TextInput
                placeholder="Please Enter Name"
                placeholderTextColor={colors.primary}
                style={styles.textinput}
                maxLength={40}
                blurOnSubmit={false}
                onChangeText={value => {
                  if (value) {
                    setEmailError(false);
                  }
                  setForm({...Form, name: value.trim()});
                }}
              /> 

              <TouchableWithoutFeedback
                style={styles.countryContainer}>
                <CountryPicker
                  containerButtonStyle={styles.countryPicker}
                  withEmoji={false}
                  withFlag={true}
                  withFilter={true}
                  withCallingCode={true}
                  withCountryNameButton={true}
                  withCallingCodeButton={true}
                  withCurrencyButton={true}
                  onSelect={(item: any) => {
                    setcountryCode(item.callingCode);
                    setcountryImage(item.cca2);
                  }}
                  countryCode={countryImage}
                />
              </TouchableWithoutFeedback>
              <TextInput
                placeholder="Enter Phone Number"
                placeholderTextColor={colors.primary}
                maxLength={13}
                keyboardType={'number-pad'}
                style={styles.textinputPhone}
                value={Form.phoneNumber}
                onChangeText={value => {
                  if (value) {
                    setPassError(false);
                    setvalidPasswordError(false);
                  }
                  setForm({...Form, phoneNumber: value.trim()});
                }}
              />

              <TextInput
                placeholder={`Enter Primary Address`}
                placeholderTextColor={colors.primary}
                maxLength={16}
                style={styles.textPrimaryAddress}
                onChangeText={value => {
                  if (value) {
                    setEmailError(false);
                  }
                  setForm({...Form, primaryAddress: value.trim()});
                }}
              />

              {addresses.map((address, index) => (
                <View key={index}>
                  <TextInput
                    placeholder={`Enter Address ${index + 2}`}
                    placeholderTextColor={colors.primary}
                    maxLength={16}
                    style={styles.textMultipleAddress}
                    value={address}
                    onChangeText={value => updateAddress(index, value)}
                    ref={ref => (addressInputsRef.current[index] = ref)}
                  />

                  <TouchableOpacity
                    style={styles.deleteButtonContainer}
                    activeOpacity={0.8}
                    onPress={() => removeAddressInput(index)}>
                    <Image
                      style={styles.deleteIcon}
                      resizeMode="contain"
                      source={require('../../Assests/images/deleteIcon.png')}
                    />
                  </TouchableOpacity>
                </View>
              ))}

              <TouchableOpacity
                style={styles.addMoreAddressContainer}
                activeOpacity={0.8}
                onPress={addAddressInput}>
                  <ImageContaint styles={styles.addMoreAddressIcon} src={require('../../Assests/images/addMore.png')}></ImageContaint>
                <TextContaint
                  styles={styles.addMoreAddressText}
                  texts="Add More Addresses"></TextContaint>
              </TouchableOpacity>
            </ScrollView>
          </View>
          <TouchableOpacity
            onPress={() => console.log('Form:', Form)}
            style={styles.btn}
            activeOpacity={0.8}>
            <TextContaint
              styles={styles.buttonText}
              texts="LOGIN"></TextContaint>
          </TouchableOpacity>
          <TextContaint
            styles={styles.forgetPasswordText}
            texts="Forgot Password?"></TextContaint>
        </View>
      </ImageBackground>
    </KeyboardAvoidingView>
  );
};

export default LoginScreen;
