import React, {useRef, useState} from 'react';
import {
  Modal,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import {ModalTitleComponent} from '../components/ModalTitleComponent.tsx';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {
  functionalError100,
  neutral100,
  neutral80,
  primary100,
  secondary20,
  secondary40,
  secondary60,
  secondary80,
} from '../constants/colors.ts';

type NameAndEmailScreenProps = {
  navigation: NativeStackNavigationProp<any, 'NameAndEmailScreen'>;
};

export const NameAndEmailScreen = ({navigation}: NameAndEmailScreenProps) => {
  const [nameValue, setNameValue] = useState<string>('');
  const [emailValue, setEmailValue] = useState<string>('');
  const [nameError, setNameError] = useState<string>('');
  const [emailError, setEmailError] = useState<string>('');
  const secondTextInputRef = useRef<TextInput>(null);
  const [isNameFocused, setNameFocused] = useState(false);
  const [isEmailFocused, setEmailFocused] = useState(false);

  const isInputEmpty = () => nameValue === '' || emailValue === '';

  const validateName = (name: string) => {
    if (!/^[a-zA-Z ]+$/.test(name)) {
      setNameError('Name should only contain alphabets and spaces');
      return false;
    }
    setNameError('');
    return true;
  };

  const validateEmail = (email: string) => {
    if (!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)) {
      setEmailError('This email address is invalid');
      return false;
    }
    setEmailError('');
    return true;
  };

  return (
    <View>
      <Modal
        animationType={'slide'}
        visible={true}
        presentationStyle={'pageSheet'}>
        <ModalTitleComponent
          modalTitle={'Name & Email'}
          onClicked={() => navigation.replace('MainScreen')}
        />
        <View style={styles.mainContainer}>
          <View style={styles.textInputContainer}>
            <Text style={styles.labelText}>Name</Text>
            <TextInput
              style={[
                styles.textInput,
                isNameFocused && {borderColor: primary100},
              ]}
              placeholder={'Your Name'}
              placeholderTextColor={secondary80}
              value={nameValue}
              onChangeText={text => setNameValue(text)}
              autoFocus={true}
              autoCapitalize={'words'}
              onSubmitEditing={() => secondTextInputRef.current?.focus()}
              blurOnSubmit={false}
              returnKeyType={'next'}
              onFocus={() => setNameFocused(true)}
              onBlur={() => setNameFocused(false)}
            />
            {nameError && <Text style={styles.errorText}>{nameError}</Text>}
          </View>

          <View>
            <Text style={styles.labelText}>Email</Text>
            <TextInput
              style={[
                styles.textInput,
                isEmailFocused && {borderColor: primary100},
              ]}
              placeholder={'Email Address'}
              placeholderTextColor={secondary80}
              value={emailValue}
              onChangeText={text => {
                setEmailValue(text);
                setEmailError('');
              }}
              onFocus={() => {
                setEmailError('');
                setEmailFocused(true);
              }}
              onBlur={() => setEmailFocused(false)}
              ref={secondTextInputRef}
            />
            {emailError && <Text style={styles.errorText}>{emailError}</Text>}
          </View>
        </View>
        <View style={styles.bottomContainer}>
          <Pressable
            style={isInputEmpty() ? styles.disabledButton : styles.button}
            disabled={isInputEmpty()}
            onPress={() => {
              validateEmail(emailValue);
              validateName(nameValue);
            }}>
            <Text
              style={
                isInputEmpty() ? styles.disabledButtonText : styles.buttonText
              }>
              Save
            </Text>
          </Pressable>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  textInputContainer: {
    marginBottom: 24,
  },
  textInput: {
    borderRadius: 8,
    borderColor: secondary40,
    backgroundColor: neutral100,
    borderStyle: 'solid',
    borderWidth: 1,
    color: secondary80,
    paddingHorizontal: 12,
    paddingVertical: 11,
  },
  mainContainer: {
    paddingHorizontal: 16,
    paddingTop: 24,
  },
  labelText: {
    color: secondary60,
    marginBottom: 6,
  },
  button: {
    borderRadius: 8,
    alignItems: 'center',
    width: '100%',
    backgroundColor: primary100,
  },
  disabledButton: {
    borderRadius: 8,
    alignItems: 'center',
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: secondary20,
    backgroundColor: neutral80,
  },
  buttonText: {
    color: neutral100,
    paddingVertical: 12,
    fontSize: 17,
    fontFamily: 'SF Pro Text',
    fontStyle: 'normal',
    fontWeight: '400',
    lineHeight: 22,
  },
  disabledButtonText: {
    color: secondary40,
    paddingVertical: 12,
    fontSize: 17,
    fontFamily: 'SF Pro Text',
    fontStyle: 'normal',
    fontWeight: '400',
    lineHeight: 22,
  },
  bottomContainer: {
    marginTop: 'auto',
    marginHorizontal: 16,
    marginBottom: 16,
  },
  errorText: {
    color: functionalError100,
    fontSize: 15,
    fontFamily: 'SF Pro Text',
    fontStyle: 'normal',
    fontWeight: '400',
    lineHeight: 20,
  },
});
