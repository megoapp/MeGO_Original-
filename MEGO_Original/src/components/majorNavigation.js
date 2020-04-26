import React from 'react';
import {StyleSheet, View, Button} from 'react-native';

function MajorNavigation({route, navigation}) {
  return (
    <View style={styles.mainview}>
      <View style={styles.container}>
        <View style={styles.buttonContainer}>
          <Button
            title="Okada"
            type="outline"
            backgroundColor="#000"
            onPress={() => {
              navigation.navigate('Login', {
                itemId: 86,
              });
            }}
          />
        </View>
        <View style={styles.buttonContainer}>
          <Button
            color="#000000"
            title="Delivery"
            type="outline"
            onPress={() => {
              navigation.navigate('Login', {
                itemId: 40,
              });
            }}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  mainview: {
    flex: 1,
    backgroundColor: '#fff',
  },

  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10,
    marginTop: 10,
  },
  buttonContainer: {
    flex: 1,
    paddingTop: 5,
    marginHorizontal: 15,
    backgroundColor: '#f1f1f1',
    borderColor: '#000',
    borderRadius: 10,
    borderWidth: 0.5,
  },
});

export default MajorNavigation;
