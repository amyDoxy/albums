import { StyleSheet } from 'react-native';

const container = StyleSheet.create({
 header: {
    backgroundColor: '#15566F',
    alignItems: 'center',
    justifyContent: 'center',
    height : 60,
    paddingTop: 15,
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 2},
    shadowOpacity: 0.2,
    elevation: 2,
    position: 'relative'
  },

  text: {
  	color: '#fff',
  	fontSize: 30,
  },

  card: {
  	borderWidth: 1,
  	borderRadius: 2,
  	borderColor: '#ddd',
  	borderBottomWidth: 0,
  	shadowColor: '#000',
    shadowOffset: { width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 1,
    marginLeft: 5,
    marginRight: 5,
    marginTop: 10
  },

  cardSection: {
  	borderBottomWidth: 1,
  	padding: 5,
  	backgroundColor: '#fff',
  	justifyContent: 'flex-start',
  	flexDirection: 'row',
  	borderColor: '#ddd',
  	position: "relative"
  },

  cardSectionText: {
  	flexDirection: 'column',
  	justifyContent: 'space-around'
  },

  thumbnailStyle: {
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 10,
    marginRight: 10,
  }


});

export default container;