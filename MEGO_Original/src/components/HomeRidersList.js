import React, {Component} from 'react';
import {
  Title,
  Card,
  CardItem,
  Left,
  Right,
  Thumbnail,
  Text,
  Subtitle,
} from 'native-base';
import {StyleSheet} from 'react-native';
import {View} from 'react-native';
//import MobilePhoneIcon from '../Icons/mobile_phone.svg';
import CallModal from '../components/CallModal';

export default class RidersList extends Component {
  state = {
    isModalVisible: false,
  };

  openModal = () => {
    this.setState({
      isModalVisible: true,
    });
  };

  toggleModal = () => {
    this.setState({
      isModalVisible: !this.state.isModalVisible,
    });
  };

  closeModal = () => {
    this.setState({
      isModalVisible: false,
    });
  };
  render() {
    return (
      <View style={{flex: 1}}>
        <View style={{paddingStart: 20, paddingBottom: 10}}>
          <Text style={{fontWeight: '500'}}> Riders near you</Text>
        </View>
        <Card style={styles.card}>
          <CardItem style={styles.borderCard}>
            <Left>
              <Thumbnail
                source={require('../Images/Addo.jpeg')}
                style={styles.thumbnailImg}
              />
              <View
                style={{
                  alignItems: 'flex-start',
                  top: -3,
                  marginRight: 5,
                }}>
                <Title style={styles.SubtitleTextLeft}>Anim Addo</Title>
                <Subtitle style={styles.SubtitleTextLeft}>
                  Number of rides
                </Subtitle>
                <Subtitle style={styles.SubtitleTextLeft}>Motor No.</Subtitle>
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
                  <Subtitle style={styles.SubtitleTextRight}>
                    M-2319-19
                  </Subtitle>
                  <Subtitle
                    style={{...styles.SubtitleTextRight, color: '#008000'}}>
                    10 mins
                  </Subtitle>
                </View>
                <View
                  style={{
                    flexDirection: 'column',
                    alignItems: 'center',
                    marginTop: 15,
                  }}>
                  <Text style={styles.ratingStyle}>5.0</Text>
                  <CallModal />
                </View>
              </View>
            </Right>
          </CardItem>
        </Card>
      </View>
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
    alignItems: 'center',
    width: 410,
    justifyContent: 'center',
    paddingLeft: 5,
    borderRadius: 15,
    //borderColor: '#000000',
  },
  SubtitleTextLeft: {
    borderBottomWidth: 5,
    fontWeight: '500',
    color: '#000',
    //textShadowColor: '#000000',
  },
  SubtitleTextRight: {
    paddingTop: 6,
    fontWeight: '500',
    fontSize: 12,
    //borderColor: '#000000',
    //fontColor: '#000000',
  },
  ratingStyle: {
    top: -15,
    marginBottom: 5,
    fontWeight: '500',
  },
  borderCard: {
    borderRadius: 15,
  },
});
