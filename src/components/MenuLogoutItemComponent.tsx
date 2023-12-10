import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { functionalError100, functionalError80, functionalErrorTransparent } from "../constants/colors.ts";

export const MenuLogoutItemComponent = () => {
  return (
    <View style={styles.menuItemView}>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <View style={styles.iconContainer}>
          <Icon name={'logout'} style={styles.menuItemImage} />
        </View>
        <Text style={styles.menuItemText}>Log Out</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  menuItemView: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 8,
  },
  iconContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 36,
    height: 36,
    backgroundColor: functionalErrorTransparent,
    borderRadius: 10,
    marginEnd: 12,
  },
  menuItemImage: {
    fontSize: 24,
    color: functionalError80,
  },
  menuItemText: {
    fontFamily: 'SF Pro Text',
    fontSize: 15,
    fontStyle: 'normal',
    fontWeight: '400',
    lineHeight: 20,
    color: functionalError100,
  },
});
