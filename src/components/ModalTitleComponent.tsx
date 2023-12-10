import React from 'react';
import {Pressable, StyleSheet, Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

interface ModalTitleComponentProps {
  modalTitle: string;
  onClicked: () => void;
}
export const ModalTitleComponent = (props: ModalTitleComponentProps) => {
  return (
    <View style={styles.topView}>
      <Pressable onPress={props.onClicked}>
        <Icon name="close" size={24} style={{color: '#5E6166'}} />
      </Pressable>
      <View
        style={{
          alignItems: 'center',
          display: 'flex',
          width: '85%',
          justifyContent: 'center',
        }}>
        <Text style={styles.text}>{props.modalTitle}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  topView: {
    flexDirection: 'row',
    paddingHorizontal: 14,
    paddingVertical: 10,
    borderBottomColor: '#0000000D',
    borderBottomWidth: 1,
  },
  text: {
    fontFamily: 'SF Pro Text',
    fontSize: 17,
    fontStyle: 'normal',
    fontWeight: '600',
    color: 'black',
  },
});
