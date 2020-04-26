import React, {Component} from 'react';
import {Text} from 'native-base';
import {Dimensions, TouchableOpacity} from 'react-native';
import {View} from 'react-native';
import Modal from 'react-native-modal';
import MobilePhoneIcon from '../Icons/mobile_phone.svg';

export default class CallModal extends Component {
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
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'row',
        }}>
        <View style={{marginTop: 0, justifyContent: 'center'}}>
          {/* <TouchableOpacity onPress={() => this.openModal()}>
            <Text style={{textAlign: 'center'}}>Call rider</Text>
          </TouchableOpacity> */}
          <MobilePhoneIcon fill={'#000000'} onPress={() => this.openModal()} />

          <Modal
            animationIn="slideInUp"
            animationOut="slideOutDown"
            onBackdropPress={() => this.closeModal()}
            onSwipeComplete={() => this.closeModal()}
            swipeDirection="right"
            isVisible={this.state.isModalVisible}
            style={{
              backgroundColor: 'white',
              maxHeight: Dimensions.get('window').height / 2,
            }}>
            <View style={{flex: 1, justifyContent: 'center'}}>
              <Text style={{textAlign: 'center'}}>Call your Rider</Text>
            </View>
            <View
              style={{
                flex: 1,
                justifyContent: 'center',
                position: 'absolute',
                bottom: 0,
              }}>
              <View style={{flexDirection: 'row'}}>
                <TouchableOpacity
                  style={{backgroundColor: 'green', width: '50%'}}>
                  <Text
                    style={{color: 'white', textAlign: 'center', padding: 10}}>
                    Ok
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={{backgroundColor: 'red', width: '50%'}}
                  onPress={() => this.closeModal()}>
                  <Text
                    style={{color: 'white', textAlign: 'center', padding: 10}}>
                    Cancel
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </Modal>
        </View>
      </View>
    );
  }
}
