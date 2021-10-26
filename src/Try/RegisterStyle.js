import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  Screen: {
    flex: 1,
    backgroundColor: '#eff6ff',
  },
  Head: {
    backgroundColor: '#60a5fa',
    width: '100%',
    height: '50%',
    borderBottomStartRadius: 30,
    borderBottomEndRadius: 30,
    // justifyContent: 'center',
    alignItems: 'flex-start',
    top: 0,
    padding: 30,
  },
  top: {
    flexDirection: 'row',
    // marginVertical: 20,
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '30%',
  },
  back: {
    width: 25,
    height: 25,
    tintColor: '#fff',
  },
  LogoBck: {
    backgroundColor: '#fff',
    width: 50,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  Logo: {
    width: 40,
    height: 25,
  },
  Title: {
    fontWeight: 'bold',
    fontSize: 24,
    color: '#fff',
    marginVertical: 25,
    marginBottom: 100,
  },
  Body: {
    backgroundColor: '#fff',
    alignItems: 'center',
    width: '85%',
    alignSelf: 'center',
    borderRadius: 20,
    position: 'absolute',
    top: '25%',
    height: '70%',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,

    elevation: 4,
  },

  Input: {
    backgroundColor: '#DCDBDB',
    width: '80%',
    borderRadius: 10,
    marginVertical: 20,
    paddingHorizontal: 15,
  },
  InputPass: {
    backgroundColor: '#DCDBDB',
    width: '80%',
    borderRadius: 10,
    marginVertical: 20,
    paddingHorizontal: 15,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  Pass: {
    tintColor: '#000',
    opacity: 0.37,
    width: 25,
    height: 25,
  },

  Button: {
    backgroundColor: '#a5b4fc',
    width: '70%',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 100,
    height: 50,
    marginVertical: 30,
  },
  ButtonText: {
    fontWeight: 'bold',
    color: '#fff',
  },
  Text: {
    fontWeight: 'bold',
    letterSpacing: 0.6,
  },
});
