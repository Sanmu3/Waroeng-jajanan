import React, {Component} from 'react';
import {
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {styles} from '../style/HomeStyle';

export default class Home extends Component {
  render() {
    return (
      <View style={styles.Screen}>
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

        <View style={styles.Kategori}>
          <ScrollView horizontal={true}>
            <View style={styles.KategoriStuff}>
              <Text>All</Text>
            </View>
            <View style={styles.KategoriStuff}>
              <Text> Biskuit </Text>
            </View>
            <View style={styles.KategoriStuff}>
              <Text> Bolu Cake </Text>
            </View>
            <View style={styles.KategoriStuff}>
              <Text> Instant Coffee </Text>
            </View>
            <View style={styles.KategoriStuff}>
              <Text> Instant Food </Text>
            </View>
            <View style={styles.KategoriStuff}>
              <Text> Instant Milk </Text>
            </View>
            <View style={styles.KategoriStuff}>
              <Text> Instant Noodle </Text>
            </View>
            <View style={styles.KategoriStuff}>
              <Text> Japilus </Text>
            </View>
            <View style={styles.KategoriStuff}>
              <Text> Kerupuk </Text>
            </View>
            <View style={styles.KategoriStuff}>
              <Text> Sambal </Text>
            </View>
            <View style={styles.KategoriStuff}>
              <Text> Wafer </Text>
            </View>
          </ScrollView>
        </View>

        <ScrollView>
          <View style={styles.Produk}>
            <View style={styles.ProdukList}>
              <View style={styles.ProdukPack}>
                <Image
                  style={styles.ProdukImage}
                  source={require('../logo/_.jpeg')}
                />
                <Text style={styles.ProdukNama}>Nama Produk</Text>
                <Text style={styles.ProdukHarga}>Harga</Text>
                <Text style={styles.ProdukQuantitas}>Quantitas</Text>
              </View>
              <View style={styles.ProdukPack}>
                <Image
                  style={styles.ProdukImage}
                  source={require('../logo/_.jpeg')}
                />
                <Text style={styles.ProdukNama}>Nama Produk</Text>
                <Text style={styles.ProdukHarga}>Harga</Text>
                <Text style={styles.ProdukQuantitas}>Quantitas</Text>
              </View>
            </View>

            <View style={styles.ProdukList}>
              <View style={styles.ProdukPack}>
                <Image
                  style={styles.ProdukImage}
                  source={require('../logo/_.jpeg')}
                />
                <Text style={styles.ProdukNama}>Nama Produk</Text>
                <Text style={styles.ProdukHarga}>Harga</Text>
                <Text style={styles.ProdukQuantitas}>Quantitas</Text>
              </View>
              <View style={styles.ProdukPack}>
                <Image
                  style={styles.ProdukImage}
                  source={require('../logo/_.jpeg')}
                />
                <Text style={styles.ProdukNama}>Nama Produk</Text>
                <Text style={styles.ProdukHarga}>Harga</Text>
                <Text style={styles.ProdukQuantitas}>Quantitas</Text>
              </View>
            </View>

            <View style={styles.ProdukList}>
              <View style={styles.ProdukPack}>
                <Image
                  style={styles.ProdukImage}
                  source={require('../logo/_.jpeg')}
                />
                <Text style={styles.ProdukNama}>Nama Produk</Text>
                <Text style={styles.ProdukHarga}>Harga</Text>
                <Text style={styles.ProdukQuantitas}>Quantitas</Text>
              </View>
              <View style={styles.ProdukPack}>
                <Image
                  style={styles.ProdukImage}
                  source={require('../logo/_.jpeg')}
                />
                <Text style={styles.ProdukNama}>Nama Produk</Text>
                <Text style={styles.ProdukHarga}>Harga</Text>
                <Text style={styles.ProdukQuantitas}>Quantitas</Text>
              </View>
            </View>
          </View>
        </ScrollView>
      </View>
    );
  }
}
