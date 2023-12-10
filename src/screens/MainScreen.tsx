import React from 'react';
import {Modal, ScrollView, StyleSheet, View} from 'react-native';
import {ProfileComponent} from '../components/ProfileComponent.tsx';
import {MenuGroupComponent} from '../components/MenuGroupComponent.tsx';
import {MenuItemComponent} from '../components/MenuItemComponent.tsx';
import {MenuLogoutItemComponent} from '../components/MenuLogoutItemComponent.tsx';
import {ModalTitleComponent} from '../components/ModalTitleComponent.tsx';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
//TODO: FIX INLINE STYLES
//TODO: FIND BETTER STYLE NAMES

type MainScreenProps = {
  navigation: NativeStackNavigationProp<any, 'MainScreen'>;
};

export const MainScreen = ({navigation}: MainScreenProps) => {
  return (
    <View>
      <Modal animationType={'slide'} visible={true}>
        <ModalTitleComponent modalTitle={'Profile'} onClicked={() => {}} />
        <ScrollView style={styles.scrollView}>
          <View>
            <ProfileComponent />
          </View>
          <MenuGroupComponent groupTitle={'profile'}>
            <MenuItemComponent
              itemTitle={'Name & Email'}
              itemIcon={'person-outline'}
              onClick={() => {
                navigation.navigate('NameAndEmailScreen');
              }}
            />
            <MenuItemComponent
              itemTitle={'Password'}
              itemIcon={'key'}
              onClick={() => {}}
            />
          </MenuGroupComponent>
          <MenuGroupComponent groupTitle={'preferences'}>
            <MenuItemComponent
              itemTitle={'Time & Region'}
              itemIcon={'location-on'}
              onClick={() => {}}
            />
            <MenuItemComponent
              itemTitle={'Notifications'}
              itemIcon={'notifications-none'}
              onClick={() => {}}
            />
            <MenuItemComponent
              itemTitle={'Privacy & Security'}
              itemIcon={'translate'}
              onClick={() => {}}
            />
            <MenuItemComponent
              itemTitle={'Appearance'}
              itemIcon={'person-outline'}
              onClick={() => {}}
            />
          </MenuGroupComponent>
          <MenuGroupComponent groupTitle={'more'}>
            <MenuItemComponent
              itemTitle={'Contact Support'}
              itemIcon={'chat-bubble-outline'}
              onClick={() => {}}
            />
            <MenuItemComponent
              itemTitle={'Terms of Service'}
              itemIcon={'edit-document'}
              onClick={() => {}}
            />
            <MenuItemComponent
              itemTitle={'Privacy Policy'}
              itemIcon={'shield'}
              onClick={() => {}}
            />
            <MenuItemComponent
              itemTitle={'App Version - 1.43.7'}
              itemIcon={'layers'}
              onClick={() => {}}
            />
          </MenuGroupComponent>
          <View style={{marginVertical: 24}}>
            <MenuLogoutItemComponent />
          </View>
        </ScrollView>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    paddingHorizontal: 16,
    paddingTop: 24,
  },
});
