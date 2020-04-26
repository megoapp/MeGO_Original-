import React, {Component} from 'react';
import {View, StyleSheet, TouchableHighlight, Text} from 'react-native';

import t from 'tcomb-form-native'; // 0.6.9

const Form = t.form.Form;

var Gender = t.enums({
  M: 'Male',
  F: 'Female',
});

var options = {
  label: 'My struct label', // <= form legend, displayed before the fields
};

var options = {
  auto: 'placeholders',
  order: ['firstname', 'Surname', 'email', 'Pin', 'birthDate', 'gender'],
  fields: {
    firstname: {
      label: 'Firstname', // <= label for the name field
    },
    Surname: {
      label: 'Surname', // <= label for the name field
    },
    email: {
      label: 'Email', // <= label for the name field
    },
    Pin: {
      label: 'Pin', // <= label for the name field
    },
    birthDate: {
      mode: 'date', // display the Date field as a DatePickerAndroid
    },
  },
};

const User = t.struct({
  firstname: t.String,
  Surname: t.String,
  email: t.String,
  Pin: t.Number,
  terms: t.Boolean,
  gender: Gender,
  birthDate: t.Date,
});

export default class CustomerData extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Form type={User} options={options} />
        <TouchableHighlight
          style={styles.button}
          onPress={this.onPress}
          underlayColor="#99d9f4">
          <Text style={styles.buttonText}>Save</Text>
        </TouchableHighlight>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    marginTop: 50,
    padding: 20,
    backgroundColor: '#ffffff',
  },
});
