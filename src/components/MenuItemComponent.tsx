import React from 'react';
import {Pressable, StyleSheet, Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {secondary80, secondaryTransparent} from '../constants/colors.ts';

interface MenuItemComponentProps {
  itemTitle: string;
  itemIcon: string;
  onClick: () => void;
}
export const MenuItemComponent = (props: MenuItemComponentProps) => {
  return (
    <Pressable onPress={props.onClick}>
      <View style={styles.menuItemView}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <View style={styles.iconContainer}>
            <Icon name={props.itemIcon} style={styles.menuItemImage} />
          </View>
          <Text style={styles.menuItemText}>{props.itemTitle}</Text>
        </View>
        <Icon name={'chevron-right'} style={styles.menuItemIcon} />
      </View>
    </Pressable>
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
    backgroundColor: secondaryTransparent,
    borderRadius: 10,
    marginEnd: 12,
  },
  menuItemImage: {
    fontSize: 24,
    color: secondary80,
  },
  menuItemIcon: {
    fontSize: 20,
    color: secondary80,
  },
  menuItemText: {
    fontFamily: 'SF Pro Text',
    fontSize: 15,
    fontStyle: 'normal',
    fontWeight: '400',
    lineHeight: 20,
    color: 'black',
  },
});
