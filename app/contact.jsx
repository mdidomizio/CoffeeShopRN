import { StyleSheet, Image, Platform, View, Text } from 'react-native';

export default function TabTwoScreen() {
  return (
    <View style={styles.container}>

      <Text style={styles.title}>Coffee Shop</Text>

      <Text style={styles.titleH2}>Our Story</Text>

      <Text style={styles.defaultText}>
        My money's in that office, right? If she start giving me some
        bullshit about it ain't there, and we got to go someplace else
        and get it, I'm gonna shoot you in the head then and there. Then
        I'm gonna shoot that bitch in the kneecaps, find out where my
        goddamn money is. She gonna tell me too. Hey, look at me when
        I'm talking to you, motherfucker. You listen: we go in there,
        and that nigga Winston or anybody else is in there, you the
        first motherfucker to get shot. You understand?
      </Text>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  title: {
    color: 'white',
    fontSize: 42,
    fontWeight: 'bold',
    textAlign: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
    marginBottom: 40,
    marginTop: 60,
  },
  titleH2: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'left',
    backgroundColor: 'rgba(0,0,0,0.5)',
    marginLeft: 16,
  },

defaultText: {
    color: 'white',
    fontSize: 18,
    fontWeight: '400',
    textAlign: 'justify',
    backgroundColor: 'rgba(0,0,0,0.5)',
    margin: 16,
  },
});
