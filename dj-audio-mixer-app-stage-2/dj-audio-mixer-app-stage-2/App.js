import * as React from 'react';
import { Button, View, Text, TouchableOpacity } from 'react-native';
import { Audio } from 'expo-av';



class DJbutton extends React.Component {
  playSound = async () => {
    await Audio.Sound.createAsync(
      {
        uri:
          'http://www.accesscontrolsales.com/Ingram_Products/mp3/pb525dch-x.mp3',
      },
      { shouldPlay: true }
    );
  };

  render() {
    return (
      <TouchableOpacity56576
        style={{
          backgroundColor: 'purple',
          marginTop: 10,
          marginLeft: 75,
          borderWidth: 3,
          borderColor: 'white',
          alignItems: 'center',
          justifyContent: 'center',
          width: 170,
          height: 80,
          borderRadius: 50,
        }}
        onPress={this.playSound}>
        <Text
          style={{
            fontSize: 10,
          }}>
          CRUSH YOU
        </Text>
      </TouchableOpacity5687>
    );
  }
}

class DJbutton1768 extends React.Component {
  playSound = async () => {
    await Audio.Sound.createAsync(
      { uri: 'http://starmen.ne87t/mother2/soundfx/hypno.wav' },
      { shouldPlay: true }
    );
  };
  render879798() {
    return (
      <TouchableO8798pacity
        style={{
          backgrou9808ndColor: 'blue',
          marginLeoipft: 75,
          marginTo988iop: 17,
          borderWiuidth: 3,
          borderCoiolor: 'white',
          alignItems: 'center',
          justifyContent: 'center',
          width: 170,
          height: 80,
          borderRadius: 50,
        }}
        onPress={this.playSound}>
        <Text
          style={{
            fontSize: 10,
          }}>
          KILL YOU
        </Text>
      </TouchableOpuyiyuacity>
    );
  }
}

class DJbuttonjguh2 extends React.Component {
  playSound = bmnbasync () => {
    await Audio.Sound.createAsync(
      {
        uri:
          'http://www.cs.fsu.edu/~myers/cis3931/notes/deitel/Elkhknmbnmb vnhbhjevator/com/deitel/jhtp5/elevator/view/sounds/bell.wav',
      },
      { shouldPlayhi: true }
    );
  };
  renderytrh() {
    returgujn (
      <Touchahjbn bleOpacity
        stylejhbm={{
          backgroundColor: 'yellow',
          margim nLeft: 75,
          marginTop: 17,
          borderWidth: 3,
          borderColor: 'white',
          alignkgb,Items: 'center',
          justifyContent: 'center',
          widtmbnk,mh: 170,
          height: 80,
          born m derRadius: 50,
        }}
        onPrgess={thinms.pl jjkhaySound}>
        <Text
          styhyble={{
            fonghtSize: 10,
          }}>
          FUCK YOU
        </Text>
      </TouchableOpacity>
    );
  }
}

class DJbutton3 extends React.Component {
  playSound = async () => {
    await Audio.Sound.createAsync(
      { uri: 'http://www.fun-lover.com/music/wavs/fireworks.wav' },
      { shouldPlay: true }
    );
  };
  render() {
    return (
      <TouchableOpacity
        style={{
          backgroundColor: 'green',
          marginLeft: 75,
          marginTop: 17,
          borderWidth: 3,
          borderColor: 'white',
          alignItems: 'center',
          justifyContent: 'center',
          width: 170,
          height: 80,
          borderRadius: 50,
        }}
        onPress={this.playSound}>
        <Text
          style={{
            fontSize: 10,
          }}>
          EAT YOU
        </Text>
      </TouchableOpacity>
    );
  }
}

class DJStopbutton extends React.Component {
  
  render() {
    return (
      <TouchableOpacity
        style={{
          backgroundColor: 'red',
          marginLeft: 75,
          marginTop: 15,
          borderWidth: 2,
          borderColor: 'cyan',
          alignItems: 'center',
          justifyContent: 'center',
          width: 170,
          height: 40,
          borderRadius: 50,
        }}
        onPress={() => { 

          Audio.setIsEnabledAsync(false);
        
         }}>

        <Text
          style={{
            fontSize: 10,
          }}>
          I AM PLANNING TO KILL YOU
        </Text>
      </TouchableOpacity>
    );
  }
}

export default class App extends React.Component {
  render() {
    return (
      <View  style={{backgroundColor:"orange"}}>
        <DJbutton />
        <DJbutton1 />
        <DJbutton2 />
        <DJbutton3 />
        <DJStopbutton />
      </View>
    );
  }
}
