import React from 'react';
import {useDispatch, useSelector} from 'react-redux';

import { Text, View } from 'react-native';
import { Card, Button, Icon } from 'react-native-elements'

import { styles } from './styles'

export function Home() {
  return (
    <View style={styles.container}>
      <Card>
        <Card.Image source={require('../../../assets/icon.png')}>
          <Text style={{marginBottom: 10}}>
            The idea with React Native Elements is more about component structure than actual design.
          </Text>
          <Button
            style={styles.cardBtn}
            icon={<Icon name='code' color='#ffffff' />}
            title='VIEW NOW' />
        </Card.Image>
      </Card>
    </View>
  );
}