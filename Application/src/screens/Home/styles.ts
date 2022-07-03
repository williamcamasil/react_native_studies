import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    width: 400,
    alignItems: 'center',
  },
  mainTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    margin: 16,
  },
  flatList: {
    marginBottom: 30,
    borderColor: '#000',
    borderWidth: 0.5,
    padding: 15,
    borderRadius: 10,
  },
  list: {
    marginTop: 5,
    width: 300,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  lineList: {
    fontSize: 15,
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  buttonView: {
    marginTop: 20,
  },
});
