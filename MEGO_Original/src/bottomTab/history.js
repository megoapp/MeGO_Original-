import React, {useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {CardItem, Card} from 'native-base';
import {ScrollView} from 'react-native-gesture-handler';
import {Divider} from 'react-native-elements';
import PickUp from '../Icons/pin_pick_up.svg';
import DropOff from '../Icons/pin_drop_off.svg';
import LoadMore from '../Icons/Icon awesome-arrow-circle-down.svg';

export function History() {
  const [pickUpAddress, setpickUpAddress] = useState('Tesano');
  const [dropOffAddress, setdropOffAddress] = useState('Kaneshie');
  const [tripID, settripID] = useState('ID: 230990');
  const [tripTime, settripTime] = useState('Today :5.15pm');
  return (
    <ScrollView>
      <View style={Styles.viewAlignment}>
        <Card style={Styles.cards}>
          <CardItem style={Styles.cardItems}>
            <View style={Styles.cardView}>
              <PickUp style={Styles.svgs} />
              <Text style={Styles.cardStaticText}>From : </Text>
              <Text style={Styles.pickUpText}>{pickUpAddress}</Text>
            </View>
          </CardItem>
          <Divider style={Styles.divider} />
          <CardItem style={Styles.cardItems}>
            <View>
              <View style={Styles.cardItemDirection}>
                <DropOff style={Styles.svgs} />
                <Text style={Styles.cardStaticText}>To : </Text>
                <Text style={Styles.pickUpText}>{dropOffAddress}</Text>
              </View>
            </View>
          </CardItem>
          <Divider style={Styles.dividerNew} />
          <View style={Styles.cardItemDirection}>
            <Text style={Styles.tripSid}>{tripID} </Text>
            <Text style={Styles.time}>{tripTime}</Text>
          </View>
        </Card>
      </View>
    </ScrollView>
  );
}

function HistoryTab({route, navigation}) {
  return (
    <ScrollView>
      <View style={Styles.viewAlignment}>
        <History />
      </View>
      <View style={Styles.viewAlignment}>
        <LoadMore
          fill={'#000'}
          backgroundColor={'#000'}
          width={40}
          height={40}
        />
      </View>
    </ScrollView>
  );
}

export default HistoryTab;

const Styles = StyleSheet.create({
  viewAlignment: {
    flex: 1,
    marginTop: 10,
    alignItems: 'center',
  },
  cards: {
    width: 370,
    borderRadius: 15,
  },

  cardItems: {
    width: 300,
    marginLeft: 10,
  },

  cardView: {
    flexDirection: 'row',
    width: 350,
    paddingTop: 5,
  },
  cardItemDirection: {
    flexDirection: 'row',
  },
  cardStaticText: {
    paddingTop: 5,
    paddingLeft: 10,
  },

  svgs: {
    paddingTop: 25,
  },
  pickUpText: {
    fontSize: 20,
    paddingLeft: 20,
  },
  time: {
    fontSize: 12,
    paddingTop: 5,
  },
  tripSid: {
    paddingTop: 5,
    marginLeft: 20,
    marginBottom: 10,
    marginRight: 150,
    color: 'grey',
  },
  divider: {
    backgroundColor: '#f1f1f1',
    height: 2,
    width: 250,
    marginLeft: 40,
    marginTop: 5,
    marginBottom: 5,
  },
  dividerNew: {
    backgroundColor: '#f1f1f1',
    height: 2,
    width: 340,
    marginLeft: 5,
    marginTop: 5,
    marginBottom: 5,
  },
});
