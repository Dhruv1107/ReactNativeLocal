import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  Linking,
  Alert,
  StatusBar,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import colors from '../constants/colors';
import {RowItem, RowSeparator} from '../components/RowItem';

const openLink = url =>
  Linking.openURL(url).catch(() =>
    Alert.alert('Sorry, something went wrong.', 'Please try again later.'),
  );

export default () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <StatusBar barStyle="dark-content" backgroundColor={colors.white} />

      <ScrollView>
        <RowItem
          title="Themes"
          onPress={() => alert('todo!')}
          rightIcon={<Icon name="add" size={20} color={colors.blue} />}
        />

        <RowSeparator />

        <RowItem
          title="React Native Basics"
          onPress={() =>
            openLink(
              'https://learn.reactnativeschool.com/p/react-native-basics-build-a-currency-converter',
            )
          }
          rightIcon={<Icon name="add" size={20} color={colors.blue} />}
        />

        <RowSeparator />

        <RowItem
          title="React Native by Example"
          onPress={() => openLink('https://reactnativebyexample.com')}
          rightIcon={<Icon name="add" size={20} color={colors.blue} />}
        />
      </ScrollView>
    </SafeAreaView>
  );
};
