import React, {Component} from 'react';
import RiderForm from '../components/RiderForm';

export default class RiderFormScreen extends Component {
  state = {
    Rider: {
      name: '',
      category: '',
      sub: [],
    },
    currentUserData: null,
  };

  componentDidMount() {
    console.log(this.props.navigation);
    // const currentRider = this.props.navigation.getParam('Rider');

    // if (currentRider) {
    //   this.setState(prevState => ({Rider: (prevState.Rider = currentRider)}));
    // }
  }
  onRiderUpdated = Rider => {
    console.log(Rider);
    this.props.navigation.popToTop();
  };

  setCurrentUserData = text => {
    this.setState(prevState => ({
      currentUserData: (prevState.currentUserData = text),
    }));
  };

  submitUserDatas = () => {
    let cUserData = this.state.currentUserData;

    if (cUserData && cUserData.length > 2) {
      this.setState(prevState => ({
        Rider: {
          ...prevState.Rider,
          UserDatas: [...prevState.Rider.UserDatas, cUserData],
        },
      }));
    }
  };

  render() {
    return (
      <RiderForm
        setUserDatas={this.setCurrentUserData}
        submitUserDatas={this.submitUserDatas}
        Rider={this.state.Rider}
        onRiderUpdated={this.onRiderUpdated}
      />
    );
  }
}
