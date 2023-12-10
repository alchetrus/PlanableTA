import React from 'react';
import {Pressable, StyleSheet, Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {secondary80, secondaryTransparent} from '../constants/colors.ts';

interface ModalTitleComponentProps {
  modalTitle: string;
  onClicked: () => void;
}
export const ModalTitleComponent = ({
  modalTitle,
  onClicked,
}: ModalTitleComponentProps) => {
  return (
    <View style={styles.topViewContainer}>
      <Pressable onPress={onClicked}>
        <Icon name="close" size={24} style={styles.icon} />
      </Pressable>
      <View style={styles.modalTitleContainer}>
        <Text style={styles.text}>{modalTitle}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  topViewContainer: {
    flexDirection: 'row',
    paddingHorizontal: 14,
    paddingVertical: 10,
    borderBottomColor: secondaryTransparent,
    borderBottomWidth: 1,
  },
  text: {
    fontFamily: 'SF Pro Text',
    fontSize: 17,
    fontStyle: 'normal',
    fontWeight: '600',
    color: 'black',
  },
  modalTitleContainer: {
    alignItems: 'center',
    display: 'flex',
    width: '85%',
    justifyContent: 'center',
  },
  icon: {
    color: secondary80,
  },
});
