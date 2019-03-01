import React from 'react';
import { StyleSheet, Text, View, ScrollView, Button, Image, TouchableOpacity } from 'react-native';

export default class App extends React.Component {
  render() {
    return (

      <View>
        <View style={{flex:1,flexDirection:'row'}}>
        <TouchableOpacity style={styles.menuButton} onPress={this._onPressButton}>
              <Image
                source={require('./assets/menu.png')}
              />
        </TouchableOpacity>
        <TouchableOpacity style={styles.ksdtLogoButton} onPress={this._onPressButton}>
              <Image
                source={require('./assets/ksdt_logo.png')}
              />
        </TouchableOpacity>
        </View>
        <ScrollView>
          <Text>o KSDT!</Text>
        </ScrollView>
      </View>


    );
  }
}

const styles = StyleSheet.create({

  menuButton: {
      paddingLeft: 16,
      paddingTop: 35
  },
  ksdtLogoButton: {

      paddingLeft: 297,
      paddingTop: 35
  }
});