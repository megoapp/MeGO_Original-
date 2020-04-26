// import React, {Component} from 'react';
// import {
//   Container,
//   Header,
//   Body,
//   Checkbox,
//   Title,
//   Card,
//   CardItem,
//   Left,
//   Right,
//   Icon,
//   Content,
//   Thumbnail,
//   Grid,
//   Col,
//   Text,
//   Button,
//   Subtitle,
// } from 'native-base';
// import StyleSheet from 'react-native';
// import View from 'react-native';
// import MobilePhoneIcon from '../icons/Mobile_phone.png';

// export default class RiderList extends Component() {
//   state = {
//     riderName: '',
//     numberOfRides: '',
//     regNumber: '',
//     riderRating: '',
//     riderETA: '',
//     riderPhoneNumber: '',
//     userId: '',
//   };
//   render() {
//     return (
//       <View>
//         <Card style={styles.card}>
//           <CardItem style={{borderRadius: 15}}>
//             <Left>
//               <Thumbnail
//                 source={require('../images/Addo.jpeg')}
//                 style={styles.thumbnailImg}
//               />
//               <View
//                 style={{
//                   alignItems: 'flex-start',
//                   top: -3,
//                   marginRight: 5,
//                 }}>
//                 <Title style={styles.SubtitleTextLeft}>Anim Addo</Title>
//                 <Subtitle style={styles.SubtitleTextLeft}>
//                   Number of rides
//                 </Subtitle>
//                 <Subtitle style={styles.SubtitleTextLeft}>Motor NO.</Subtitle>
//                 <Subtitle style={styles.SubtitleTextLeft}>Wait time</Subtitle>
//               </View>
//             </Left>
//             <Right>
//               <View style={{flexDirection: 'row'}}>
//                 <View
//                   style={{
//                     alignItems: 'flex-start',
//                     top: 5,
//                     marginRight: 5,
//                     marginTop: 10,
//                   }}>
//                   <Subtitle style={styles.SubtitleTextRight}>1054</Subtitle>
//                   <Subtitle style={styles.SubtitleTextRight}>
//                     M-2319-19
//                   </Subtitle>
//                   <Subtitle style={styles.SubtitleTextRight}>10 mins</Subtitle>
//                 </View>
//                 <View
//                   style={{
//                     flexDirection: 'column',
//                     alignItems: 'center',
//                     marginTop: 15,
//                   }}>
//                   <Text style={{top: -15, marginBottom: 5, fontWeight: '500'}}>
//                     5.0
//                   </Text>
//                   <Button style={{borderRadius: 0, backgroundColor: '#FFF'}}>
//                     <MobilePhoneIcon fill={'#000000'} />
//                   </Button>
//                 </View>
//               </View>
//             </Right>
//           </CardItem>
//         </Card>
//       </View>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   thumbnailImg: {
//     width: 80,
//     height: 80,
//     borderRadius: 40,
//   },
//   card: {
//     alignItems: 'center',
//     width: 410,
//     justifyContent: 'center',
//     paddingLeft: 5,
//     borderRadius: 15,
//     //borderColor: '#000000',
//   },
//   SubtitleTextLeft: {
//     borderBottomWidth: 5,
//     fontWeight: '500',
//     //textShadowColor: '#000000',
//   },
//   SubtitleTextRight: {
//     paddingTop: 5,
//     fontWeight: '500',
//     fontSize: 12,
//     //borderColor: '#000000',
//     //fontColor: '#000000',
//   },
// });
