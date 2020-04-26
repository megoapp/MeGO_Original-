import React from 'react';
import {StyleSheet, ScrollView} from 'react-native';
import MajorNav from '../components/majorNavigation';
import RidersList from '../components/HomeRidersList';

class Account extends React.Component {
  render() {
    // console.log(this.props.navigation.getParam('code'));
    return (
      <ScrollView style={Styles.viewAlignment}>
        <MajorNav navigation={this.props.navigation} />
        <RidersList />
      </ScrollView>
    );
  }
}

export default Account;

const Styles = StyleSheet.create({
  viewAlignment: {
    flex: 1,
    backgroundColor: '#fff',
  },

  topRightButton: {
    marginRight: 15,
  },
});
