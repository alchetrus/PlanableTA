import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {secondary60} from '../constants/colors.ts';

export const ProfileComponent = () => {
  const profileImage = require('../assets/profile.jpg');

  return (
    <View style={styles.profileView}>
      <Image style={styles.profileImage} source={profileImage} />
      <View style={styles.profileDataView}>
        <Text style={styles.textProfileName}>Terry Jenkins</Text>
        <Text style={styles.textProfileInfo}>terryjenkins@gmail.com</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  profileImage: {
    width: 64,
    height: 64,
    borderRadius: 12,
  },
  profileView: {
    flexDirection: 'row',
  },
  profileDataView: {
    flexDirection: 'column',
    marginStart: 12,
  },
  textProfileName: {
    color: 'black',
    fontWeight: '600',
    fontSize: 22,
    fontFamily: 'SF Pro Display',
  },
  textProfileInfo: {
    color: secondary60,
    fontSize: 17,
    fontWeight: 'normal',
    fontFamily: 'SF Pro Text',
  },
});
