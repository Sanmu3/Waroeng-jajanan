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
    justifyContent: 'center',
    alignItems: 'center',
    top: 0,
  },
  LogoBck: {
    backgroundColor: '#fff',
    width: 75,
    height: 75,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  Logo: {
    width: 50,
    height: 30,
  },
  Title: {
    fontWeight: 'bold',
    fontSize: 24,
    color: '#fff',
    marginVertical: 16,
    marginBottom: 100,
  },
  Body: {
    backgroundColor: '#fff',
    alignItems: 'center',
    width: '85%',
    alignSelf: 'center',
    borderRadius: 20,
    position: 'absolute',
    top: '30%',
    height: '60%',
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
  Scroll: {
    width: '85%',
    height: '100%',
  },

  Input: {
    backgroundColor: '#DCDBDB',
    width: '100%',
    borderRadius: 10,
    marginVertical: 20,
    paddingHorizontal: 15,
  },
  InputPass: {
    backgroundColor: '#DCDBDB',
    width: '100%',
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
  fitur: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  rememberme: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  Button: {
    backgroundColor: '#a5b4fc',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 100,
    height: 50,
    marginVertical: 30,
  },
  Touch: {
    width: '100%',
    alignItems: 'center',
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
