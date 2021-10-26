import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  Screen: {
    flex: 1,
    backgroundColor: '#fff',
  },
  Head: {
    backgroundColor: '#a5b4fc',
    height: 75,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 30,
  },
  LogoBck: {
    backgroundColor: '#fff',
    width: 50,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
  },
  Logo: {
    width: 40,
    height: 25,
  },
  Search: {
    backgroundColor: '#fff',
    width: 200,
    // height: 35,
    borderRadius: 20,
    justifyContent: 'space-between',
    paddingHorizontal: 15,
    flexDirection: 'row',
    alignItems: 'center',
  },
  Searcharea: {
    height: 37,
    borderRadius: 20,
    fontSize: 12,
    maxWidth: '80%',
  },
  SearchIcon: {
    width: 20,
    height: 20,
  },
  Kategori: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginVertical: 10,
  },
  KategoriStuff: {
    backgroundColor: '#DCDBDB',
    width: 100,
    height: 30,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    marginHorizontal: 5,
  },
  Produk: {
    marginHorizontal: 10,
  },
  ProdukList: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 10,
  },
  ProdukPack: {
    width: '45%',
    borderWidth: 1.2,
    padding: 10,
    borderRadius: 15,
  },
  ProdukImage: {
    width: 125,
    height: 125,
    alignSelf: 'center',
    marginBottom: 5,
  },
  ProdukNama: {
    fontSize: 16,
    marginVertical: 10,
  },
  ProdukHarga: {
    color: '#777777',
  },
  ProdukQuantitas: {
    color: '#777',
    alignSelf: 'flex-end',
    fontSize: 12,
  },
});
