import React from 'react';
import { StyleSheet, Picker, Text, View, Dimensions, TextInput, ToolbarAndroid, StatusBar } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import GeneralStatusBarColor from './Comps/GeneralStatusBarColor';
export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { text: '' };
  }
  render() {
    return (
      <View style={styles.container}>



        <GeneralStatusBarColor backgroundColor="#772ea2"
          barStyle="light-content" />


        <View style={styles.responsiveBox}>
          <Text style={styles.text}>Atenção, esse aplicativo não é oficial, então podem ocorrer erros.
          </Text>
        </View>

        <TextInput style={{ height: 50, width: 300, borderColor: 'gray', borderBottomWidth: 1 }}
          onChangeText={(text) => this.setState({ text })}
          value={this.state.text} placeholder="Digite seu nome!">

        </TextInput>

        <TextInput style={{ height: 50, width: 300, borderColor: 'gray', borderBottomWidth: 1 }}
          onChangeText={(text) => this.setState({ text })}
          value={this.state.text} placeholder="Digite seu CPF!"></TextInput>
        
        <Picker
          selectedValue={this.state.language}
          style={{ height: 50, width: 150 }}
          onValueChange={(itemValue, itemIndex) =>
            this.setState({ language: itemValue })
          }>
          <Picker.Item label="Quadra 1" value="1" />
          <Picker.Item label="Quadra 2" value="2" />
        </Picker>

      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  responsiveBox: {
    width: wp('100%'),
    height: hp('17%'),
    borderWidth: 4,
    borderColor: 'red',
    flexDirection: 'column',
    justifyContent: 'space-around',
  },
  text: {
    color: 'black'
  }
});