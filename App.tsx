import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import database from '@react-native-firebase/database';

const App = () => {
  

  const [buttonsState, setButtonsState] = useState([false]);
  const [buttonsState1, setButtonsState1] = useState([false]);
  const [buttonsState2, setButtonsState2] = useState([false]);
  const [buttonsState3, setButtonsState3] = useState([false]);

  var x = 0;
  database()
    .ref('/divices/value')
    .once('value')
    .then(snapshot => {
      x = snapshot.val();
      if (x == 1) {
        buttonsState[1];
      } else if (x == 0) buttonsState[0];;
    });
  const toggleButton = (index) => {
    const newButtonsState = [...buttonsState];
    newButtonsState[index] = !newButtonsState[index];
    setButtonsState(newButtonsState);
    if (buttonsState[0]) {
      database()
        .ref('/divices')
        .set({
          value: 0,
        })
        .then(() => console.log('button off'));
    }
    else {
      database()
        .ref('/divices')
        .set({
          value: 1,
        })
        .then(() => console.log('button on'));

    }
  };

  const toggleButton1 = (index) => {
    const newButtonsState1 = [...buttonsState1];
    newButtonsState1[index] = !newButtonsState1[index];
    setButtonsState1(newButtonsState1);

    if (buttonsState1[0]) {
      database()
        .ref('/divices1')
        .set({
          value: 0,
        })
        .then(() => console.log('button 1 off'));
    }
    else {
      database()
        .ref('/divices1')
        .set({
          value: 1,
        })
        .then(() => console.log('button 1 on'));

    }

  };

  const toggleButton2 = (index) => {
    const newButtonsState2 = [...buttonsState2];
    newButtonsState2[index] = !newButtonsState2[index];
    setButtonsState2(newButtonsState2);
    if (buttonsState2[0]) {
      database()
        .ref('/divices2')
        .set({
          value: 0,
        })
        .then(() => console.log('button2 off'));
    }
    else {
      database()
        .ref('/divices2')
        .set({
          value: 1,
        })
        .then(() => console.log('button2 on'));

    }
  };

  const toggleButton3 = (index) => {
    const newButtonsState3 = [...buttonsState3];
    newButtonsState3[index] = !newButtonsState3[index];
    setButtonsState3(newButtonsState3);
    if (buttonsState3[0]) {
      database()
        .ref('/divices3')
        .set({
          value: 0,
        })
        .then(() => console.log('button3 off'));
    }
    else {
      database()
        .ref('/divices3')
        .set({
          value: 1,
        })
        .then(() => console.log('button3 on'));

    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <TouchableOpacity
          style={buttonsState[0] ? styles.buttonOn : styles.buttonOff}
          onPress={() => toggleButton(0)}
        >
          <Text style={styles.buttonText}>{buttonsState[0] ? 'On' : 'Off'}</Text>
        </TouchableOpacity>
        <Image
          source={buttonsState[0] ? require('./android/images/on.jpg') : require('./android/images/off.png')}
          style={styles.image}
        />
      </View>

      {/* Repeat the above pattern for the remaining buttons (1, 2, 3) */}

      <View style={styles.row}>
        <TouchableOpacity
          style={buttonsState1[0] ? styles.buttonOn : styles.buttonOff}
          onPress={() => toggleButton1(0)}
        >
          <Text style={styles.buttonText}>{buttonsState1[0] ? 'On' : 'Off'}</Text>
        </TouchableOpacity>
        <Image
          source={buttonsState1[0] ? require('./android/images/on.jpg') : require('./android/images/off.png')}
          style={styles.image}
        />
      </View>

      <View style={styles.row}>
        <TouchableOpacity
          style={buttonsState2[0] ? styles.buttonOn : styles.buttonOff}
          onPress={() => toggleButton2(0)}
        >
          <Text style={styles.buttonText}>{buttonsState2[0] ? 'On' : 'Off'}</Text>
        </TouchableOpacity>
        <Image
          source={buttonsState2[0] ? require('./android/images/on.jpg') : require('./android/images/off.png')}
          style={styles.image}
        />
      </View>


      <View style={styles.row}>
        <TouchableOpacity
          style={buttonsState3[0] ? styles.buttonOn : styles.buttonOff}
          onPress={() => toggleButton3(0)}
        >
          <Text style={styles.buttonText}>{buttonsState3[0] ? 'On' : 'Off'}</Text>
        </TouchableOpacity>
        <Image
          source={buttonsState3[0] ? require('./android/images/on.jpg') : require('./android/images/off.png')}
          style={styles.image}
        />
      </View>

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  row: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  buttonOn: {
    backgroundColor: 'green',
    padding: 40,
    marginRight: 10,
  },
  buttonOff: {
    backgroundColor: 'red',
    padding: 40,
    marginRight: 10,
  },
  buttonText: {
    color: 'white',
  },
  image: {
    width: 100,
    height: 100,
  },
});

export default App;
