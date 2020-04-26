import firestore from '@react-native-firebase/firestore';

export function updateRider(Rider, updateComplete) {
  Rider.updatedAt = firestore.FieldValue.serverTimestamp();
  console.log('Updating Rider in firebase');

  //   firebase
  firestore()
    .collection('RidersList')
    .doc(Rider.id)
    .set(Rider)
    .then(() => updateComplete(Rider))
    .catch(error => console.log(error));
}

export async function getRiders(RidersRetrieved) {
  var RidersList = [];

  var snapshot = await firestore()
    .collection('RidersList')
    .doc('uuid')
    .orderBy('createdAt')
    .get();

  snapshot.forEach(doc => {
    const RiderItem = doc.data();
    RiderItem.id = doc.id;
    RidersList.push(RiderItem);
  });

  RidersRetrieved(RidersList);
}

export function addRider(Rider, addComplete) {
  Rider.createdAt = firestore.FieldValue.serverTimestamp();

  firestore()
    .collection('RidersList')
    .doc('uuid')
    .set(Rider)
    .then(snapshot => {
      Rider.id = snapshot.id;
      snapshot.set(Rider);
    })
    .then(() => addComplete(Rider))
    .catch(error => console.log(error));
}
