import React, {Component} from 'react';
import {Text, View, Image, TextInput, TouchableOpacity} from 'react-native';
import {styles} from '../style/DetailStyle';

export default class Detail extends Component {
  render() {
    return (
      <View>
        <View style={styles.Head}>
          <View style={styles.LogoBck}>
            <Image source={require('../Pic/Logo.png')} style={styles.Logo} />
          </View>
          <View style={styles.Search}>
            <TextInput style={styles.Searcharea} placeholder="Cari Barang Mu" />
            <TouchableOpacity>
              <Image
                style={styles.SearchIcon}
                source={require('../logo/loupe.png')}
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}
