import React, {ReactNode} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {secondary60} from '../constants/colors.ts';

interface MenuGroupComponentProps {
  groupTitle: String;
  children: ReactNode;
}

export const MenuGroupComponent = (props: MenuGroupComponentProps) => {
  return (
    <View style={styles.menuGroupContainer}>
      <Text style={styles.menuGroupText}>{props.groupTitle}</Text>
      {props.children}
    </View>
  );
};

const styles = StyleSheet.create({
  menuGroupText: {
    fontFamily: 'SF Pro Text',
    fontSize: 10,
    fontStyle: 'normal',
    fontWeight: '500',
    textTransform: 'uppercase',
    color: secondary60,
    letterSpacing: 2,
    marginBottom: 8,
  },
  menuGroupContainer: {
    marginTop: 24,
  },
});
