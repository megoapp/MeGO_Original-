import React, {useState} from 'react';
import {View, Image, Platform, TextInput, StyleSheet} from 'react-native';
import {Text} from 'native-base';
import {AirbnbRating} from 'react-native-elements';
import {TouchableOpacity, ScrollView} from 'react-native-gesture-handler';

function Feedback({route, navigation}) {
  const [RiderName, setRiderName] = useState('Kwaku Manu');
  const [passengerRating, setpassengerRating] = useState(null);
  const [userFeedback, setuserFeedback] = useState(null);

  function ratingCompleted() {
    console.log('Rating is: ' + setpassengerRating(passengerRating));
  }

  return (
    <ScrollView style={Styles.screenContainer}>
      <View style={Styles.viewAlignment}>
        <Text style={Styles.labelText}> You are in place </Text>
      </View>
      <View style={Styles.viewAlignment}>
        <TouchableOpacity onPress={() => navigation.navigate('Login')}>
          <Image
            source={require('../Images/Addo.jpeg')}
            style={Styles.imageContainer}
          />
        </TouchableOpacity>
      </View>
      <View style={Styles.viewAlignment}>
        <Text style={Styles.riderLabel}>Your Rider </Text>
        <Text style={Styles.riderName}>{RiderName}</Text>
        <Text style={Styles.riderLabel}> How was your Trip ?</Text>
      </View>
      <View>
        <AirbnbRating
          count={5}
          reviews={['Terrible', 'Bad', 'OK', 'Good', 'Excellent']}
          defaultRating={0}
          size={30}
          ratingColor="#3498db"
          onFinishRating={ratingCompleted}
        />
      </View>
      <View style={Styles.viewAlignment}>
        <TextInput
          style={Styles.feedbackInput}
          placeholder="Your feedback is Valuable"
          value={userFeedback}
          onChangeText={() => {
            setuserFeedback({userFeedback});
          }}
          maxLength={200}
        />
        <View style={Styles.viewAlignment}>
          <TouchableOpacity
            style={Styles.submitButton}
            // onPress={navigation.navigate('Login')}
          >
            <Text style={Styles.submitText}>Submit</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
}

export default Feedback;

const Styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    backgroundColor: '#FFF',
  },

  viewAlignment: {
    alignItems: 'center',
  },

  labelText: {
    fontSize: 20,
    fontWeight: '500',
    marginBottom: 20,
    marginTop: 10,
  },

  imageContainer: {
    width: 200,
    height: 200,
    borderRadius: 200,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
  },

  riderName: {
    fontWeight: '700',
    fontSize: 20,
  },
  riderLabel: {
    fontSize: 15,
    fontWeight: '500',
    marginBottom: 10,
    marginTop: 10,
  },

  feedbackInput: {
    marginTop: 10,
    width: 400,
    height: '50%',
    paddingLeft: 10,
    fontSize: 20,
    borderWidth: 2,
    borderRadius: 10,
    borderColor: '#f1f1f1',
  },

  submitButton: {
    marginTop: 15,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000',
    borderRadius: 30,
    height: 45,
    width: 200,
  },

  submitText: {
    color: '#fff',
    fontWeight: '500',
    fontSize: 25,
  },
});
