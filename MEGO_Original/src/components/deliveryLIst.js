import React, {Component} from 'react';
import {
  Container,
  Header,
  Body,
  Checkbox,
  Title,
  Card,
  CardItem,
  Left,
  Right,
  Icon,
  Content,
  Thumbnail,
  Grid,
  Col,
  Text,
  Button,
  Subtitle,
} from 'native-base';
import {StyleSheet} from 'react-native';
import {View} from 'react-native';
import MobilePhoneIcon from '../Icons/mobile_phone.svg';
//import Rating from '../Icons/Rating_Star.svg';
import {StackNavigator} from 'react-navigation';

export default class OkadaList extends Component {
  render() {
    return (
      <Card style={styles.card}>
        <CardItem>
          <Left>
            <Thumbnail
              source={require('../Images/Addo.jpeg')}
              style={styles.thumbnailImg}
            />
            <View style={{alignItems: 'flex-start', top: -3, marginRight: 5}}>
              <Title style={styles.SubtitleTextLeft}>Anim Addo</Title>
              <Subtitle style={styles.SubtitleTextLeft}>
                Number of rides
              </Subtitle>
              <Subtitle style={styles.SubtitleTextLeft}>Motor NO.</Subtitle>
              <Subtitle style={styles.SubtitleTextLeft}>Wait time</Subtitle>
            </View>
          </Left>
          <Right>
            <View style={{flexDirection: 'row'}}>
              <View
                style={{
                  alignItems: 'flex-start',
                  top: 5,
                  marginRight: 5,
                  marginTop: 10,
                }}>
                <Subtitle style={styles.SubtitleTextRight}>1054</Subtitle>
                <Subtitle style={styles.SubtitleTextRight}>M-2319-19</Subtitle>
                <Subtitle style={styles.SubtitleTextRight}>10mins</Subtitle>
              </View>
              <View
                style={{
                  flexDirection: 'column',
                  alignItems: 'center',
                  marginTop: 15,
                }}>
                <Text style={{top: -15, marginBottom: 5}}>5.0</Text>
                <Button style={{borderRadius: 0, backgroundColor: '#FFF'}}>
                  <MobilePhoneIcon fill={'#000000'} />
                </Button>
              </View>
            </View>
          </Right>
        </CardItem>
      </Card>
    );
  }
}

const styles = StyleSheet.create({
  thumbnailImg: {
    width: 80,
    height: 80,
    borderRadius: 40,
  },
  card: {
    //borderRadius: 5,
    //borderColor: '#000000',
  },
  SubtitleTextLeft: {
    borderBottomWidth: 5,
    //textShadowColor: '#000000',
  },
  SubtitleTextRight: {
    paddingTop: 5,
    fontWeight: 'bold',
    //borderColor: '#000000',
    //fontStyle: '#000000',
  },
});
